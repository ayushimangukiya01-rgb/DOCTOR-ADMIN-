import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItemClass = ({ isActive }) =>
  `flex items-center gap-3 px-6 py-3 font-manrope text-sm font-semibold tracking-tight transition-all duration-200 ease-in-out ${
    isActive
      ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600"
      : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
  }`;

const SidebarContent = ({ onClose }) => {
  const location = useLocation();

  const appointmentActive =
    location.pathname === "/appointments" ||
    location.pathname === "/appointment-detail";

  const appointmentClass = `flex items-center gap-3 px-6 py-3 font-manrope text-sm font-semibold tracking-tight transition-all duration-200 ease-in-out ${
    appointmentActive
      ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600"
      : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
  }`;

  return (
    <>
      <div className="lg:hidden flex items-center justify-between px-6 mb-8">
        <div className="text-xl font-extrabold text-blue-600 tracking-tight">
          MedPanel
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100"
        >
          <span className="material-symbols-outlined text-slate-700">close</span>
        </button>
      </div>

      <div className="hidden lg:block text-xl font-extrabold text-blue-600 tracking-tight px-6 mb-8">
        MedPanel
      </div>

      <div className="flex-1 overflow-y-auto">
        <NavLink to="/dashboard" end className={navItemClass}>
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/appointments" className={appointmentClass}>
          <span className="material-symbols-outlined">calendar_today</span>
          <span>Appointments</span>
        </NavLink>

        <NavLink to="/patients" className={navItemClass}>
          <span className="material-symbols-outlined">person</span>
          <span>Patients</span>
        </NavLink>

     <NavLink to="/create-prescription" className={navItemClass}>
  <span className="material-symbols-outlined">medication</span>
  <span>Prescriptions</span>
</NavLink>

        <NavLink to="/earnings" className={navItemClass}>
          <span className="material-symbols-outlined">payments</span>
          <span>Earnings</span>
        </NavLink>

        <NavLink to="/availability" className={navItemClass}>
          <span className="material-symbols-outlined">event_available</span>
          <span>Availability</span>
        </NavLink>
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4">
        <NavLink to="/profile-settings" className={navItemClass}>
          <span className="material-symbols-outlined">account_circle</span>
          <span>Profile</span>
        </NavLink>

        {/* <NavLink to="/settings" className={navItemClass}>
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </NavLink> */}

        <NavLink
          to="/login"
          className="flex items-center gap-3 px-6 py-3 text-red-600 transition-colors hover:bg-red-50 font-manrope text-sm font-semibold tracking-tight"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </NavLink>
      </div>
    </>
  );
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r z-50 bg-white border-slate-100 flex-col pt-8 pb-4 shadow-none">
        <SidebarContent />
      </nav>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      <nav
        className={`lg:hidden fixed top-0 left-0 h-screen w-72 max-w-[85%] bg-white border-r border-slate-100 z-50 flex flex-col pt-8 pb-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent onClose={() => setIsSidebarOpen(false)} />
      </nav>
    </>
  );
};

export default Sidebar;