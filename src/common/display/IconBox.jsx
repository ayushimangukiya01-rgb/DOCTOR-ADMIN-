import React from "react";

const IconBox = ({ icon }) => {
  return (
    <div className="w-12 h-12 bg-[#004ac6] flex items-center justify-center rounded-lg text-white shrink-0">
      <span className="material-symbols-outlined text-2xl">
        {icon}
      </span>
    </div>
  );
};

export default IconBox;