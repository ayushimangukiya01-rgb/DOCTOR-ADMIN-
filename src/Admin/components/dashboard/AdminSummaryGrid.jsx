// src/Admin/components/dashboard/AdminSummaryGrid.jsx
import React from "react";
import AdminSummaryCard from "./AdminSummaryCard";

const summaryCards = [
  {
    title: "Total Doctors",
    value: "1,284",
    icon: "medical_services",
    trendIcon: "trending_up",
    trendText: "+12% this month",
    iconClass: "bg-blue-50 text-primary",
    trendClass: "text-tertiary",
  },
  {
    title: "Pending Requests",
    value: "42",
    icon: "pending_actions",
    trendIcon: "schedule",
    trendText: "Requires review",
    iconClass: "bg-orange-50 text-orange-600",
    trendClass: "text-orange-600",
  },
  {
    title: "Total Patients",
    value: "18.5k",
    icon: "group",
    trendIcon: "trending_up",
    trendText: "+2.4k increase",
    iconClass: "bg-purple-50 text-purple-600",
    trendClass: "text-tertiary",
  },
  {
    title: "Appointments",
    value: "842",
    icon: "event",
    trendText: "Scheduled today",
    iconClass: "bg-green-50 text-tertiary",
    trendClass: "text-on-surface-variant",
  },
  {
    title: "Total Revenue",
    value: "$142k",
    icon: "payments",
    trendIcon: "trending_up",
    trendText: "+8.4% growth",
    iconClass: "bg-blue-50 text-primary",
    trendClass: "text-tertiary",
  },
  {
    title: "Support Tickets",
    value: "14",
    icon: "support_agent",
    trendIcon: "warning",
    trendText: "3 urgent",
    iconClass: "bg-red-50 text-error",
    trendClass: "text-error",
  },
];

const AdminSummaryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
      {summaryCards.map((card) => (
        <div key={card.title} className="min-w-0">
          <AdminSummaryCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default AdminSummaryGrid;