import React from "react";

const ProfileHeaderCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 xl:p-8 mb-6 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Camera Button */}
          <button className="absolute bottom-1 right-1 bg-[#004ac6] text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition active:scale-95">
            <span className="material-symbols-outlined">
              photo_camera
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left pt-2">
          
          <h2 className="font-['Manrope'] text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-[#191b23] mb-1">
            Dr. Julianne Moore
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[12px] font-semibold rounded-full border border-blue-100 uppercase tracking-wide">
              Internal Medicine
            </span>

            <span className="px-3 py-1 bg-green-50 text-green-600 text-[12px] font-semibold rounded-full border border-green-100 uppercase tracking-wide">
              Verified Practitioner
            </span>

          </div>

          {/* Button */}
          <button className="text-[#004ac6] border border-slate-200 px-6 py-2 rounded-lg text-[16px] font-medium hover:bg-slate-50 transition active:scale-95">
            Change Photo
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;