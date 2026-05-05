// src/Admin/components/verification/DoctorProfileSummary.jsx
import React, { useEffect } from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminVerification } from "../../../redux/admin/verification/verificationSlice";

const DoctorProfileSummary = () => {
  const dispatch = useDispatch();
  const { doctorProfile } = useSelector((state) => state.adminVerification);

useEffect(() => {
  if (!doctorProfile || Object.keys(doctorProfile).length === 0) {
    dispatch(fetchAdminVerification());
  }
}, [dispatch, doctorProfile]);

  return (
    <CardContainer variant="admin" className="p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="relative mb-4">
          <img
            src={doctorProfile.image}
            alt={doctorProfile.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-surface-container-highest"
          />

          <span className="absolute bottom-1 right-1 bg-tertiary text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white uppercase tracking-wider">
            {doctorProfile.status}
          </span>
        </div>

        <h3 className="font-h2 text-h2 text-on-surface">
          {doctorProfile.name}
        </h3>

        <p className="font-body-md text-primary font-semibold">
          {doctorProfile.specialization}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm px-3 py-1 rounded-full">
            {doctorProfile.degree}
          </span>

          <span className="bg-surface-container-high text-on-surface-variant font-label-sm px-3 py-1 rounded-full">
            {doctorProfile.experience}
          </span>
        </div>
      </div>

      <div className="space-y-4 border-t border-gray-100 pt-6">
        {doctorProfile.info?.map(([label, value]) => (
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