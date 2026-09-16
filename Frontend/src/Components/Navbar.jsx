import { Link, NavLink } from "react-router-dom";

const tabs = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Farmers", path: "/farmers" },
  { label: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-full  items-center justify-between px-6 py-5 lg:px-10 bg-emerald-200    ">
      <NavLink
        to="/"
        className="text-2xl font-black tracking-tight text-emerald-800"
      >
        🌾Fresh<span className="text-orange-500">Farm</span>
      </NavLink>
      <div className="ml-auto mr-4 flex items-center gap-1 text-sm font-medium text-slate-600 sm:mr-8 sm:gap-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              isActive
                ? "rounded-full bg-white px-10 py-3 text-emerald-700 transition-all duration-300  hover:bg-emerald-300"
                : "rounded-full px-5 py-3 transition-all duration-300  hover:bg-emerald-300 hover:text-emerald-700"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Link
        to="/login"
        className="hidden cursor-pointer rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 sm:block"
      >
        <span aria-hidden="true"> Profile</span>
      </Link>
    </nav>
  );
};

export default Navbar;
