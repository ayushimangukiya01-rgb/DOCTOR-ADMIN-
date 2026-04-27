import React from "react";

const AppointmentPagination = () => {
  return (
    <div className="px-4 sm:px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-slate-500">
        Showing 4 of 24 appointments
      </p>

      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
          <span className="material-symbols-outlined text-sm">
            chevron_left
          </span>
        </button>

        <button className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold">
          1
        </button>

        <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm font-medium">
          2
        </button>

        <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm font-medium">
          3
        </button>

        <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};

export default AppointmentPagination;