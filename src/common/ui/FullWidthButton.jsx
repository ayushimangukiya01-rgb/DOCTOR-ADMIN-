import React from "react";

const FullWidthButton = ({ icon, children }) => {
  return (
    <button className="w-full py-2 text-[#004ac6] text-[16px] font-medium hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined">{icon}</span>
      {children}
    </button>
  );
};

export default FullWidthButton;