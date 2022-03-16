import React, { useState } from "react";
import "./signin.scss";
import { Link } from "react-router-dom";
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
      await auth.signInWithEmailAndPassword(email, password);
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
        <form className="signin-formgroup" onSubmit={handleSubmit}>
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
          <button className="signin-btn">Sign In</button>
          <button className="signin-btn googlebtn" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
          <p>
            <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
