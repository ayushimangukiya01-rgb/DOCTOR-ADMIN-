import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import ListActionItem from "../../common/ui/ListActionItem";

const QuickActions = () => {
  return (
    <CardContainer className="p-6">

      <SectionHeader title="Quick Actions" />

      <div className="space-y-3">
        <ListActionItem icon="personal_injury" text="View All Patients" />
        <ListActionItem icon="history_edu" text="Write Prescription" />
        <ListActionItem icon="lab_research" text="Lab Reports" />
      </div>

    </CardContainer>
  );
};

export default QuickActions;