import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import TextareaField from "../../common/ui/TextareaField";

const DiagnosisForm = () => {
  return (
    <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">

      <SectionHeader
        icon="clinical_notes"
        title="Diagnosis Details"
      />

      <div className="space-y-3 mt-4">
        <FormLabel>
          Primary Diagnosis & Symptoms
        </FormLabel>

        <TextareaField
          placeholder="Describe the medical condition, chief complaints, and observations..."
        />
      </div>

    </section>
  );
};

export default DiagnosisForm;