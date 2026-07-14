import { NavLink } from "react-router";

const Navbar = () => {
  const activeElement = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-white rounded-lg text-blue-700 font-semibold"
      : "px-4 py-2 hover:bg-white/20 text-white rounded-lg font-semibold";

  return (
    <nav className="navbar flex items-center justify-between px-6 py-4">
      <span className="text-white text-2xl font-bold">Weather App</span>
      <div className="flex gap-2">
        {/* Buttons in Navbar */}
        <NavLink to="/" className={activeElement}>
          Home
        </NavLink>
        <NavLink to="/about" className={activeElement}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
