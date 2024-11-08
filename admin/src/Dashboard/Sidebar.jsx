import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaUtensils, FaMotorcycle, FaClipboardCheck, FaHamburger, FaHome } from 'react-icons/fa'; 

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

    return (
        <aside
            className={`bg-gradient-to-b from-orange-500 to-white text-gray-800 w-64 h-full fixed top-0 left-0 pt-16 flex flex-col transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center text-orange-500"></h1>
            </div>
            <nav className="flex flex-col mt-8 space-y-4 p-4">
             
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-800 p-2 hover:bg-orange-500 hover:text-white rounded-full transition duration-200 fixed top-4 right-4"
                >
                    {isSidebarOpen ? 'Close' : 'Open'}
                </button>
                
               
                <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 p-3 text-lg font-semibold rounded-lg transition-colors duration-200 hover:bg-orange-100 hover:text-orange-500 hover:border-l-4 hover:border-orange-500 group"
                >
                    <FaHome className="text-3xl transition duration-200 group-hover:text-blue-500 transform group-hover:scale-110" />
                    <span className="transition-colors duration-200 group-hover:text-orange-500 group-hover:scale-105">Dashboard</span>
                </Link>

               
                <Link
                    to="/client"
                    className="flex items-center space-x-3 p-3 text-lg font-semibold rounded-lg transition-colors duration-200 hover:bg-orange-100 hover:text-orange-500 hover:border-l-4 hover:border-orange-500 group"
                >
                    <FaUserFriends className="text-3xl transition duration-200 group-hover:text-blue-500 transform group-hover:scale-110" />
                    <span className="transition-colors duration-200 group-hover:text-orange-500 group-hover:scale-105">Client</span>
                </Link>

                
                <Link
                    to="/chief"
                    className="flex items-center space-x-3 p-3 text-lg font-semibold rounded-lg transition-colors duration-200 hover:bg-orange-100 hover:text-orange-500 hover:border-l-4 hover:border-orange-500 group"
                >
                    <FaUtensils className="text-3xl transition duration-200 group-hover:text-green-500 transform group-hover:scale-110" />
                    <span className="transition-colors duration-200 group-hover:text-orange-500 group-hover:scale-105">Chief</span>
                </Link>

                
                <Link
                    to="/delivery-boy"
                    className="flex items-center space-x-3 p-3 text-lg font-semibold rounded-lg transition-colors duration-200 hover:bg-orange-100 hover:text-orange-500 hover:border-l-4 hover:border-orange-500 group"
                >
                    <FaMotorcycle className="text-3xl transition duration-200 group-hover:text-red-500 transform group-hover:scale-110" />
                    <span className="transition-colors duration-200 group-hover:text-orange-500 group-hover:scale-105">Delivery Boy</span>
                </Link>

                
                <Link
                    to="/dishes"
                    className="flex items-center space-x-3 p-3 text-lg font-semibold rounded-lg transition-colors duration-200 hover:bg-orange-100 hover:text-orange-500 hover:border-l-4 hover:border-orange-500 group"
                >
                    <FaHamburger className="text-3xl transition duration-200 group-hover:text-purple-500 transform group-hover:scale-110" />
                    <span className="transition-colors duration-200 group-hover:text-orange-500 group-hover:scale-105">Dishes</span>
                </Link>

               
                <Link
                    to="/order"
                    className="flex items-center space-x-3 p-3 text-lg font-semibold rounded-lg transition-colors duration-200 hover:bg-orange-100 hover:text-orange-500 hover:border-l-4 hover:border-orange-500 group"
                >
                    <FaClipboardCheck className="text-3xl transition duration-200 group-hover:text-yellow-500 transform group-hover:scale-110" />
                    <span className="transition-colors duration-200 group-hover:text-orange-500 group-hover:scale-105">Order</span>
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
