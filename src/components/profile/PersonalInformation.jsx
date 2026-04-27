import React from "react";

const PersonalInformation = () => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-8 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-50 pb-2">
        <span className="material-symbols-outlined text-[#004ac6]">
          person
        </span>

        <h3 className="font-['Manrope'] text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Personal Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Julianne Moore"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none transition-all focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="j.moore@medicalpro.com"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none transition-all focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="+1 (555) 012-3456"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none transition-all focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Languages
          </label>
          <input
            type="text"
            defaultValue="English, Spanish, French"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none transition-all focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;