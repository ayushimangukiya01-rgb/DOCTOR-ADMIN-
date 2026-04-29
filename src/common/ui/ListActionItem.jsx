import React from "react";

const ListActionItem = ({ icon, text }) => {
  return (
    <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
      
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-slate-400 group-hover:text-[#004ac6] transition-colors">
          {icon}
        </span>

        <span className="text-sm font-medium">{text}</span>
      </div>

      <span className="material-symbols-outlined text-slate-300 text-sm">
        chevron_right
      </span>

    </button>
  );
};

export default ListActionItem;