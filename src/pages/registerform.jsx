import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userRegister } from "../apis";
import { message } from "antd";

const initialState = {
    email: "",
    name: "",
    dob: "",
    image: "",
    password: "",
};

const RegisterForm = () => {
    const [formState, setState] = useState(initialState);

    const isLoggedIn = Boolean(localStorage.getItem("token"));

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await userRegister(formState);

            setState(initialState);
            message.success("Registration completed")
            navigate("/login");
        } catch (error) {
            console.error("Registration failed:", error);
            message.error("Email_id already Register")

        }
    };



    if (isLoggedIn) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="bg-orange-200 h-[100vh] ">
            <div className="flex justify-center pt-3 underline  ">
                <h1 className="text-5xl font-bold">Register</h1>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address *
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password *
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name *
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">
                                Image
                            </label>
                            <input
                                type="url"
                                className="form-control"
                                id="image"
                                name="image"
                                onChange={handleChange}
                                value={formState.image}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">
                                Date of Birth *
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="dob"
                                name="dob"
                                value={formState.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <span style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <h5>Already Have an Account ➡</h5>
                            <Link to="/login" style={{ float: "right" }}>
                                Login
                            </Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
