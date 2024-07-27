import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    sendPasswordResetEmail
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState();

   function logOut() {
       return signOut(auth);
   }

   function signUp(email, password) {
       return createUserWithEmailAndPassword(auth, email, password)
           .then(userCredential => {
               // Account creation successful
               return userCredential.user;
           })
           .catch(error => {
               // Handle errors here
               throw new Error(error.message);
           });
   }

   function signIn(email, password) {
       return signInWithEmailAndPassword(auth, email, password);
   }

   function resetPassword(email) {
       return sendPasswordResetEmail(auth, email);
   }

   function updateEmailAddress(newEmail) {
       if (!currentUser) {
           throw new Error('No user is currently signed in.');
       }
       return updateEmail(currentUser, newEmail);
   }
   
   useEffect(() =>  {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
           setCurrentUser(user);
       });
       return unsubscribe;
   }, []);
   
   return (
       <AuthContext.Provider
           value={{
               resetPassword,
               signUp,
               signIn,
               logOut,
               currentUser,
               updateEmailAddress,
           }}
       >
           {children}
       </AuthContext.Provider>
   );
}

AuthProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
