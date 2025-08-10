
"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User, onAuthStateChanged, signOut as firebaseSignOut, Auth } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  auth: Auth;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      // Let the onAuthStateChanged listener handle the user state update.
      // Redirects can be handled in pages that require authentication.
      window.location.href = '/';
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
