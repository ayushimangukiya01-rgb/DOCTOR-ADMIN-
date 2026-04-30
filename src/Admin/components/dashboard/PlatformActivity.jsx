// src/Admin/components/dashboard/PlatformActivity.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";

const activities = [
  {
    icon: "verified_user",
    title: "New Doctor Verified",
    description: "Dr. Alan Turing was approved for Neurosurgery",
    time: "2 hours ago",
    iconClass: "bg-blue-50 text-primary border border-blue-100",
  },
  {
    icon: "report_problem",
    title: "Urgent Ticket Raised",
    description: "Payment gateway timeout reported by Patient ID #4292",
    time: "5 hours ago",
    iconClass: "bg-orange-50 text-orange-600 border border-orange-100",
  },
  {
    icon: "monitoring",
    title: "Monthly Analytics Ready",
    description: "The performance report for October is now available",
    time: "Yesterday",
    iconClass: "bg-purple-50 text-purple-600 border border-purple-100",
  },
];

const PlatformActivity = () => {
  return (
    <CardContainer variant="admin" className="p-5 sm:p-6 min-w-0">
      <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface mb-6">
        Platform Activity
      </h3>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <div key={item.title} className="flex gap-4 min-w-0">
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.iconClass}`}
              >
                <span className="material-symbols-outlined text-[18px] leading-none">
                  {item.icon}
                </span>
              </div>

              {index !== activities.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-100 my-1"></div>
              )}
            </div>

            <div className="pb-4 min-w-0">
              <p className="text-[14px] leading-5 font-semibold text-on-surface">
                {item.title}
              </p>

              <p className="text-[12px] leading-4 text-on-surface-variant break-words">
                {item.description}
              </p>

              <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 border border-outline-variant/30 rounded-lg text-[14px] font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
        View Full Activity Log
      </button>
    </CardContainer>
  );
};

export default PlatformActivity;