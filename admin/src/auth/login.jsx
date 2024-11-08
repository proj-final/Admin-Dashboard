import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import admin from "../image/traditiona.jpg";
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
        
        // Email validation
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Please enter a valid email address";
        }

        // Password validation
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
            const response = await fetch('http://localhost:5000/api/login/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                window.localStorage.setItem("islogedIn", true);
                navigate('/dashboard');
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
        <div className="min-h-screen relative bg-gray-50">
            <div className="absolute inset-0">
                <img src={admin} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 p-8 lg:p-12">
                            <div className="max-w-md mx-auto">
                                <div className="space-y-2 mb-10">
                                    <h2 className="text-4xl font-bold text-orange-500">Welcome Back, Admin</h2>
                                    <p className="text-gray-600">Manage your application with our powerful admin tools</p>
                                </div>

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
                                        <div className="relative">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    if (errors.email) setErrors({...errors, email: ""});
                                                    setLoginError("");
                                                }}
                                                className={`w-full px-4 py-3.5 rounded-xl text-gray-700 bg-gray-50 border ${
                                                    errors.email || loginError ? 'border-red-500' : 'border-gray-200'
                                                } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200`}
                                                placeholder="Email address"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    if (errors.password) setErrors({...errors, password: ""});
                                                    setLoginError("");
                                                }}
                                                className={`w-full px-4 py-3.5 rounded-xl text-gray-700 bg-gray-50 border ${
                                                    errors.password || loginError ? 'border-red-500' : 'border-gray-200'
                                                } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200`}
                                                placeholder="Password"
                                            />
                                            {errors.password && (
                                                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input 
                                                type="checkbox" 
                                                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                        </label>
                                        <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                                            Forgot password?
                                        </a>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full bg-orange-500 text-white py-3.5 rounded-xl hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 font-medium ${
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
                        </div>

                        <div className="hidden lg:block w-1/2 relative bg-orange-50">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                            <img 
                                src={adminImage} 
                                alt="Admin" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
                <div className="absolute top-1/3 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
            </div>
        </div>
    );
}

export default Login;