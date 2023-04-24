import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import {
  toastErrorNotify,
  toastInfoNotify,
  toastSuccessNotify,
  toastWarningNotify,
} from "../helpers/ToastNotify";

export const AuthContext = createContext();

//* with custom hook
// export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu

      await createUserWithEmailAndPassword(auth, email, password);
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      navigate("/");
      toastSuccessNotify("Successfully registered");
      //   console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const signIn = async (email, password) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toastSuccessNotify("Successfully Logged in");
      //   console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    toastInfoNotify("Successfully logged out");
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        console.log("user logged out");
        sessionStorage.removeItem("user");
      }
    });
  };

  const signUpProviderGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        toastSuccessNotify("Successfully signed");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const passwordResetProviderGoogle = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarningNotify("Please check your email");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toastErrorNotify(error.message);
        // ..
      });
  };
  const varificationProvider = (email) => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };

  const values = {
    createUser,
    signIn,
    logOut,
    signUpProviderGoogle,
    passwordResetProviderGoogle,
    varificationProvider,
    currentUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
