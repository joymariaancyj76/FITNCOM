import React, { useContext, useState } from "react";
import "./Signin.css";
import axios from "axios";
import { UserStatusContext } from "../../Scripts/AppContainer";

const Signin = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useContext(UserStatusContext);

  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => setIsSignIn(!isSignIn);
  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const SignIn = async (event) => {
    event.preventDefault();
    try {
      const body = {
        name: loginDetails.name,
        email: loginDetails.email,
        password: loginDetails.password,
      };
      const response = await axios.post(
        "http://localhost:8080/account/login",
        body,
        { credentials: "include" }
      );
      console.log("response.data:", response.data);
      if (response.data.message == "success") {
        setIsLoggedIn(true);
        localStorage.setItem("access-token", response.data.results.accessToken);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
    }
  };

  const SignUp = async (event) => {
    event.preventDefault();
    try {
      const body = {
        name: loginDetails.name,
        email: loginDetails.email,
        password: loginDetails.password,
      };
      const response = await axios.post(
        "http://localhost:8080/account/signup",
        body
      );
      console.log("response.data:", response.data);
      if (response.data.message == "success") {
        setIsLoggedIn(true);
        localStorage.setItem("access-token", response.data.results.accessToken);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
    }
  };

  const onInputChanged = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setIsValidEmail(emailRegex.test(value));
    }

    setLoginDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="signin-container">
      {" "}
      {/* Centering container */}
      <div className="signin">
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <form>
          {!isSignIn && (
            <label>
              Name:
              <input
                type="text"
                name="name"
                required
                onChange={onInputChanged}
              />
            </label>
          )}
          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              onChange={onInputChanged}
            />
          </label>
          <label>
            Password:
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={onInputChanged}
              required
            />
          </label>
          <div className="toggle-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handlePasswordToggle}
            />
            <span>Show Password</span>
          </div>
          <button
            type="submit"
            onClick={isSignIn ? SignIn : SignUp}
            disabled={!isValidEmail || loginDetails.password === ""}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p>
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm}>
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signin;
