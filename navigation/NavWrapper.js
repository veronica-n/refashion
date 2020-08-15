import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes.js';

export default function NavWrapper() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
