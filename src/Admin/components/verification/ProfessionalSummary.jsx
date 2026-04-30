// src/Admin/components/verification/ProfessionalSummary.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";

const specialties = ["Echocardiography", "Heart Failure", "Preventive Care"];

const ProfessionalSummary = () => {
  return (
    <CardContainer variant="admin" className="p-6">
      <h4 className="font-label-md text-on-surface uppercase tracking-wider mb-6 border-b border-gray-100 pb-4">
        Professional Summary
      </h4>

      <div className="space-y-6">
        <div>
          <h5 className="font-label-md text-primary mb-2">Education</h5>

          <p className="font-body-md text-on-surface leading-relaxed">
            Johns Hopkins University School of Medicine
            <br />
            <span className="text-outline italic">
              Doctor of Medicine (MD), 2011
            </span>
          </p>
        </div>

        <div>
          <h5 className="font-label-md text-primary mb-2">Specialties</h5>

          <div className="flex flex-wrap gap-2">
            {specialties.map((item) => (
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