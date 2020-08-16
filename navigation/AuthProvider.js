import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
/**
 * This provider is created
 * to access user in whole app
 * inspired by: https://github.com/amandeepmittal/react-native-examples/tree/master/reactnav5-stack-navigator
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
            console.log('Sign in Failed');
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
              const db = firestore();
              const user_id = user.user.uid;
              console.log(user_id);
              const userRef = db.collection('users').doc(user_id);
              userRef.set({
                email,
                user_id,
                num: 0,
                den: 0,
                score: 100
              });
            });
            /*.then((user) => {
              const db = firestore();
              const user_id = user.user.uid;
              db.collection('users').doc(user_id).collection('closet').doc(user_id)
              .set({});
            });*/
          } catch (e) {
            console.log(e);
            if (e.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (e.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
            console.log('Sign out Failed');
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
