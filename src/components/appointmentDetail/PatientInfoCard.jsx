import React from "react";

const PatientInfoCard = () => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
      <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt60CZSroQHVAZXJG4bIyP5SB2u40h46x8BHsZo53EVmEKHL60-TOazgV0zT3MaHiQmbUokimKVoc6EOU5_8PgodGB4uHA7wFOf98oD2zAxf2uOfic32JDzjkwHoErx88Ntvt8IQN5EMJ3GI8SDhGL66kOtFozJRQUklk2WK2s19SfNj-ZM1DRFnAQQqjeD1JCV2Ic_BLMmbZ3b8kN0wc_oVJjdvO9DSIp7QVsLtyg6OSA4ps90ynxY9Lg-QCjvTeXIyyiB5qiTcbf"
          alt="Patient"
          className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-blue-50"
        />

        <h3 className="font-manrope text-[24px] leading-[32px] font-semibold text-slate-900">
          Sarah Jenkins
        </h3>
        <p className="text-sm text-slate-500">Patient ID: #MED-90210</p>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase">
              Age
            </span>
            <span className="text-[16px] leading-[24px] text-slate-900">
              34 Years
            </span>
          </div>

          <div>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase">
              Gender
            </span>
            <span className="text-[16px] leading-[24px] text-slate-900">
              Female
            </span>
          </div>

          <div>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase">
              Blood Type
            </span>
            <span className="text-[16px] leading-[24px] text-slate-900">
              O Positive
            </span>
          </div>

          <div>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 block uppercase">
              Weight
            </span>
            <span className="text-[16px] leading-[24px] text-slate-900">
              64 kg
            </span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <button className="w-full py-2 text-[#004ac6] text-[16px] font-medium hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">contact_page</span>
          View Full Profile
        </button>
      </div>
    </div>
  );
};

export default PatientInfoCard;