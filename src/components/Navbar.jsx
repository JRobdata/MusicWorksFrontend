import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-2">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="font-bold">
          Musical Works Catalogue
        </NavLink>

         <div className="flex gap-4">
          <NavLink
           to="/"
           className="px-3 py-2 rounded-md hover:bg-slate-700 transition"
          >
            Works
          </NavLink>

          <NavLink
            to="/add-work"
            className="px-3 py-2 rounded-md hover:bg-slate-700 transition"
          >
          Add Work
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar