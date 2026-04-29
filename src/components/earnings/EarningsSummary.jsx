import React from "react";
import SummaryMetricCard from "../../common/display/SummaryMetricCard";

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
        <SummaryMetricCard key={item.label} {...item} />
      ))}
    </section>
  );
};

export default EarningsSummary;