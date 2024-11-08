import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";  // Import axios
import Sidebar from '../Dashboard/Sidebar';

const Client = () => {
  // State to store all clients and the filtered clients
  const [clients, setClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch clients from the backend when the component mounts using Axios
  useEffect(() => {
    const fetchClients = async () => {
      try {
        // Make a GET request to the API using Axios
        const response = await axios.get('http://localhost:5000/api/admin/clients');  // Ensure this matches your backend route
        setClients(response.data);  // Update state with the fetched clients
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  // Filter clients based on the search query
  const filteredClients = clients.filter(client => {
    return client.name.toLowerCase().includes(searchQuery.toLowerCase());
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
            placeholder="Search Client..."
            className="border border-gray-300 rounded-full p-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Display filtered clients */}
      <div className="mt-20 p-4">
        <h2 className="text-xl font-bold">Clients</h2>
        <ul>
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <li key={client.id} className="border-b py-2">
                <p className="font-semibold">{client.name}</p>
                <p>{client.email}</p>
                <p>{client.phoneNumber}</p>
              </li>
            ))
          ) : (
            <p>No clients found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Client;