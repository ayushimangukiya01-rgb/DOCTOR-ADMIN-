import React from "react";
import AppointmentHero from "./AppointmentHero";
import PatientInfoCard from "./PatientInfoCard";
import ConsultationTypeCard from "./ConsultationTypeCard";
import CurrentSymptoms from "./CurrentSymptoms";
import MedicalHistory from "./MedicalHistory";
import UploadedReports from "./UploadedReports";

const AppointmentDetailContent = () => {
  return (
    <div className="space-y-8">
      <AppointmentHero />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <PatientInfoCard />
          <ConsultationTypeCard />
        </div>

        <div className="col-span-12 lg:col-span-8 space-y-6">
          <CurrentSymptoms />
          <MedicalHistory />
          <UploadedReports />
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailContent;