import React from "react";
import Card from "../../common/card/Card";
const summaryItems = [
  {
    label: "Total Earnings",
    value: "$12,840.00",
    metaIcon: "trending_up",
    metaText: "+12.5% from last month",
    metaColor: "text-[#006e2f]",
    backgroundIcon: "account_balance_wallet",
  },
  {
    label: "Pending Payouts",
    value: "$2,450.50",
    metaIcon: "schedule",
    metaText: "Expected by Oct 15",
    metaColor: "text-[#943700]",
  },
  {
    label: "Completed Consultations",
    value: "142",
    metaIcon: "check_circle",
    metaText: "Avg. $90.40 per visit",
    metaColor: "text-slate-500",
  },
];

const EarningsSummary = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summaryItems.map((item) => (
       <Card
  variant="summaryMetric"
  label={item.label}
  value={item.value}
  metaIcon={item.metaIcon}
  metaText={item.metaText}
  metaColor={item.metaColor}
  backgroundIcon={item.backgroundIcon}
/>
      ))}
    </section>
  );
};

export default EarningsSummary;