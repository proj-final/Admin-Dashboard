import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; 
import Sidebar from '../Dashboard/Sidebar';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch orders from the backend when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/orders");  // Replace with your backend route
        setOrders(response.data);  // Store the fetched orders in the state
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Filter orders based on the search query
  const filteredOrders = orders.filter((order) =>
    order.id.toString().includes(searchQuery) || order.client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Sidebar/>
      <div className="bg-orange-500 w-full p-4 flex items-center justify-between fixed top-0 left-0 shadow-lg z-10">
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-200"
        >
          Admin👨💻
        </Link>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search Order..."
            className="border border-gray-300 rounded-full p-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // Update search query state on change
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Display filtered orders */}
      <div className="mt-20 p-4">
        <h2 className="text-xl font-bold">Orders</h2>
        <ul>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <li key={order.id} className="border-b py-2">
                <p className="font-semibold">Order ID: {order.id}</p>
                <p>Client: {order.client.name}</p>
                <p>Dish: {order.dish.title}</p>
                <p>Status: {order.status}</p>
              </li>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Order;