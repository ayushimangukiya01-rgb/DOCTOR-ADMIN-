import React from "react";

const CallControls = () => {
  return (
    <div className="flex items-center justify-center -mt-8 sm:-mt-12 z-10 relative">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl flex items-center gap-3 sm:gap-6 overflow-x-auto max-w-full">
        <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shrink-0">
          <span className="material-symbols-outlined">mic</span>
        </button>

        <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shrink-0">
          <span className="material-symbols-outlined">videocam</span>
        </button>

        <button className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shrink-0">
          <span className="material-symbols-outlined">present_to_all</span>
        </button>

        <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

        <button className="px-4 sm:px-6 h-11 sm:h-12 rounded-full bg-red-600 text-white font-medium flex items-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-200 active:scale-95 shrink-0">
          <span className="material-symbols-outlined">call_end</span>
          <span className="hidden sm:inline">End earnings</span>
        </button>
      </div>
    </div>
  );
};

export default CallControls;