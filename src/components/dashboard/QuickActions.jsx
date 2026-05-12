import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import ListActionItem from "../../common/ui/ListActionItem";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate=useNavigate()
  return (
    <CardContainer className="p-6">

      <SectionHeader title="Quick Actions" />

      <div className="space-y-3">
         <label onClick={()=>navigate("/patients")}>
        <ListActionItem icon="personal_injury" text="View All Patients"  />
       </label>
        <label onClick={()=>navigate("/create-prescription")}>
        <ListActionItem icon="history_edu" text="Write Prescription" />
         </label>
         <label onClick={()=>navigate("/availability")}>
        <ListActionItem icon="event_available" text="Availability" />
        </label>
      </div>

    </CardContainer>
  );
};

export default QuickActions;