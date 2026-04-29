import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import InputField from "../../common/ui/InputField";

const PersonalInformation = () => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-8 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      <div className="border-b border-slate-50 pb-2 ">
        <SectionHeader icon="person" title="Personal Information" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="space-y-1">
          <FormLabel>Full Name</FormLabel>
          <InputField defaultValue="Julianne Moore" />
        </div>

        <div className="space-y-1">
          <FormLabel>Email Address</FormLabel>
          <InputField type="email" defaultValue="j.moore@medicalpro.com" />
        </div>

        <div className="space-y-1">
          <FormLabel>Phone Number</FormLabel>
          <InputField type="tel" defaultValue="+1 (555) 012-3456" />
        </div>

        <div className="space-y-1">
          <FormLabel>Languages</FormLabel>
          <InputField defaultValue="English, Spanish, French" />
        </div>

      </div>
    </section>
  );
};

export default PersonalInformation;