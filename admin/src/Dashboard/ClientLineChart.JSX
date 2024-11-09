import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const ClientLineChart = () => {
  // Fake data for client growth over the months
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Client Growth",
        data: [120, 150, 200, 180, 160, 210, 250, 300, 270, 320, 350, 400], // Fake growth data
        fill: false, // To make the line clear without filling below it
        borderColor: "rgba(38, 198, 218, 1)", // Teal border color for the line
        backgroundColor: "rgba(38, 198, 218, 0.3)", // Light teal fill for the line background
        tension: 0.4, // Smoothness of the line
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Client Growth Over the Year",
        font: {
          size: 20,
          weight: 'bold',
        },
        color: "#FFFFFF", // White title for better readability
      },
      tooltip: {
        backgroundColor: "#4A4A4A", // Dark gray tooltip background
        titleColor: "#fff", // White title color
        bodyColor: "#fff", // White body text
        borderColor: "#fff", // White border for tooltips
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
          color: "#E2E8F0", // Light gray color for the Y-axis labels
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
          color: "#E2E8F0", // Light gray color for the X-axis labels
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-teal-700 p-6 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105">
      <div className="p-6 bg-white rounded-xl shadow-xl border-4 border-teal-600">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ClientLineChart;
