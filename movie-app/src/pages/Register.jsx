import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, signUpProviderGoogle } = useContext(AuthContext);

  //* birleştirilmiş state
  // const [info, setInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    
    createUser(email, password, displayName);
  };

  // const { email, password, firstName, lastName } = info;
  // const hadleChange = (e) =>
  // setInfo({ ...info, [e.target.id]: e.target.value });

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_text"
              id="firstName"
              type="text"
              required
              placeholder=" "
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text">First Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_text"
              id="lastName"
              type="text"
              required
              placeholder=" "
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="email"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              className="peer"
              name="floating_password"
              id="password"
              type="password"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="btn-danger flex justify-between items-center"
            type="button"
            onClick={()=> signUpProviderGoogle()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
