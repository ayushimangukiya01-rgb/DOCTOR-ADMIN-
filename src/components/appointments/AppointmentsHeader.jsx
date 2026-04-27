import React from "react";

const AppointmentsHeader = () => {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-manrope text-[24px] sm:text-[28px] font-semibold text-slate-900 mb-2">
            Manage Schedule
          </h2>
          <p className="text-sm text-[#434655]">
            Review and manage your patient consultations
          </p>
        </div>

        <div className="bg-white p-1 rounded-xl shadow-sm inline-flex border border-slate-100 w-full md:w-auto overflow-x-auto no-scrollbar">
          <button className="px-6 py-2 rounded-lg bg-[#004ac6] text-white text-sm font-medium whitespace-nowrap">
            Upcoming
          </button>
          <button className="px-6 py-2 rounded-lg text-[#434655] hover:bg-slate-50 text-sm font-medium whitespace-nowrap">
            Completed
          </button>
          <button className="px-6 py-2 rounded-lg text-[#434655] hover:bg-slate-50 text-sm font-medium whitespace-nowrap">
            Cancelled
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentsHeader;