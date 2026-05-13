import React from "react";

const ChartRangeTabs = ({
  tabs,
  activeTab,
  onTabChange, // ✅ NEW: tab change handler
}) => {
  return (
    <div className="flex gap-2 bg-slate-50 p-1 rounded-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          // ✅ NEW: change active tab
          onClick={() => onTabChange(tab)}
          className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeTab === tab
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ChartRangeTabs;