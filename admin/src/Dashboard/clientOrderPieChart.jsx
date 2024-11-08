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
        backgroundColor: ["rgba(39, 174, 96, 0.6)", "rgba(244, 67, 54, 0.6)"], // Green for Clients, Red for Orders
        borderColor: ["rgba(39, 174, 96, 1)", "rgba(244, 67, 54, 1)"],
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
        color: "#2d3748", // Dark text for better readability
      },
      tooltip: {
        backgroundColor: "#2d3748", // Dark tooltip background
        titleColor: "#fff", // White title color
        bodyColor: "#fff", // White body text
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ClientOrderPieChart;
