import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";

const AboutMe = () => {
  return (
    <section className="bg-white rounded-xl p-6 xl:p-8 border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      <div className="border-b border-slate-50 pb-2 mb-1">
        <SectionHeader icon="description" title="About Me" />
      </div>

      <div className="space-y-3">
        <FormLabel>Biography</FormLabel>

        <textarea
          rows="6"
          defaultValue="Dr. Julianne Moore is a highly experienced Internal Medicine specialist with over 12 years of clinical practice. She is committed to providing patient-centered care and staying updated with the latest medical advancements. Her practice focuses on preventative health and managing chronic conditions through evidence-based medicine and personalized wellness plans."
          className="w-full px-4 py-2 border border-[#c3c6d7] rounded-lg outline-none transition-all focus:ring-2 focus:ring-[#004ac6] focus:border-[#004ac6] resize-none"
        />
      </div>
    </section>
  );
};

export default AboutMe;