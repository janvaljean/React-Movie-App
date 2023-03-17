import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
 import { ToastContainer, toast } from 'react-toastify';
import { MovieProvider } from "./context/MovieContext";

const App = () => {
  return (
    <div className="bg-gray-dark-main">
      <AuthContextProvider>
        <MovieProvider>
          <AppRouter />
          <ToastContainer/>
        </MovieProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
