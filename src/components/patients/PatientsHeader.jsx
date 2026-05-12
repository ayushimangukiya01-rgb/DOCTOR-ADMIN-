import React from "react";
import SectionHeader from "../../common/typography/SectionHeader";

const PatientsHeader = () => {
  return (
    <SectionHeader
      title="Patients"    
      subtitle="Manage patient records, consultation history, and health details."
     
      actionIcon="add"
    />
  );
};

export default PatientsHeader;