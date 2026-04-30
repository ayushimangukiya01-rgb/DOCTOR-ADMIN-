import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import InputField from "../../common/ui/InputField";
import FormSelect from "../../common/ui/FormSelect";

const MedicationPlan = () => {
  return (
    <section className="bg-white rounded-xl border border-slate-100 medical-shadow overflow-hidden">
       <div className="p-5 sm:p-6 border-b border-slate-100 bg-white">
        <SectionHeader icon="pill" title="Medication Plan" />
      </div>

      <div className="p-5 sm:p-6 space-y-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 items-end">
          <div className="lg:col-span-4 space-y-1">
            <FormLabel>Medicine Name</FormLabel>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">
                search
              </span>

              <InputField
                placeholder="Search drug database..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-1">
            <FormLabel>Dosage</FormLabel>
            <InputField placeholder="500mg" />
          </div>

          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Frequency</FormLabel>

            <div className="flex items-center gap-3 h-11 border border-[#c3c6d7] rounded-lg px-3">
              {["MOR", "AFT", "NIT"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-1 text-xs font-semibold"
                >
                  <input type="checkbox" className="accent-[#004ac6]" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Meal Instruction</FormLabel>

            <FormSelect
              options={["After Food", "Before Food", "Empty Stomach"]}
            />
          </div>

          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Duration</FormLabel>

           <div className="flex gap-2">
  <InputField
    type="number"
    defaultValue="5"
    className="flex-1"
  />

  <FormSelect
    options={["Days", "Weeks"]}
    className="w-28"
  />
</div>
          </div>

          <div className="lg:col-span-3 space-y-1">
            <FormLabel>Quantity</FormLabel>
            <InputField placeholder="10 Tablets" />
          </div>

          <div className="lg:col-span-6">
            <button className="w-full h-11 flex items-center justify-center gap-2 border-2 border-dashed border-[#004ac6]/30 text-[#004ac6] font-medium bg-blue-50/50 hover:bg-blue-50 transition rounded-lg">
              <span className="material-symbols-outlined">add_circle</span>
              Add another medicine
            </button>
          </div>
        </div>

        <div className="overflow-x-auto border border-slate-100 rounded-lg">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500">
                <th className="px-4 py-3">MEDICINE</th>
                <th className="px-4 py-3">DOSAGE</th>
                <th className="px-4 py-3">FREQ</th>
                <th className="px-4 py-3">MEAL</th>
                <th className="px-4 py-3">DURATION</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-4">
                  <div className="font-semibold text-slate-900">
                    Amoxicillin
                  </div>
                  <div className="text-xs text-slate-400">Antibiotic</div>
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">500 mg</td>

                <td className="px-4 py-4">
                  <div className="flex gap-1">
                    <span className="w-6 h-6 bg-[#004ac6] text-white text-[10px] flex items-center justify-center rounded">
                      1
                    </span>
                    <span className="w-6 h-6 bg-slate-100 text-slate-400 text-[10px] flex items-center justify-center rounded">
                      0
                    </span>
                    <span className="w-6 h-6 bg-[#004ac6] text-white text-[10px] flex items-center justify-center rounded">
                      1
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-full uppercase">
                    After Food
                  </span>
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  7 Days
                </td>

                <td className="px-4 py-4 text-right">
                  <span className="material-symbols-outlined text-red-400 cursor-pointer">
                    delete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MedicationPlan;