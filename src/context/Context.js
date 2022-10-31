import { createContext, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';

export const Context = createContext({});

export const useUserContext = useContext(Context);

const ContextProvider = ({ children }) => {
  const registerUser = async (name, email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const updateUser = await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const result = await result;
  };
  const loginUser = () => {};
  const logoutUser = () => {};
  const forgotPassword = () => {};

  return <Context.Provider>{children}</Context.Provider>;
};
