import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const tabs = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Farmers", path: "/farmers" },
  { label: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative mx-auto flex max-w-full items-center justify-between bg-emerald-200 px-4 py-4 sm:px-6 lg:flex-nowrap lg:px-10 lg:py-5">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-emerald-800 hover:bg-emerald-300 lg:hidden"
      >
        ☰
      </button>
      <NavLink
        to="/"
        className="absolute left-1/2 -translate-x-1/2 text-xl font-black tracking-tight text-emerald-800 sm:text-2xl lg:static lg:translate-x-0"
      >
        🌾Fresh<span className="text-orange-500">Farm</span>
      </NavLink>
      <div className="ml-auto hidden items-center gap-1 text-sm font-medium text-slate-600 lg:ml-auto lg:mr-4 lg:flex lg:gap-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              isActive
                ? "shrink-0 rounded-full bg-white px-4 py-2 text-emerald-700 transition-all duration-300 hover:bg-emerald-300 lg:px-10 lg:py-3"
                : "shrink-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-emerald-300 hover:text-emerald-700 lg:px-5 lg:py-3"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Link
        to="/login"
        className="cursor-pointer rounded-full bg-emerald-700 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-800 sm:px-5 sm:py-2.5 sm:text-sm"
      >
        <span aria-hidden="true">👤</span> Profile
      </Link>
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
          />
          <aside className="fixed bottom-0 left-0 top-0 z-50 w-72 bg-emerald-50 p-6 shadow-2xl lg:hidden">
            <div className="flex items-center justify-between">
              <p className="text-lg font-black text-emerald-800">Menu</p>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-600 hover:bg-emerald-100"
              >
                ×
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-xl bg-emerald-200 px-4 py-3 font-bold text-emerald-800"
                      : "rounded-xl px-4 py-3 font-semibold text-slate-600 hover:bg-emerald-100 hover:text-emerald-800"
                  }
                >
                  {tab.label}
                </NavLink>
              ))}
            </div>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;
