import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import TextareaField from "../../common/ui/TextareaField";

const DiagnosisForm = ({prescriptionForm,setPrescriptionForm,formErrors,}) => {
  return (
    <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
      <SectionHeader icon="clinical_notes" title="Diagnosis Details" />

      <div className="space-y-3 mt-4">
        <FormLabel>Primary Diagnosis & Symptoms</FormLabel>

      <TextareaField
  placeholder="Describe the medical condition, chief complaints, and observations..."
  
  // ✅ NEW: controlled textarea
  value={prescriptionForm.diagnosis}
  
  // ✅ NEW: update diagnosis state
  onChange={(e) =>
    setPrescriptionForm((prev) => ({
      ...prev,
      diagnosis: e.target.value,
    }))
  }

  // ✅ NEW: validation style
  className={
    formErrors.diagnosis
      ? "border-red-400 focus:border-red-500 focus:ring-red-500"
      : ""
  }
/>

{/* ✅ NEW: validation message */}
{formErrors.diagnosis && (
  <p className="text-sm text-red-500 mt-1">
    {formErrors.diagnosis}
  </p>
)}
      </div>
    </section>
  );
};

export default DiagnosisForm;
