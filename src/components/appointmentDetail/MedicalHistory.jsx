import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import TimelineList from "../../common/display/TimelineList";

const historyItems = [
  {
    title: "Annual Physical Examination",
    subtitle: "General Checkup • Dr. Robert Chen",
    date: "Aug 12, 2023",
    active: true,
  },
  {
    title: "Type 2 Diabetes Diagnosis",
    subtitle: "Endocrinology • City General Hospital",
    date: "Jan 05, 2022",
    active: false,
  },
];

const MedicalHistory = () => {
  return (
    <CardContainer>
      <SectionHeader icon="history" title="Medical History" />
      <TimelineList items={historyItems} />
    </CardContainer>
  );
};

export default MedicalHistory;