// src/Admin/components/verification/DoctorProfileSummary.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";

const doctorInfo = [
  ["Email Address", "s.jenkins@hospital.com"],
  ["Contact Number", "+1 (555) 012-3456"],
  ["Clinic Location", "Chicago, IL"],
];

const DoctorProfileSummary = () => {
  return (
    <CardContainer variant="admin" className="p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJDbzoV4HVRcgrjbAJ_JTsMEsee_6P0u-MVvEWiapFtX57kxY5r_HAiGn6n7pt84ZRdCwaeW3sBxaCRe7aPjWnqAY-y2U7-FM1-AG2BZ5CMcnWa71t3-tx1cNUfD-Z84CS2Ck3ge7qipc6IBap1OAUbGLsd6uS7M4QouMuhiyez8l8Bq3WXHFqS7J3KcWJnI3Q7Q_eV6n4Y9B5SVq1LXIR7s5fIPYHYdaP9buNSqpaGOIKgKnQighDLmRqtz9KDA1lhHvtkH7naz9X"
            alt="Dr. Sarah Jenkins"
            className="w-32 h-32 rounded-full object-cover border-4 border-surface-container-highest"
          />

          <span className="absolute bottom-1 right-1 bg-tertiary text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white uppercase tracking-wider">
            Active
          </span>
        </div>

        <h3 className="font-h2 text-h2 text-on-surface">
          Dr. Sarah Jenkins
        </h3>

        <p className="font-body-md text-primary font-semibold">
          Senior Cardiologist
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm px-3 py-1 rounded-full">
            MD, Ph.D.
          </span>

          <span className="bg-surface-container-high text-on-surface-variant font-label-sm px-3 py-1 rounded-full">
            12 yrs Experience
          </span>
        </div>
      </div>

      <div className="space-y-4 border-t border-gray-100 pt-6">
        {doctorInfo.map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-label-md text-outline">{label}</span>
            <span className="font-body-md text-on-surface">{value}</span>
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default DoctorProfileSummary;