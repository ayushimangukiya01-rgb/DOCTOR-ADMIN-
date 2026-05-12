import React, { useState } from "react";
import SectionHeader from "../../common/typography/SectionHeader";
import FormLabel from "../../common/ui/FormLabel";
import InputField from "../../common/ui/InputField";
import FormSelect from "../../common/ui/FormSelect";
import { toast } from "react-toastify";

const suggestedTests = [
  "CBC",
  "Fasting Blood Sugar",
  "HbA1c",
  "Lipid Profile",
  "Thyroid Profile",
  "Liver Function Test",
  "Kidney Function Test",
  "Urine Test",
];

const PrescriptionExtraDetails = () => {
  const [tests, setTests] = useState(["CBC", "Fast Glucose"]);
  const [testName, setTestName] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleAddTest = (name = testName) => {
    const value = name.trim();

    if (!value) {
      toast.error("Please enter test name");
      return;
    }

    if (value.length < 2) {
      toast.error("Test name must be at least 2 characters");
      return;
    }

    // test name must contain at least one letter
    if (!/[a-zA-Z]/.test(value)) {
      toast.error("Test name must contain letters");
      return;
    }

    // allow letters, numbers, spaces, dash, slash, dot, brackets
    if (!/^[a-zA-Z0-9\s./()\-]+$/.test(value)) {
      toast.error("Invalid test name");
      return;
    }

    if (tests.some((item) => item.toLowerCase() === value.toLowerCase())) {
      toast.warning("This test is already added");
      return;
    }

    setTests((prev) => [...prev, value]);
    setTestName("");
    setShowSuggestions(false);
    toast.success("Test added successfully");
  };

  const handleRemoveTest = (name) => {
    setTests((prev) => prev.filter((item) => item !== name));
    toast.error("Test removed successfully");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
        <SectionHeader icon="biotech" title="Recommended Tests" />

        <div className="flex flex-wrap gap-2 mb-4">
          {tests.map((test) => (
            <span
              key={test}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#004ac6]"
            >
              {test}

              <button
                type="button"
                onClick={() => handleRemoveTest(test)}
                className="flex h-4 w-4 items-center justify-center rounded-full hover:bg-blue-100"
              >
                <span className="material-symbols-outlined text-[16px]">
                  close
                </span>
              </button>
            </span>
          ))}
        </div>

        {showSuggestions && (
          <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Common tests
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestedTests.map((test) => (
                <button
                  key={test}
                  type="button"
                  onClick={() => handleAddTest(test)}
                  className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-[#004ac6] hover:text-[#004ac6] transition"
                >
                  {test}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <InputField
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            placeholder="Enter test name"
          />

          <button
            type="button"
            onClick={() => {
              if (!showSuggestions) {
                setShowSuggestions(true);
                return;
              }

              handleAddTest();
            }}
            className="h-11 px-4 border border-dashed border-[#004ac6]/40 text-[#004ac6] text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            + Add Test
          </button>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6">
        <SectionHeader icon="event_repeat" title="Follow-up Schedule" />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex-1 space-y-2">
            <FormLabel>Next Visit Date</FormLabel>
            <InputField type="date" defaultValue="2023-11-12" />
          </div>

          <div className="flex-1 space-y-2">
            <FormLabel>Follow-up Type</FormLabel>

<FormSelect
  options={[
    "Routine Checkup",
    "Medication Review",
    "Lab Report Review",
    "Emergency Follow-up",
    "Post Treatment Review",
  ]}
/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrescriptionExtraDetails;