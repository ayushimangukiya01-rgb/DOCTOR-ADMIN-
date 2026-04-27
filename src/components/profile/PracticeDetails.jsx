import React from "react";

const PracticeDetails = () => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-8 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-50 pb-2">
        <span className="material-symbols-outlined text-[#004ac6]">
          apartment
        </span>

        <h3 className="font-['Manrope'] text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Practice Details
        </h3>
      </div>

      <div className="space-y-6">
        
        {/* Clinic Name */}
        <div className="space-y-1">
          <label className="text-[12px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Clinic / Hospital Name
          </label>

          <input
            type="text"
            defaultValue="St. Mary's Medical Center"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

        {/* Address */}
        <div className="space-y-1">
          <label className="text-[12px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Full Address
          </label>

          <textarea
            rows="3"
            defaultValue="123 Healthway Drive, Medical Plaza Suite 405, San Francisco, CA 94107"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6] resize-none"
          />
        </div>

        {/* Map */}
        <div className="relative h-32 rounded-lg overflow-hidden">
          
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco&zoom=13&size=600x300&maptype=roadmap"
            alt="map"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#004ac6] text-3xl">
              location_on
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PracticeDetails;