import React from "react";
import Card from "../../common/card/Card";

const stats = [
  {
    icon: "groups",
    title: "Total Patients",
    value: "1,248",
    note: "+12 this month",
    color: "blue",
  },
  {
    icon: "person_add",
    title: "New Patients",
    value: "126",
    note: "+8 this month",
    color: "green",
  },
  {
    icon: "event_repeat",
    title: "Follow-up Required",
    value: "98",
    note: "View all",
    color: "orange",
  },
  {
    icon: "ecg_heart",
    title: "Critical Cases",
    value: "24",
    note: "View all",
    color: "red",
  },
];

const PatientStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6">
      {stats.map((item, index) => (
        <Card
          key={item.title}   // ✅ FIX HERE
          variant="patientStat"
          icon={item.icon}
          title={item.title}
          value={item.value}
          note={item.note}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default PatientStats;