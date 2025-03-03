import sections from '../assets/sections'

type Submenu = {
  title: string;
  link: string;
};

type Sections = {
  [key: string]: Submenu[];
};

const Sidebar = () => {
  return (
    <main className='flex flex-col items-center bg-white w-80 justify-center  rounded-r-3xl shadow-lg p-4'>
      {/* <img src="" alt="" className='h-36' /> */}
      <div className="">
        {Object.entries(sections as Sections).map(([key, submenus]: [string, any], index) => <section key={index}> 
          <p className="text-xl font-bold mt-4">{key}</p>
          <ul className="">
            {submenus.map((submenu: Submenu, index: number) => <li key={index} className="flex items-center gap-2">
              <span>{submenu.title}</span>
            </li>)}
          </ul>
        </section>)}
      </div>
    </main>
  )
}

export default Sidebar