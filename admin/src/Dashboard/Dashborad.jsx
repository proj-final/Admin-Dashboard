import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { FaUtensils, FaUserFriends, FaMotorcycle, FaHamburger, FaClipboardList } from "react-icons/fa";
import ClientBarChart from "./BarChart";  // Import the Bar Chart component
import ClientOrderPieChart from "./ClientOrderPieChart";  // Import the Pie Chart component

const Dashboard = () => {
  const [chefCount, setChefCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [deliveryBoyCount, setDeliveryBoyCount] = useState(0);
  const [dishCount, setDishCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchChefCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/chefs");
        setChefCount(response.data.length);
      } catch (error) {
        console.error("Error fetching chef data", error);
      }
    };

    const fetchClientCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/clients");
        setClientCount(response.data.length);
      } catch (error) {
        console.error("Error fetching client data", error);
      }
    };

    const fetchDeliveryBoyCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/delivery-boys");
        setDeliveryBoyCount(response.data.length);
      } catch (error) {
        console.error("Error fetching delivery boy data", error);
      }
    };

    const fetchDishCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/dishes");
        setDishCount(response.data.length);
      } catch (error) {
        console.error("Error fetching dish data", error);
      }
    };

    const fetchOrderCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/orders");
        setOrderCount(response.data.length);
      } catch (error) {
        console.error("Error fetching order data", error);
      }
    };

    fetchChefCount();
    fetchClientCount();
    fetchDeliveryBoyCount();
    fetchDishCount();
    fetchOrderCount();
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-between bg-cover bg-center">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen ml-64">
        <Navbar />
        <main className="p-6 pt-24">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6"></h1>

          {/* Existing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Card for Total Chefs, Clients, Delivery Boys, Dishes, Orders... */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center">
              <FaUtensils className="text-white text-5xl mb-4" />
              <h2 className="text-xl font-semibold text-white">Total Chefs</h2>
              <p className="text-5xl font-bold text-white">{chefCount}</p>
            </div>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-400 p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center">
              <FaUserFriends className="text-white text-5xl mb-4" />
              <h2 className="text-xl font-semibold text-white">Total Clients</h2>
              <p className="text-5xl font-bold text-white">{clientCount}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center">
              <FaMotorcycle className="text-white text-5xl mb-4" />
              <h2 className="text-xl font-semibold text-white">Total Delivery Boys</h2>
              <p className="text-5xl font-bold text-white">{deliveryBoyCount}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center">
              <FaHamburger className="text-white text-5xl mb-4" />
              <h2 className="text-xl font-semibold text-white">Total Dishes</h2>
              <p className="text-5xl font-bold text-white">{dishCount}</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center">
              <FaClipboardList className="text-white text-5xl mb-4" />
              <h2 className="text-xl font-semibold text-white">Total Orders</h2>
              <p className="text-5xl font-bold text-white">{orderCount}</p>
            </div>
          </div>

          {/* Bar and Pie Chart Layout */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Client Growth Bar Chart */}
            <div className="col-span-1 w-full p-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <ClientBarChart />
            </div>

            {/* Client vs Order Pie Chart */}
            <div className="col-span-1 w-full p-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              <ClientOrderPieChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
