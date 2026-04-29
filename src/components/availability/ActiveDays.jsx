import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import CheckboxRow from "../../common/ui/CheckboxRow";
import SectionHeader from "../../common/typography/SectionHeader";

const days = [
  { name: "Monday", active: true },
  { name: "Tuesday", active: true },
  { name: "Wednesday", active: true },
  { name: "Thursday", active: true },
  { name: "Friday", active: true },
  { name: "Saturday", active: false },
  { name: "Sunday", active: false },

];

const ActiveDays = () => {
  return (
    <CardContainer>

      <SectionHeader title="Active Days" actionText="Reset All" headingType="h2" />

      <div className="space-y-3">
        {days.map((day, index) => (
          <CheckboxRow
            key={index}
            label={day.name}
            checked={day.active}
            disabled={!day.active}
          />
        ))}
      </div>

    </CardContainer>
  );
};

export default ActiveDays;