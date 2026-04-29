import React from "react";
import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ to, icon, label, end = false, active = false }) => {
  const baseClass =
    "flex items-center gap-3 px-6 py-3 font-manrope text-sm font-semibold tracking-tight transition-all duration-200 ease-in-out";

  const activeClass = "bg-blue-50 text-blue-700 border-r-4 border-blue-600";
  const inactiveClass = "text-slate-500 hover:bg-slate-50 hover:text-blue-600";

  if (active) {
    return (
      <NavLink to={to} className={`${baseClass} ${activeClass}`}>
        <span className="material-symbols-outlined">{icon}</span>
        <span>{label}</span>
      </NavLink>
    );
  }

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${baseClass} ${isActive ? activeClass : inactiveClass}`
      }
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarNavItem;