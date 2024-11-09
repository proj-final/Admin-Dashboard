import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import adminBackground from "../image/traditiona.jpg";
import adminImage from "../image/admin-icon-strategy-collection-thin-600nw-2307398667.webp";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        let tempErrors = {};
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Please enter a valid email address";
        }
        if (!password) {
            tempErrors.password = "Password is required";
        } else if (password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError("");

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/login/admin", {
                email,
                password,
            });

            if (response.status === 200) {
                window.localStorage.setItem("isLoggedIn", true);
                navigate("/dashboard");
            } else {
                setLoginError("Invalid email or password. Please try again.");
                setPassword("");
            }
        } catch (error) {
            setLoginError("An error occurred. Please try again later.");
            setPassword("");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 relative">
            <div className="absolute inset-0">
                <img src={adminBackground} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 py-12 lg:py-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 p-10 lg:p-14 bg-gray-50">
                            <h2 className="text-4xl font-bold text-orange-600 mb-6">Admin Login</h2>
                            <p className="text-gray-600 mb-10">Access powerful tools for managing the application.</p>

                            {loginError && (
                                <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-500 border border-red-200 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {loginError}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (errors.email) setErrors({ ...errors, email: "" });
                                            setLoginError("");
                                        }}
                                        className={`w-full px-4 py-4 rounded-xl text-gray-700 bg-gray-50 border ${
                                            errors.email || loginError ? 'border-red-500' : 'border-gray-200'
                                        } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200`}
                                        placeholder="Email address"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (errors.password) setErrors({ ...errors, password: "" });
                                            setLoginError("");
                                        }}
                                        className={`w-full px-4 py-4 rounded-xl text-gray-700 bg-gray-50 border ${
                                            errors.password || loginError ? 'border-red-500' : 'border-gray-200'
                                        } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200`}
                                        placeholder="Password"
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600 transform transition-all duration-200 font-medium ${
                                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Signing in...
                                        </div>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </form>
                        </div>

                        <div className="hidden lg:block w-1/2 relative">
                            <img src={adminImage} alt="Admin" className="w-full h-full object-cover rounded-r-3xl" />
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-orange-300/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
