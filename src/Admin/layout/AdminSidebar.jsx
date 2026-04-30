// src/Admin/layout/AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: "dashboard", label: "Dashboard", path: "/admin/dashboard" },
  { icon: "medical_services", label: "Doctors", path: "/admin/doctors" },
  { icon: "group", label: "Patients", path: "/admin/patients" },
  { icon: "event", label: "Appointments", path: "/admin/appointments" },
  { icon: "payments", label: "Payments", path: "/admin/payments" },
  // { icon: "contact_support", label: "Support", path: "/admin/support" },
];

const AdminSidebar = ({ isOpen = false, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-200 bg-white py-6 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0058be] text-white">
              <span className="material-symbols-outlined">
                medical_services
              </span>
            </div>

            <div>
              <h2 className="text-lg font-bold text-blue-700">MedPanel</h2>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                Healthcare Admin
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 lg:hidden"
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 transition-all duration-150 ${
                  isActive
                    ? "border-r-4 border-blue-600 bg-blue-50/50 text-blue-700"
                    : "text-gray-500 hover:bg-gray-50"
                }`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-inter text-sm font-medium tracking-tight">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-6">
          <div className="rounded-xl border border-[#c2c6d6]/30 bg-[#eff4ff] p-4">
            <p className="text-xs font-medium text-[#424754]">System Status</p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00855b]"></span>
              <span className="text-xs font-medium text-[#006947]">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;