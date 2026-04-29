import React from "react";

const ActivityItem = ({ color, title, subtitle }) => {
  return (
    <div className="relative flex gap-4">
      <div
        className={`w-6 h-6 rounded-full ${color} border-4 border-white shadow-sm z-10`}
      ></div>

      <div>
        <p className="text-sm font-semibold text-slate-900">
          {title}
        </p>
        <p className="text-xs text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ActivityItem;