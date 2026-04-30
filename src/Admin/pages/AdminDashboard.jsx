// src/Admin/pages/AdminDashboard.jsx
import React from "react";
import AdminSummaryGrid from "../components/dashboard/AdminSummaryGrid";
import RecentDoctorRequests from "../components/dashboard/RecentDoctorRequests";
import TodayAppointments from "../components/dashboard/TodayAppointments";
import QuickActions from "../components/dashboard/QuickActions";
import PlatformActivity from "../components/dashboard/PlatformActivity";

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-[26px] sm:text-[30px] leading-[34px] sm:leading-[38px] tracking-[-0.02em] font-bold text-on-surface">
          Dashboard Overview
        </h1>

        <p className="text-[13px] sm:text-[14px] leading-5 font-normal text-on-surface-variant mt-1">
          Welcome back. Here's what's happening across MedPanel today.
        </p>
      </div>

      <AdminSummaryGrid />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8">
        {/* Left */}
        <div className="xl:col-span-8 space-y-6 xl:space-y-8 min-w-0">
          <RecentDoctorRequests />
          <TodayAppointments />
        </div>

        {/* Right */}
        <div className="xl:col-span-4 space-y-6 xl:space-y-8 min-w-0">
          <QuickActions />
          <PlatformActivity />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;