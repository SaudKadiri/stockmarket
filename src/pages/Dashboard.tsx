import { useState } from 'react';
import StockChart from '../components/charts/StockChart';

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return <main className="p-10 w-full backround-black rounded-xl shadow-lg background-blue-500">
    <header className="flex justify-between w-full">
      <p className="text-xl">My Dashboard</p>
      <section>
        <input
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Search
          </button>
      </section>
    </header>
    <StockChart />
  </main>
}

export default Dashboard
