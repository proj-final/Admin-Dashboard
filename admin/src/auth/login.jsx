import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import admin from "../image/traditiona.jpg";
import adminImage from "../image/admin-icon-strategy-collection-thin-600nw-2307398667.webp";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        window.localStorage.setItem("islogedIn",true)

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
                
               
                navigate('/dashboard'); 
            } else {
                alert(data.message); 
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        
        <section className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${admin})` }}>
            <div className="bg-white flex rounded-2xl shadow-lg p-5 sm:p-10 w-full max-w-4xl">
                <div className="w-full sm:w-1/2 p-5">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                        Already a member? Easily log in below.
                    </p>
                    <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                        <input
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="bg-orange-500 text-white py-2 rounded-xl shadow-md hover:bg-orange-600 transition duration-200">
                            Login
                        </button>
                        <Link to="/signup">
                            <p className="text-cyan-500 hover:text-cyan-600">Create new account</p>
                        </Link>
                    </form>
                </div>
                <div className="hidden sm:block w-1/2">
                    <img className="rounded-2xl h-full object-cover" src={adminImage} alt="Admin" />
                </div>
            </div>
        </section>
        
    );
}

export default Login;
