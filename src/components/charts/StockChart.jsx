import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

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
  maintainAspectRatio: true,
};
const StockChart = ({ className = "", data = {} }) => {
  return <main className={`${className}`}>
    
      <Line data={data} options={options} />
    </main>
    
};

export default StockChart;
