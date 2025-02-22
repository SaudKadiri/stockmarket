import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StockChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"], // X-axis (time)
    datasets: [
      {
        label: "Stock Price ($)",
        data: [150, 155, 160, 158, 162], // Stock price data
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 0,
        tension: 0.3, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: false },
    },
  };

  return <Line data={data} options={options} />;
};

export default StockChart;
