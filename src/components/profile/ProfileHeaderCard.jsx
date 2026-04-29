import React from "react";
import ActionButton from "../../common/ui/ActionButton";
import ProfileTag from "../../common/display/ProfileTag";

const ProfileHeaderCard = () => {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl p-6 xl:p-8 mb-6 border border-slate-100 shadow-[0px_8px_24px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-50 via-white to-green-50"></div>

      <div className="relative flex flex-col md:flex-row items-center md:items-end gap-8">
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-slate-100">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>

          <button className="absolute -bottom-2 -right-2 bg-[#004ac6] text-white w-12 h-12 rounded-2xl shadow-lg hover:bg-blue-700 transition active:scale-95 flex items-center justify-center">
            <span className="material-symbols-outlined">photo_camera</span>
          </button>
        </div>

        <div className="flex-1 text-center md:text-left">
        <h2 className="font-['Manrope'] text-[22px] sm:text-[24px] leading-[30px] font-semibold text-[#191b23]">
  Dr. Julianne Moore
</h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage your profile photo, specialization, and verification details.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4 mb-5">
            <ProfileTag>Internal Medicine</ProfileTag>
            <ProfileTag variant="green">Verified Practitioner</ProfileTag>
          </div>

          <ActionButton variant="outline" className="px-6 py-2">
            <span className="material-symbols-outlined text-[20px]">
              photo_camera
            </span>
            Change Photo
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;