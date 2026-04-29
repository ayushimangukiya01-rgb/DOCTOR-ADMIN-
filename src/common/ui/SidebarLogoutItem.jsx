import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLogoutItem = ({ to = "/login" }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-3 px-6 py-3 text-red-600 transition-colors hover:bg-red-50 font-manrope text-sm font-semibold tracking-tight"
    >
      <span className="material-symbols-outlined">logout</span>
      <span>Logout</span>
    </NavLink>
  );
};

export default SidebarLogoutItem;