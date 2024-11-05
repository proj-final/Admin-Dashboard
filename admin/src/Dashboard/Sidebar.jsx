import React from 'react';
import { FaUser, FaUtensils, FaMotorcycle, FaClipboardList } from 'react-icons/fa';

const Sidebar = ({ onMenuSelect }) => {
  return (
    <aside className="bg-orange-500 text-white w-64 h-full fixed top-0 left-0 pt-16 flex flex-col">
      <div className="p-4">
        <h1 className="text-3xl font-bold">Admin</h1>
      </div>
      <nav className="flex flex-col mt-8 space-y-4 p-4">
        <div onClick={() => onMenuSelect('Client')} className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg cursor-pointer">
          <FaUser className="text-lg" />
          <span>Client</span>
        </div>
        <div onClick={() => onMenuSelect('Chief')} className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg cursor-pointer">
          <FaUtensils className="text-lg" />
          <span>Chefs</span>
        </div>
        <div onClick={() => onMenuSelect('Delivery Boy')} className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg cursor-pointer">
          <FaMotorcycle className="text-lg" />
          <span>Delivery Boy</span>
        </div>
        <div onClick={() => onMenuSelect('Order')} className="flex items-center space-x-2 hover:bg-orange-600 p-2 rounded-lg cursor-pointer">
          <FaClipboardList className="text-lg" />
          <span>Order</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;