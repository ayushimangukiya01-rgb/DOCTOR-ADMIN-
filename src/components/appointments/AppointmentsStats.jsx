import React from "react";
import Card from "../../common/card/Card";

const stats = [
  {
    icon: "calendar_month",
    label: "Today's Visits",
    value: "12",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: "video_chat",
    label: "Video Call",
    value: "8",
    iconBg: "bg-[#6bff8f]/20",
    iconColor: "text-[#006e2f]",
  },
  {
    icon: "groups",
    label: "New Patients",
    value: "4",
    iconBg: "bg-[#ffb596]/20",
    iconColor: "text-[#943700]",
  },
  {
    icon: "pending_actions",
    label: "Messages",
    value: "3",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

const AppointmentsStats = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => (
        <Card
          key={item.label}
          variant="stat"
          icon={item.icon}
          label={item.label}
          value={item.value}
          iconBg={item.iconBg}
          iconColor={item.iconColor}
        />
      ))}
    </section>
  );
};

export default AppointmentsStats;