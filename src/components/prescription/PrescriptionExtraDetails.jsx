import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import InputField from "../../common/ui/InputField";
import FormSelect from "../../common/ui/FormSelect";
import ClosableTag from "../../common/ui/ClosableTag";

const PrescriptionExtraDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
        <SectionHeader icon="biotech" title="Recommended Tests" />

        <div className="flex flex-wrap gap-2">
          <ClosableTag>CBC</ClosableTag>
          <ClosableTag>Fast Glucose</ClosableTag>

          <button className="px-3 py-1 border border-dashed border-slate-300 text-slate-400 text-xs font-semibold rounded-full hover:border-[#004ac6] hover:text-[#004ac6] transition-colors flex items-center gap-1">
            + Add Test
          </button>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
        <SectionHeader icon="event_repeat" title="Follow-up Schedule" />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex-1 space-y-2">
            <FormLabel>Next Visit Date</FormLabel>

            <InputField
              type="date"
              defaultValue="2023-11-12"
            />
          </div>

          <div className="flex-1 space-y-2">
            <FormLabel>Urgency</FormLabel>

            <FormSelect options={["Routine", "Priority", "Immediate"]} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrescriptionExtraDetails;