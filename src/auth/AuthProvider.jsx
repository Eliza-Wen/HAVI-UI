import React, { createContext, useContext, useEffect, useState } from 'react';
import { signIn as providerSignIn, signOut as providerSignOut, signUp as providerSignUp, onAuthStateChanged } from './providers';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Subscribe to provider auth state changes (mock provider triggers immediately)
    const unsubscribe = onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const signIn = async (creds) => {
    const u = await providerSignIn(creds);
    setUser(u);
    return u;
  };

  const signUp = async (creds) => {
    const u = await providerSignUp(creds);
    setUser(u);
    return u;
  };

  const signOut = async () => {
    await providerSignOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
