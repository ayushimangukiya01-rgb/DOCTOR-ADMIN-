import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import InputField from "../../common/ui/InputField";

const ProfessionalCredentials = () => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-8 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      {/* Header */}
      <div className="border-b border-slate-50 pb-2">
        <SectionHeader icon="card_membership" title="Professional Credentials" />
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Specialization */}
        <div className="space-y-1">
          <FormLabel>Specialization</FormLabel>

          <select className="w-full h-11 px-3 border border-[#c3c6d7] rounded-lg outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6]">
            <option>Internal Medicine</option>
            <option>Cardiology</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>Neurology</option>
          </select>
        </div>

        {/* Degree */}
        <div className="space-y-1">
          <FormLabel>Highest Degree</FormLabel>
          <InputField defaultValue="MD, Internal Medicine" />
        </div>

        {/* Experience */}
        <div className="space-y-1">
          <FormLabel>Years of Experience</FormLabel>
          <InputField type="number" defaultValue="12" />
        </div>

        {/* Fee */}
        <div className="space-y-1">
          <FormLabel>Consultation Fee ($)</FormLabel>
          <InputField defaultValue="150.00" />
        </div>

      </div>
    </section>
  );
};

export default ProfessionalCredentials;