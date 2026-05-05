// src/Admin/components/verification/AuditTimeline.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdminVerification } from "../../../redux/admin/verification/verificationSlice";

// const timeline = [
//   {
//     title: "Application Submitted",
//     description: "Dr. Sarah Jenkins uploaded 4 documents for review.",
//     time: "Oct 24, 2023 • 10:45 AM",
//     color: "bg-tertiary",
//   },
//   {
//     title: "Auto-Verification Passed",
//     description:
//       "AI System successfully matched license details with state database.",
//     time: "Oct 24, 2023 • 10:46 AM",
//     color: "bg-primary",
//   },
//   {
//     title: "Assigned to Auditor",
//     description: "Case moved to Admin Smith's queue for final manual check.",
//     time: "Oct 25, 2023 • 09:12 AM",
//     color: "bg-secondary-fixed-dim",
//   },
// ];

const AuditTimeline = () => {
  const dispatch = useDispatch();
const { auditTimeline } = useSelector((state) => state.adminVerification);

useEffect(() => {
  if (auditTimeline.length === 0) {
    dispatch(fetchAdminVerification());
  }
}, [dispatch, auditTimeline.length]);
  return (
    <section className="mt-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-gray-200 flex-1"></div>

        <h4 className="font-label-md text-outline uppercase tracking-widest px-4 text-center">
          Verification Activity Log
        </h4>

        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <CardContainer variant="admin" className="p-5 sm:p-6 max-w-4xl mx-auto">
        <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
          {auditTimeline.map((item) => (
            <div key={item.title} className="relative pl-10">
              <span
                className={`absolute left-0 top-1 w-6 h-6 ${item.color} rounded-full border-4 border-white shadow-sm`}
              ></span>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-label-md text-on-surface">
                    {item.title}
                  </p>
                  <p className="font-body-sm text-outline">
                    {item.description}
                  </p>
                </div>

                <span className="font-label-sm text-outline shrink-0">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContainer>
    </section>
  );
};

export default AuditTimeline;