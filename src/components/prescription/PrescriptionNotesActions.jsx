import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import TextareaField from "../../common/ui/TextareaField";
import ActionButton from "../../common/ui/ActionButton";
import { toast } from "react-toastify";

const PrescriptionNotesActions = ({
  prescriptionForm,
  setPrescriptionForm,
  formErrors,
  setFormErrors,
}) => {
  // ✅ NEW: submit prescription validation
  const handleSubmitPrescription = () => {
    const errors = {};

    if (!prescriptionForm.diagnosis.trim()) {
      errors.diagnosis = "Diagnosis details are required";
    }

    if (!prescriptionForm.precautions.trim()) {
      errors.precautions = "Precautions are required";
    }

    if (!prescriptionForm.doctorNotes.trim()) {
      errors.doctorNotes = "Doctor notes are required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Please complete all required fields");
      return;
    }

    toast.success("Prescription submitted successfully");
  };

  return (
    <>
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <SectionHeader icon="warning" title="Precautions" />

          <TextareaField
            placeholder="Advise patient on food habits, physical activity, or warnings..."
            value={prescriptionForm.precautions}
            onChange={(e) =>
              setPrescriptionForm((prev) => ({
                ...prev,
                precautions: e.target.value,
              }))
            }
            className={
              formErrors.precautions
                ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                : ""
            }
          />

          {formErrors.precautions && (
            <p className="text-sm text-red-500 mt-1">
              {formErrors.precautions}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <SectionHeader icon="notes" title="Doctor Notes (Private)" />

          <TextareaField
            placeholder="Internal clinical notes or reminders..."
            value={prescriptionForm.doctorNotes}
            onChange={(e) =>
              setPrescriptionForm((prev) => ({
                ...prev,
                doctorNotes: e.target.value,
              }))
            }
            className={
              formErrors.doctorNotes
                ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                : ""
            }
          />

          {formErrors.doctorNotes && (
            <p className="text-sm text-red-500 mt-1">
              {formErrors.doctorNotes}
            </p>
          )}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <ActionButton variant="outline">
            <span className="material-symbols-outlined">print</span>
            Preview & Print
          </ActionButton>

          <ActionButton variant="outline">
            <span className="material-symbols-outlined">share</span>
            Share Digitally
          </ActionButton>
        </div>

        <ActionButton
          variant="primary"
          className="px-10"
          onClick={handleSubmitPrescription}
        >
          <span className="material-symbols-outlined">task_alt</span>
          Submit Prescription
        </ActionButton>
      </div>
    </>
  );
};

export default PrescriptionNotesActions;