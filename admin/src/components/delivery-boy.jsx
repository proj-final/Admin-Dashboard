import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaRegTrashAlt, FaArrowLeft, FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from '../Dashboard/Sidebar';

const Delivery = () => {
  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeliveryBoy, setSelectedDeliveryBoy] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchDeliveryBoys = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/delivery-boys');
        setDeliveryBoys(response.data);
      } catch (error) {
        setError('Error fetching delivery boys data');
      } finally {
        setLoading(false);
      }
    };
    fetchDeliveryBoys();
  }, []);

  const deleteDeliveryBoy = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/delivery-boys/${selectedDeliveryBoy.id}`);
      setDeliveryBoys(deliveryBoys.filter(boy => boy.id !== selectedDeliveryBoy.id));
      setShowDeleteModal(false);
      setSelectedDeliveryBoy(null);
    } catch (error) {
      setError('Error deleting delivery boy');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filteredDeliveryBoys = deliveryBoys
    .filter(boy => boy.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(deliveryBoys.length / itemsPerPage);

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
          <Link to="/dashboard" className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-200 col-span-1">
            Admin👨‍💻
          </Link>
          <div className="col-span-2 flex justify-end">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search Delivery Boy..."
                className="border border-gray-300 rounded-full p-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Delivery Boy Table */}
        <div className="pt-24 px-8 overflow-auto">
          {filteredDeliveryBoys.length > 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
              <div className="grid grid-cols-8 gap-6 bg-gray-100 text-gray-800 p-4 rounded-t-lg shadow-md">
                <div className="font-semibold text-lg text-gray-700">Full Name</div>
                <div className="font-semibold text-lg text-gray-700 col-span-2 flex items-center">
                  <FaEnvelope className="mr-2 text-gray-500" />
                  Email
                </div>
                <div className="font-semibold text-lg text-gray-700 flex items-center">
                  <FaPhoneAlt className="mr-2 text-gray-500" />
                  Phone
                </div>
                <div className="font-semibold text-lg text-gray-700">Signup Time</div>
                <div className="font-semibold text-lg text-gray-700">Orders</div>
              </div>

              <div className="space-y-4">
                {filteredDeliveryBoys.map((boy) => (
                  <div
                    key={boy.id}
                    className="grid grid-cols-8 gap-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-200 bg-white"
                  >
                    <div className="text-lg font-medium">{boy.name}</div>
                    <div className="text-lg font-medium col-span-2">{boy.email}</div>
                    <div className="text-lg font-medium">{boy.phone}</div>
                    <div className="text-lg font-medium">{new Date(boy.createdAt).toLocaleString()}</div>
                    <div className="text-lg font-medium">
                      {boy.orders && boy.orders.length > 0 ? (
                        <ul className="list-disc pl-4">
                          {boy.orders.map((order) => (
                            <li key={order.id}>Order #{order.id} - {order.status}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>No Orders</span>
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => {
                          setSelectedDeliveryBoy(boy);
                          setShowDeleteModal(true);
                        }}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200 transform hover:scale-110"
                      >
                        <FaRegTrashAlt className="text-xl" />
                      </button>
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
            <div className="text-center w-full py-6 text-gray-700 text-lg">No delivery boys found</div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition-all duration-300 ease-in-out scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Are you sure you want to delete this delivery boy?</h2>
            <div className="flex justify-between">
              <button
                onClick={deleteDeliveryBoy}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
