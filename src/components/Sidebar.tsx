import sections from '../assets/sections'

const Sidebar = () => {
  return (
    <main className='flex flex-col items-center justify-center rounded-r-xl shadow-lg p-4'>
      <img src="" alt="" className='h-36' />
      <div className="">
        {Object.entries(sections).map(([key, submenus], index) => <section key={index}> 
          <p className="text-xl font-bold mt-4">{key}</p>
          <ul className="">
            {submenus.map((submenu, index) => <li key={index} className="flex items-center gap-2">
              {/* <span className="material-icons">{submenu.icon}</span> */}
              <span>{submenu.title}</span>
            </li>)}
          </ul>
        </section>)}
      </div>
    </main>
  )
}

export default Sidebar