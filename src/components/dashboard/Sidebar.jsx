import React from "react";
import { useLocation } from "react-router-dom";
import SidebarLogo from "../../common/display/SidebarLogo";
import SidebarNavItem from "../../common/ui/SidebarNavItem";
import SidebarLogoutItem from "../../common/ui/SidebarLogoutItem";

const SidebarContent = ({ onClose }) => {
  const location = useLocation();

  const appointmentActive =
    location.pathname === "/appointments" ||
    location.pathname === "/appointment-detail";

  return (
    <>
      <SidebarLogo mobile onClose={onClose} />
      <SidebarLogo />

      <div className="flex-1 overflow-y-auto">
        <SidebarNavItem
          to="/dashboard"
          icon="dashboard"
          label="Dashboard"
          end
        />

        <SidebarNavItem
          to="/appointments"
          icon="calendar_today"
          label="Appointments"
          active={appointmentActive}
        />

        <SidebarNavItem to="/patients" icon="person" label="Patients" />

        <SidebarNavItem
          to="/create-prescription"
          icon="medication"
          label="Prescriptions"
        />

        <SidebarNavItem to="/earnings" icon="payments" label="Earnings" />

        <SidebarNavItem
          to="/availability"
          icon="event_available"
          label="Availability"
        />
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4">
        <SidebarNavItem
          to="/profile-settings"
          icon="account_circle"
          label="Profile"
        />

        <SidebarLogoutItem to="/login" />
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