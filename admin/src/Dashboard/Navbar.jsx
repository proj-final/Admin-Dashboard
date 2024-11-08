import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import {  FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        window.localStorage.removeItem("islogedIn")
        
        navigate("/")
    };

    return (
        <nav className="bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <div className="flex items-center">
                <Link to="/dashboard" className="text-2xl font-bold text-orange-500 mr-6">
                    Admin👨‍💻
                </Link>
            
            </div>
            <div className="flex items-center space-x-4">
               
                <button onClick={handleLogout} className="flex items-center bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                    <FaSignOutAlt className="text-xl mr-1" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;