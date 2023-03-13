import React from 'react'
import { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login =async () => {}
  const logout =async () => {}
  
  return (
    <div>
    
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}>
      <form className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]">
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Login
          </h2>
        
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              className="peer dark: text-white"
              placeholder=" "
              required
              onChange={(e) => setLoginEmail(e.target.value)}
              
            />
            <label htmlFor="floating_email">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer dark: text-white"
              name="floating_password"
              type="password"
              placeholder=" "
              required
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit">Login</button>
          <button type="button">
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Login
