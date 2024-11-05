
 

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

// Mock data
const clients = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', phoneNumber: '123-456-7890', address: '123 Main St', createdAt: '2023-04-01' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phoneNumber: '098-765-4321', address: '456 Elm St', createdAt: '2023-03-20' },
];

const chiefs = [
  { id: 1, name: 'Chef Gordon', email: 'chef.gordon@example.com', phoneNumber: '123-123-1234', specialty: 'Italian Cuisine', createdAt: '2022-10-10' },
  { id: 2, name: 'Chef Jamie', email: 'chef.jamie@example.com', phoneNumber: '321-321-4321', specialty: 'French Cuisine', createdAt: '2022-11-15' },
];

const deliveryBoys = [
  { id: 1, name: 'Tom Brown', email: 'tom@example.com', phone: '123-456-7890', createdAt: '2023-04-01' },
  { id: 2, name: 'John Doe', email: 'john@example.com', phone: '098-765-4321', createdAt: '2023-03-20' },
];

const orders = [
  { id: 1, clientName: 'Alice Smith', dishTitle: 'Pasta', status: 'DELIVERED', totalAmount: 25.0, createdAt: '2023-04-10' },
  { id: 2, clientName: 'Bob Johnson', dishTitle: 'Pizza', status: 'PENDING', totalAmount: 15.0, createdAt: '2023-04-12' },
];

// Dashboard component with all tables in one file
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  // Render Client Table
  const renderClientTable = () => (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 max-w-screen-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Clients</h2>
        <table className="min-w-full leading-normal text-center">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{client.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{client.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{client.phoneNumber}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{client.address}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{client.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  
  const renderChiefTable = () => (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 max-w-screen-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Chefs</h2>
        {chiefs.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No data available</p>
        ) : (
          <table className="min-w-full leading-normal text-center">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Specialty</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
              </tr>
            </thead>
            <tbody>
              {chiefs.map(chief => (
                <tr key={chief.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{chief.name}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{chief.email}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{chief.phoneNumber}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{chief.specialty}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{chief.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
  
  const renderDeliveryBoyTable = () => (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 max-w-screen-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Delivery Boys</h2>
        <table className="min-w-full leading-normal text-center">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody>
            {deliveryBoys.map(deliveryBoy => (
              <tr key={deliveryBoy.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{deliveryBoy.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{deliveryBoy.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{deliveryBoy.phone}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{deliveryBoy.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  

  // Render Order Table
  const renderOrderTable = () => (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 max-w-screen-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Orders</h2>
        <table className="min-w-full leading-normal text-center">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Dish</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Amount</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Created At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.clientName}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.dishTitle}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'DELIVERED' ? 'bg-green-200 text-green-700' :
                    order.status === 'PENDING' ? 'bg-yellow-200 text-yellow-700' :
                    'bg-red-200 text-red-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${order.totalAmount}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  const renderSection = () => {
    switch (activeSection) {
      case 'Client': return renderClientTable();
      case 'Chief': return renderChiefTable(); // Make sure this is 'Chief'
      case 'Delivery Boy': return renderDeliveryBoyTable();
      case 'Order': return renderOrderTable();
      default: return <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>;
    }
  };
  

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="flex">
        <Sidebar onMenuSelect={setActiveSection} />
        <div className="content-area p-4 ml-64">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;