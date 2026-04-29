import React from "react";

const TextIconButton = ({ icon, children }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-[#004ac6] text-sm font-semibold hover:bg-blue-50 transition-all duration-200">
      <span className="material-symbols-outlined text-[20px] leading-none">
        {icon}
      </span>
      <span>{children}</span>
    </button>
  );
};

export default TextIconButton;