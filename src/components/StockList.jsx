import React from 'react'
import StockChart from './charts/StockChart'

let stocks = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "FB", "NVDA", "PYPL", "ADBE", "NFLX"]
const dataAAPL = {
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

const dataGOOGL = {
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

const StockList = () => {
  return <main className='flex'>
      <ul>
        {stocks.map((stock, index) => {
          return <li key={index}>{stock}</li>
        })}
      </ul>
      <StockChart className="h-fit bg-gray-100 min-w-xl w-fit rounded-xl p-4" data={data} />

      
  </main>
}

export default StockList