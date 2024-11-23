import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Signin.css";
import axios from "axios";
import { UserStatusContext } from "../../Scripts/AppContainer";
import AppHelper from "../../Scripts/AppHelper";

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

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const signInValidationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    });

    const signUpValidationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required("Required"),
    });

    const onSubmit = (values) => {
        console.log(isSignIn ? "Sign-in Form Data" : "Sign-up Form Data", values);
    };
    const SignIn = async (event) => {
      event.preventDefault();
      try {
        const body = {
          name: loginDetails.name,
          email: loginDetails.email,
          password: loginDetails.password,
        };
        const response = await axios.post(
          `${AppHelper.getServerUrl()}/account/login`,
          body,
          {
            credentials: "include",
          }
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
          `${AppHelper.getServerUrl()}/account/signup`,
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

    return (
        <div className="signin-container"> {/* Centering container */}
            <div className="signin">
                <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={isSignIn ? signInValidationSchema : signUpValidationSchema}
                    onSubmit={onSubmit}
                >
                    {() => (
                        <Form>
                            {!isSignIn && (
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" id="name" name="name" />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </div>
                            )}
                            <div>
                                <label htmlFor="email">Email/Phone No</label>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type={showPassword ? "text" : "password"} id="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            {!isSignIn && (
                                <div>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <Field type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" />
                                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                                </div>
                            )}
                            <div className="toggle-password">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={handlePasswordToggle}
                                />
                                <h4>Show Password</h4>
                            </div>
                <button
                  type="submit"
                  onClick={isSignIn ? SignIn : SignUp}
                  disabled={!isValidEmail || loginDetails.password === ""}
                  className="signinbutton">{isSignIn ? "Sign In" : "Sign Up"}</button>
                        </Form>
                    )}
                </Formik>
                <p>
                    {isSignIn ? "Don't have an account?" : "Already have an account?"} {" "}
                    <button type="button" onClick={toggleForm} className="toggle-button">
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signin;
