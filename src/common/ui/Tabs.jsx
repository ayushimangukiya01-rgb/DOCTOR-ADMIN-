import React from "react";

const Tabs = ({ tabs, activeTab }) => {
  return (
    <div className="bg-white p-1 rounded-xl shadow-sm inline-flex border border-slate-100 w-full md:w-auto overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
            activeTab === tab
              ? "bg-[#004ac6] text-white"
              : "text-[#434655] hover:bg-slate-50"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;