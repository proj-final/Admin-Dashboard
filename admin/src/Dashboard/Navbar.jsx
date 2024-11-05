import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        window.localStorage.removeItem("islogedIn")
        
        navigate("/")
    };

    return (
        <nav className="bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-orange-500 mr-6">
                    Admin👨‍💻
                </Link>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/notifications" className="relative">
                    <FaBell className="text-2xl text-gray-700" />
                </Link>
                <button onClick={handleLogout} className="flex items-center text-gray-700">
                    <FaSignOutAlt className="text-xl mr-1" />
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;