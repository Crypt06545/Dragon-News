/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  console.log(user);

  // sign Up a user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // log in a user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log out a user
  const logOut = () => {
    return signOut(auth);
  };
  // Add an effect to observe user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // cleanUp function
    return () => {
      unsubscribe();
    };
  }, [auth]);

  // Context value
  const userInfo = {
    user,
    setUser,
    auth,
    createNewUser,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
