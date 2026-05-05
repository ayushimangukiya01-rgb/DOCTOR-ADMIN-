// src/Admin/components/verification/ProfessionalSummary.jsx
import React, { useEffect } from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminVerification } from "../../../redux/admin/verification/verificationSlice";

const ProfessionalSummary = () => {
  const dispatch = useDispatch();

  const { professionalSummary } = useSelector(
    (state) => state.adminVerification
  );

  useEffect(() => {
    if (!professionalSummary || Object.keys(professionalSummary).length === 0) {
      dispatch(fetchAdminVerification());
    }
  }, [dispatch, professionalSummary]);

  return (
    <CardContainer variant="admin" className="p-6">
      <h4 className="font-label-md text-on-surface uppercase tracking-wider mb-6 border-b border-gray-100 pb-4">
        Professional Summary
      </h4>

      <div className="space-y-6">
        <div>
          <h5 className="font-label-md text-primary mb-2">Education</h5>

          <p className="font-body-md text-on-surface leading-relaxed">
            {professionalSummary.education}
            <br />
            <span className="text-outline italic">
              {professionalSummary.degree}
            </span>
          </p>
        </div>

        <div>
          <h5 className="font-label-md text-primary mb-2">Specialties</h5>

          <div className="flex flex-wrap gap-2">
            {professionalSummary.specialties?.map((item) => (
              <span
                key={item}
                className="border border-outline-variant text-on-surface-variant font-label-sm px-3 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProfessionalSummary;