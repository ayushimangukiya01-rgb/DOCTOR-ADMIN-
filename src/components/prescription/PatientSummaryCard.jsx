import React from "react";
import InfoItem from "../../common/display/InfoItem";
import AvatarWithBadge from "../../common/display/AvatarWithBadge";
import VitalSignsBox from "../../common/display/VitalSignsBox";

const PatientSummaryCard = () => {
  const vitalSigns = [
    { label: "BP", value: "120/80" },
    { label: "TEMP", value: "98.6 F" },
    { label: "SPO2", value: "98%" },
  ];

  return (
    <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
      <AvatarWithBadge
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDZZ-LuZYyUvQt-cgx7ak97jlbestPK88TmXCp4QaxFRttu9Dh_VuZEgBf3ZHQ726hklWmbKkdsvoe7bhZuhQXjKgk5lkq0KQfhgq6ZVUrWRPv2PyqQhIzGXE9I91Ysc4QyKdiJDtLqLBOipkwYwueyV2_W-j9LHOPwNkgU-vsWUpV6pKQxccidz_qEKe7_zPIiaTiOhesDSLwk83vSU1jRHbaje7shwUm3ISi2-UTXf5lQUNLnnBrPWgSqMRFYhf0ne7-CPIAOv0tu"
        alt="Patient"
        badge="BP"
      />

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 text-center sm:text-left">
        <InfoItem
          label="Patient Name"
          value="Eleanor Vance"
          helper="64 Yrs, Female"
        />

        <InfoItem
          label="Patient ID"
          value="#MP-90210"
          helper="Last visit: 12 Oct 2023"
          italicHelper
        />

        <div className="sm:col-span-2 lg:col-span-2">
          <VitalSignsBox items={vitalSigns} />
        </div>
      </div>
    </section>
  );
};

export default PatientSummaryCard;