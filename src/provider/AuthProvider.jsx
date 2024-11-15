/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/Firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Add an effect to observe user authentication state
  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //       setUser(currentUser);
  //     });

  //     // Cleanup subscription on unmount
  //     return () => unsubscribe();
  //   }, [auth]);

  // Context value
  const userInfo = {
    user,
    setUser,
    auth,
    createNewUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
