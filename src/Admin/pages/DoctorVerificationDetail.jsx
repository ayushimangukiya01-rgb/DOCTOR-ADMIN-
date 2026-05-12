// src/Admin/pages/DoctorVerificationDetail.jsx
import React from "react";
import VerificationBreadcrumbs from "../components/verification/VerificationBreadcrumbs";
import VerificationHeader from "../components/verification/VerificationHeader";
import DoctorProfileSummary from "../components/verification/DoctorProfileSummary";
import ProfessionalSummary from "../components/verification/ProfessionalSummary";
import SubmittedDocuments from "../components/verification/SubmittedDocuments";
import ApprovalDecision from "../components/verification/ApprovalDecision";


const DoctorVerificationDetail = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <VerificationBreadcrumbs />
      <VerificationHeader />

      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <DoctorProfileSummary />
          <ProfessionalSummary />
        </div>

        <div className="col-span-12 lg:col-span-7 space-y-6">
          <SubmittedDocuments />
          <ApprovalDecision />
        </div>
      </div>

     
    </div>
  );
};

export default DoctorVerificationDetail;