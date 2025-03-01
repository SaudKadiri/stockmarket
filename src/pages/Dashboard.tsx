import { useState } from 'react';
import StockChart from '../components/charts/StockChart';

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return <main className="p-10 w-full background-blue-500">
    <header className="flex justify-between w-full">
      <p className="text-2xl font-bold">My Dashboard</p>
      <section className='gap-2 flex'>
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
    <StockChart className="h-fit bg-gray-100 min-w-xl w-fit rounded-xl p-4" />
  </main>
}

export default Dashboard
