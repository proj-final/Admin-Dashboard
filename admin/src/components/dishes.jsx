import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";  
import Sidebar from '../Dashboard/Sidebar';

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/dishes");  
        setDishes(response.data);  
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    fetchDishes();
  }, []);

  
  const filteredDishes = dishes.filter((dish) =>
    dish.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Sidebar/>
      <div className="bg-orange-500 w-full p-4 flex items-center justify-between fixed top-0 left-0 shadow-lg z-10">
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-200"
        >
          Admin👨‍💻
        </Link>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search Dishes..."
            className="border border-gray-300 rounded-full p-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      
      <div className="mt-20 p-4">
        <h2 className="text-xl font-bold">Dishes</h2>
        <ul>
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <li key={dish.id} className="border-b py-2">
                <p className="font-semibold">{dish.title}</p>
                <p>{dish.category}</p>
                <p>{dish.price} USD</p>
              </li>
            ))
          ) : (
            <p>No dishes found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dishes;