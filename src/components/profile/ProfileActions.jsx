import React from "react";

const ProfileActions = () => {
  return (
    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-end items-center gap-4">
      <button className="w-full md:w-auto px-12 py-4 text-[16px] leading-[20px] font-medium text-slate-500 hover:text-[#191b23] transition-colors">
        Cancel
      </button>

      <button className="w-full md:w-auto px-12 py-4 bg-[#004ac6] text-white font-bold rounded-lg shadow-lg shadow-blue-200 hover:bg-[#2563eb] transition-all active:scale-95 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined">save</span>
        Save Changes
      </button>
    </div>
  );
};

export default ProfileActions;