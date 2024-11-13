import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const toggleForm = () => setIsSignIn(!isSignIn);
    const handlePasswordToggle = () => setShowPassword(!showPassword);

    return (
        <div className="signin-container"> {/* Centering container */}
            <div className="signin">
                <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
                <form>
                    {!isSignIn && (
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                    )}
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Password:
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
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
                    <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
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
