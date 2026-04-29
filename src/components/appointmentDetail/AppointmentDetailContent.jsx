import React from "react";
import AppointmentHero from "./AppointmentHero";
import PatientInfoCard from "./PatientInfoCard";
import ConsultationTypeCard from "./ConsultationTypeCard";
import CurrentSymptoms from "./CurrentSymptoms";
import MedicalHistory from "./MedicalHistory";
import UploadedReports from "./UploadedReports";
import TwoColumnLayout from "../../common/layout/TwoColumnLayout";

const AppointmentDetailContent = () => {
  return (
    <div className="space-y-8">
      <AppointmentHero />

      <TwoColumnLayout
        left={
          <>
            <PatientInfoCard />
            <ConsultationTypeCard />
          </>
        }
        right={
          <>
            <CurrentSymptoms />
            <MedicalHistory />
            <UploadedReports />
          </>
        }
      />
    </div>
  );
};

export default AppointmentDetailContent;