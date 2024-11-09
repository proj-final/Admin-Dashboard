import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ClientOrderPieChart = () => {
  // Fake data for clients and orders
  const data = {
    labels: ["Clients", "Orders"], // Two segments: Clients vs Orders
    datasets: [
      {
        label: "Clients vs Orders",
        data: [60, 40], // Fake percentage data (60% clients, 40% orders)
        backgroundColor: ["rgba(38, 198, 218, 0.7)", "rgba(72, 61, 139, 0.7)"], // Blue for Clients, Purple for Orders
        borderColor: ["rgba(38, 198, 218, 1)", "rgba(72, 61, 139, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Client vs Order Percentage",
        font: {
          size: 20,
          weight: "bold",
        },
        color: "#FFFFFF", // White text for the title
      },
      tooltip: {
        backgroundColor: "#4A4A4A", // Dark gray tooltip background
        titleColor: "#fff", // White title text
        bodyColor: "#fff", // White body text
        borderColor: "#fff", // White border for tooltips
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-8 rounded-xl shadow-lg">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ClientOrderPieChart;
