import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import PillBadge from "../../common/ui/PillBadge";
import DescriptionBox from "../../common/display/DescriptionBox";

const symptoms = [
  "Chronic Migraine",
  "Nausea",
  "Light Sensitivity",
  "Dizziness",
];

const CurrentSymptoms = () => {
  return (
    <CardContainer>
      <SectionHeader icon="medical_services" title="Current Symptoms" />

      <div className="flex flex-wrap gap-2 mb-4">
        {symptoms.map((item) => (
          <PillBadge key={item}>{item}</PillBadge>
        ))}
      </div>

      <DescriptionBox>
        "I've been experiencing intense throbbing pain on the left side of my
        head for the past 3 days. It usually gets worse in the afternoon and is
        accompanied by extreme sensitivity to bright lights. Ibuprofen hasn't
        provided much relief."
      </DescriptionBox>
    </CardContainer>
  );
};

export default CurrentSymptoms;