import React from "react";

const ProfileHeader = ({ image, name, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-blue-50"
      />

      <h3 className="font-manrope text-[24px] leading-[32px] font-semibold text-slate-900">
        {name}
      </h3>

      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  );
};

export default ProfileHeader;