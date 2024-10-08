import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userLogin } from "../apis.js";
import { message } from "antd";



const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isLoggedIn = Boolean(localStorage.getItem("token"));

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userLogin({ email, password });
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                message.success("Login Successfully")
                setEmail("");
                setPassword("");
                navigate("/");
            } else {
                console.error("Login failed:", data.message);
                message.error("Invalid Email or Password")
            }
        } catch (error) {
            console.error("Error during login:", error);
            message.error("An error occurred during login. Please try again.");
        }
    };




    return (
        <div className="bg-orange-200 h-[100vh] ">
            <div className="flex justify-center pt-12">
                <h1 className="text-5xl font-bold">Login</h1>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                            <h5>New Account ➡</h5>
                            <Link to="/register" style={{ float: "right" }}>
                                Register
                            </Link></span>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
