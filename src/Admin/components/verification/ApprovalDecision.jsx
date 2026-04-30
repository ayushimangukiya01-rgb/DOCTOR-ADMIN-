// src/Admin/components/verification/ApprovalDecision.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";

const ApprovalDecision = () => {
  return (
    <CardContainer
      variant="admin"
      className="p-5 sm:p-6 border-2 border-primary-container"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-primary-fixed p-3 rounded-full shrink-0">
          <span className="material-symbols-outlined text-primary">gavel</span>
        </div>

        <div>
          <h4 className="font-h3 text-h3 text-on-surface">
            Approval Decision
          </h4>

          <p className="font-body-md text-outline">
            Finalize the verification process for this practitioner. Ensure all
            documents have been audited.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-label-md text-on-surface mb-2">
          Auditor&apos;s Internal Notes
        </label>

        <textarea
          rows="3"
          placeholder="Enter any observations or conditions for approval..."
          className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-body-md outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
  
  <button className="flex items-center justify-center gap-2 px-4 py-3 border border-error text-error text-[14px] font-semibold rounded-lg hover:bg-error-container transition-colors active:scale-[0.98] whitespace-nowrap">
    <span className="material-symbols-outlined text-[18px]">close</span>
    Reject Profile
  </button>

  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white text-[14px] font-semibold rounded-lg hover:bg-orange-600 shadow-md active:scale-[0.98] transition-all whitespace-nowrap">
    <span className="material-symbols-outlined text-[18px]">pending_actions</span>
    Pending Profile
  </button>

  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-on-primary text-[14px] font-semibold rounded-lg hover:opacity-90 shadow-md active:scale-[0.98] transition-all whitespace-nowrap">
    <span className="material-symbols-outlined text-[18px]">done_all</span>
    Approve Doctor
  </button>

</div>

      <div className="mt-4 flex items-start gap-2 text-outline">
        <span className="material-symbols-outlined text-sm mt-0.5">info</span>
        <span className="font-label-sm">
          This action will be logged and notification sent to Sarah Jenkins.
        </span>
      </div>
    </CardContainer>
  );
};

export default ApprovalDecision;