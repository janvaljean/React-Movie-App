import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

//* with custom hook
// export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };

const createUser = async (email, password) => {
  try {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

const AuthContextProvider = ({ children }) => {
  const values = { createUser, currentUser: { displayName: "felix franko" } };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
