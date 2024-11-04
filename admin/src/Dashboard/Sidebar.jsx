import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUtensils, FaMotorcycle, FaClipboardList } from 'react-icons/fa'; // Icons for Client, Chefs, Delivery Boy, Order

const Sidebar = () => {
    return (
        <aside className="bg-orange-500 text-white w-64 h-full fixed top-0 left-0 pt-16 flex flex-col">
            <div className="p-4">
            </div>
            <nav className="flex flex-col mt-8 space-y-4 p-4">
                <Link to="/client" className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg">
                    <FaUser className="text-lg" /> 
                    <span>Client</span>
                </Link>
                <Link to="/chefs" className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg">
                    <FaUtensils className="text-lg" /> 
                    <span>Chefs</span>
                </Link>
                <Link to="/delivery-boy" className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg">
                    <FaMotorcycle className="text-lg" />
                    <span>Delivery Boy</span>
                </Link>
                <Link to="/order" className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg">
                    <FaClipboardList className="text-lg" /> 
                    <span>Order</span>
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;