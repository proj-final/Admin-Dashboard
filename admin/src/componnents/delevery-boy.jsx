import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";  
import Sidebar from '../Dashboard/Sidebar';

const Delivery = () => {
  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch delivery boys from the backend when the component mounts using Axios
  useEffect(() => {
    const fetchDeliveryBoys = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/delivery-boys');  // Adjust this route if necessary
        setDeliveryBoys(response.data);  // Set the data in the state
      } catch (error) {
        console.error("Error fetching delivery boys:", error);
      }
    };

    fetchDeliveryBoys();
  }, []);

  // Filter delivery boys based on the search query
  const filteredDeliveryBoys = deliveryBoys.filter(boy => {
    return boy.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
            placeholder="Search Delivery boy ..."
            className="border border-gray-300 rounded-full p-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query on input change
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Display filtered delivery boys */}
      <div className="mt-20 p-4">
        <h2 className="text-xl font-bold">Delivery Boys</h2>
        <ul>
          {filteredDeliveryBoys.length > 0 ? (
            filteredDeliveryBoys.map((boy) => (
              <li key={boy.id} className="border-b py-2">
                <p className="font-semibold">{boy.name}</p>
                <p>{boy.email}</p>
                <p>{boy.phone}</p>
              </li>
            ))
          ) : (
            <p>No delivery boys found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Delivery;