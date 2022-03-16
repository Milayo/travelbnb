import React, {useState} from "react";
import "./signup.scss";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }
  };

   const handleChange = (event) => {
     const { name, value } = event.target;
     setUserCredentials({ ...userCredentials, [name]: value });
  };
  
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <div className="signup-container">
        <div className="signup-section1">
          <h3 className="signup-heading">Explore your world</h3>
          <p className="signup-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            placeat animi repellendus ipsum nulla, tempora officiis quasi?
            Fugit, harum consectetur.
          </p>
        </div>
        <div className="signup-formgroup">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <input
            type="password"
            placeholder="Verify Password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
          <button className="signup-btn">Sign Up</button>
          <p>
            <Link to="/signin">Already a user?</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
