import React from "react";

const ProfessionalCredentials = () => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-8 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-50 pb-2">
        <span className="material-symbols-outlined text-[#004ac6]">
          card_membership
        </span>

        <h3 className="font-['Manrope'] text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Professional Credentials
        </h3>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Specialization */}
        <div className="space-y-1">
          <label className="text-[12px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Specialization
          </label>

          <select className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]">
            <option>Internal Medicine</option>
            <option>Cardiology</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>Neurology</option>
          </select>
        </div>

        {/* Degree */}
        <div className="space-y-1">
          <label className="text-[12px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Highest Degree
          </label>

          <input
            type="text"
            defaultValue="MD, Internal Medicine"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

        {/* Experience */}
        <div className="space-y-1">
          <label className="text-[12px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Years of Experience
          </label>

          <input
            type="number"
            defaultValue="12"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

        {/* Fee */}
        <div className="space-y-1">
          <label className="text-[12px] tracking-[0.05em] font-semibold text-[#434655] uppercase">
            Consultation Fee ($)
          </label>

          <input
            type="text"
            defaultValue="150.00"
            className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]"
          />
        </div>

      </div>
    </section>
  );
};

export default ProfessionalCredentials;