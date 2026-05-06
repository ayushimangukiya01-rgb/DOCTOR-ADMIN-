import React, { useEffect } from "react";
import InfoItem from "../../common/display/InfoItem";
import AvatarWithBadge from "../../common/display/AvatarWithBadge";
import VitalSignsBox from "../../common/display/VitalSignsBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorPrescription } from "../../redux/doctor/prescription/doctorPrescriptionSlice";

const PatientSummaryCard = () => {
  const dispatch = useDispatch();

  const { patientSummary } = useSelector(
    (state) => state.doctorPrescription
  );

  useEffect(() => {
    if (!patientSummary?.vitalSigns?.length) {
      dispatch(fetchDoctorPrescription());
    }
  }, [dispatch, patientSummary?.vitalSigns?.length]);

  return (
    <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
      <AvatarWithBadge
        image={patientSummary.image}
        alt={patientSummary.alt}
        badge={patientSummary.badge}
      />

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 text-center sm:text-left">
        <InfoItem
          label="Patient Name"
          value={patientSummary.name}
          helper={patientSummary.helper}
        />

        <InfoItem
          label="Patient ID"
          value={patientSummary.patientId}
          helper={patientSummary.lastVisit}
          italicHelper
        />

        <div className="sm:col-span-2 lg:col-span-2">
          <VitalSignsBox items={patientSummary.vitalSigns || []} />
        </div>
      </div>
    </section>
  );
};

export default PatientSummaryCard;