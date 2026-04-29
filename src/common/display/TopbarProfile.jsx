import React from "react";

const TopbarProfile = ({ name, role, image }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="hidden sm:block text-right">
        <p className="font-manrope text-sm font-bold text-slate-900">
          {name}
        </p>
        <p className="text-[10px] uppercase tracking-wider text-slate-400">
          {role}
        </p>
      </div>

      <img
        src={image}
        alt={name}
        className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
      />
    </div>
  );
};

export default TopbarProfile;