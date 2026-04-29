import React from "react";

const SidebarLogo = ({ mobile = false, onClose }) => {
  if (mobile) {
    return (
      <div className="lg:hidden flex items-center justify-between px-6 mb-8">
        <div className="text-xl font-extrabold text-blue-600 tracking-tight">
          MedPanel
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100"
        >
          <span className="material-symbols-outlined text-slate-700">
            close
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="hidden lg:block text-xl font-extrabold text-blue-600 tracking-tight px-6 mb-8">
      MedPanel
    </div>
  );
};

export default SidebarLogo;