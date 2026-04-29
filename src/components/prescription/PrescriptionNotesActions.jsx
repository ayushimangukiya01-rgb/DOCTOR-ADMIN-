import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import TextareaField from "../../common/ui/TextareaField";
import ActionButton from "../../common/ui/ActionButton"; // ✅ correct file

const PrescriptionNotesActions = () => {
  return (
    <>
      {/* Precautions & Notes */}
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Precautions */}
        <div className="space-y-2">
          <SectionHeader icon="warning" title="Precautions" />

          <TextareaField
            placeholder="Advise patient on food habits, physical activity, or warnings..."
          />
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <SectionHeader icon="notes" title="Doctor Notes (Private)" />

          <TextareaField
            placeholder="Internal clinical notes or reminders..."
          />
        </div>
      </section>

      {/* Actions */}
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

        <ActionButton variant="primary" className="px-10">
          <span className="material-symbols-outlined">task_alt</span>
          Submit Prescription
        </ActionButton>

      </div>
    </>
  );
};

export default PrescriptionNotesActions;