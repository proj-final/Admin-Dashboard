import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { FaUtensils, FaUserFriends, FaMotorcycle, FaHamburger, FaClipboardList } from "react-icons/fa";
import ClientBarChart from "./BarChart";
import ClientOrderPieChart from "./ClientOrderPieChart";

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
    <div className="grid h-screen grid-cols-12 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-6">
          <div className="text-4xl font-bold text-gray-100 mb-8">Dashboard Overview</div>

          {/* Statistic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Card Template */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <FaUtensils className="text-white text-4xl mb-4" />
              <h2 className="text-lg font-semibold">Total Chefs</h2>
              <p className="text-3xl font-bold">{chefCount}</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <FaUserFriends className="text-white text-4xl mb-4" />
              <h2 className="text-lg font-semibold">Total Clients</h2>
              <p className="text-3xl font-bold">{clientCount}</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-orange-400 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <FaMotorcycle className="text-white text-4xl mb-4" />
              <h2 className="text-lg font-semibold">Total Delivery Boys</h2>
              <p className="text-3xl font-bold">{deliveryBoyCount}</p>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <FaHamburger className="text-white text-4xl mb-4" />
              <h2 className="text-lg font-semibold">Total Dishes</h2>
              <p className="text-3xl font-bold">{dishCount}</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <FaClipboardList className="text-white text-4xl mb-4" />
              <h2 className="text-lg font-semibold">Total Orders</h2>
              <p className="text-3xl font-bold">{orderCount}</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Client Growth Bar Chart */}
            <div >
              <ClientBarChart />
            </div>

            {/* Client vs Order Pie Chart */}
            <div >
              <ClientOrderPieChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
