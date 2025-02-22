import StockChart from '../components/charts/StockChart';

const Dashboard = () => {
  return <main className="p-10 w-full backround-black rounded-xl shadow-lg background-blue-500">
    <header className="flex justify-between w-full">
      <p className="text-xl">My Dashboard</p>
      <input type="text" name="search" id="" />
    </header>
    <StockChart />
  </main>
}

export default Dashboard