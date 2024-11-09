import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from '../Dashboard/Sidebar';

const Client = () => {
  const [clients, setClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/clients');
        setClients(response.data);
      } catch (error) {
        setError('Error fetching clients data');
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filteredClients = clients
    .filter(client => client.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  return (
    <div className="grid grid-cols-4 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="col-span-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-3 grid grid-rows-[auto,1fr]">
        {/* Header */}
        <div className="bg-orange-500 p-4 grid grid-cols-3 items-center fixed top-0 left-0 right-0 shadow-lg z-10">
          <Link
            to="/dashboard"
            className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-200 col-span-1"
          >
            Admin👨‍💻
          </Link>
          <div className="col-span-2 flex justify-end">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search Client..."
                className="border border-gray-300 rounded-full p-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Client Table */}
        <div className="pt-24 px-8 overflow-auto">
          {filteredClients.length > 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
              <div className="grid grid-cols-6 gap-4 bg-gray-100 text-gray-800 p-4 rounded-t-lg shadow-md">
                <div className="font-semibold text-lg text-gray-700">Name</div>
                <div className="font-semibold text-lg text-gray-700 col-span-2">Email</div>
                <div className="font-semibold text-lg text-gray-700">Phone</div>
                <div className="font-semibold text-lg text-gray-700">Actions</div>
              </div>

              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className="grid grid-cols-6 gap-4 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-200 bg-white"
                  >
                    <div className="text-lg font-medium">{client.name}</div>
                    <div className="text-lg font-medium col-span-2">{client.email}</div>
                    <div className="text-lg font-medium">{client.phoneNumber}</div>
                    <div className="text-center">
                      {/* Add your action buttons here */}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition duration-200"
                >
                  <FaArrowLeft />
                </button>
                <span className="text-lg font-medium mx-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 bg-gray-200 rounded-full ml-2 hover:bg-gray-300 transition duration-200"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center w-full py-6 text-gray-700 text-lg">No clients found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Client;
