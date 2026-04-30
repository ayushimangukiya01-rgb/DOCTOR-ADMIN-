import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import ProfileHeader from "../../common/display/ProfileHeader";
import InfoItem from "../../common/display/InfoItem";
import FullWidthButton from "../../common/ui/FullWidthButton";

const PatientInfoCard = () => {
  return (
    <CardContainer size="left">
      <ProfileHeader
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBt60CZSroQHVAZXJG4bIyP5SB2u40h46x8BHsZo53EVmEKHL60-TOazgV0zT3MaHiQmbUokimKVoc6EOU5_8PgodGB4uHA7wFOf98oD2zAxf2uOfic32JDzjkwHoErx88Ntvt8IQN5EMJ3GI8SDhGL66kOtFozJRQUklk2WK2s19SfNj-ZM1DRFnAQQqjeD1JCV2Ic_BLMmbZ3b8kN0wc_oVJjdvO9DSIp7QVsLtyg6OSA4ps90ynxY9Lg-QCjvTeXIyyiB5qiTcbf"
        name="Sarah Jenkins"
        subtitle="Patient ID: #MED-90210"
      />

      <div className="py-4  space-y-4  ">
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Age" value="34 Years" small />
          <InfoItem label="Gender" value="Female" small />
          <InfoItem label="Blood Type" value="O Positive" small />
          <InfoItem label="Weight" value="64 kg" small />
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <FullWidthButton icon="contact_page">View Full Profile</FullWidthButton>
      </div>
    </CardContainer>
  );
};

export default PatientInfoCard;