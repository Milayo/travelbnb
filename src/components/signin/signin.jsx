import React, { useState } from "react";
import "./signin.scss";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase/firebase.utils.js";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = userCredentials;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserCredentials({
        email: "",
        password: "",
        
      });
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  };
  return (
    <div className="signin">
      <div className="signin-container">
        <div className="signin-section1">
          <h3 className="signin-heading">Explore your world</h3>
          <p className="signin-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            placeat animi repellendus ipsum nulla, tempora officiis quasi?
            Fugit, harum consectetur.
          </p>
        </div>
        <div className="signin-formgroup">
          <form onSubmit={handleSubmit} className="formgroup">
            <input
              name="email"
              value={userCredentials.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input
              name="password"
              onChange={handleChange}
              value={userCredentials.password}
              type="password"
              placeholder="Password"
            />
            <button className="signin-btn" type="submit">
              Sign In
            </button>
          </form>
          <button className="signin-btn googlebtn" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
          <p>
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
