import React from "react";
import PageHeader from "../../common/typography/PageHeader";
import ActionButton from "../../common/ui/ActionButton";
import Card from "../../common/card/Card";

const stats = [
  {
    icon: "calendar_month",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "+12%",
    badgeClass: "text-[#006e2f] bg-[#6bff8f]/10",
    label: "Total Appointments",
    value: "1,284",
  },
  {
    icon: "group",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: "Daily",
    badgeClass: "bg-[#e7e7f3]",
    label: "Today’s Patients",
    value: "12",
  },
  {
    icon: "pending_actions",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    badge: "Urgent: 2",
    badgeClass: "text-red-600 bg-red-50",
    label: "Pending Consults",
    value: "08",
  },
  {
    icon: "account_balance_wallet",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    badge: "This Month",
    badgeClass: "text-[#006e2f] bg-[#6bff8f]/10",
    label: "Earnings",
    value: "$14.2k",
  },
];

const DashboardOverview = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5">
          <PageHeader
            title="Welcome back, Dr. Smith"
            subtitle="You have 12 appointments scheduled for today."
          />

          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
            <ActionButton variant="outline">
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              Add Availability
            </ActionButton>

            <ActionButton variant="primary">
              <span className="material-symbols-outlined text-[18px]">
                videocam
              </span>
              Start Consultation
            </ActionButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item) => (
            <Card key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;