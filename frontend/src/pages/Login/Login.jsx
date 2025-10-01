import React, { useState } from "react";
import "./Login.css";
import axios from 'axios'
import { useAuth } from "../../contextAPI/ContextAPI";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");

    const {login} = useAuth();

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response =await axios.post("http://localhost:3000/api/auth/login",{email,password});
            // console.log(response);
            if(response.data.success) {
                login(response.data.user)
                localStorage.setItem("token",response.data.token)
                if(response.data.user.role === "Admin") {
                    navigate("/admin-dashboard")
                } else {
                    navigate("/employee-dashboard");
                }
            }
        } catch(err) {
            if(err.response && err.response.data.error) {
                setError(`${err.response.data.error}. Please try again!`)
            } else {
                setError("Server Error");
            }
        }
    };

    return (
        <div className="login-container">
            <header>
                <h1>Welcome user!👋<br></br> ACE Engineering College</h1>
            </header>
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <p>{error}</p>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
