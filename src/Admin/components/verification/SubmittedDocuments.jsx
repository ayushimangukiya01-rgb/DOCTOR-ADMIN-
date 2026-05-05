// src/Admin/components/verification/SubmittedDocuments.jsx
import React, { useEffect } from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminVerification } from "../../../redux/admin/verification/verificationSlice";

const SubmittedDocuments = () => {
 const dispatch = useDispatch();
const { submittedDocuments } = useSelector(
  (state) => state.adminVerification
);

useEffect(() => {
  if (submittedDocuments.length === 0) {
    dispatch(fetchAdminVerification());
  }
}, [dispatch, submittedDocuments.length]);

  return (
    <CardContainer variant="admin" className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-h3 text-h3 text-on-surface">
          Submitted Documents
        </h4>

        <span className="font-label-sm text-outline">
          {submittedDocuments.length} Files Attached
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {submittedDocuments.map((doc) => (
          <div
            key={doc.title}
            className="group relative overflow-hidden rounded-lg border border-outline-variant hover:border-primary transition-colors cursor-pointer bg-surface-container-lowest"
          >
            <div className="aspect-[4/3] bg-surface-container-high flex items-center justify-center">
              {doc.image ? (
                <>
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-primary px-4 py-2 rounded-full font-label-md shadow-lg">
                      Preview
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-outline text-4xl">
                    {doc.icon}
                  </span>

                  <span className="font-label-sm text-outline mt-2">
                    {doc.placeholder}
                  </span>
                </div>
              )}
            </div>

            <div className="p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-label-md text-on-surface truncate">
                  {doc.title}
                </p>

                <p className="font-label-sm text-outline">
                  {doc.meta}
                </p>
              </div>

              {doc.image && (
                <span className="material-symbols-outlined text-outline shrink-0">
                  {doc.icon}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContainer>
  );
};

export default SubmittedDocuments;