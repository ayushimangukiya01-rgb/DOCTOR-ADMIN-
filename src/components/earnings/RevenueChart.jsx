import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import ChartRangeTabs from "../../common/ui/ChartRangeTabs";
import RevenueBarItem from "../../common/display/RevenueBarItem";

const chartData = [
  { month: "May", height: "45%" },
  { month: "Jun", height: "60%" },
  { month: "Jul", height: "55%" },
  { month: "Aug", height: "85%" },
  { month: "Sep", height: "70%", active: true, tooltip: "$2,100.00" },
  { month: "Oct", height: "40%", dashed: true },
];

const RevenueChart = () => {
  return (
    <CardContainer className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            Revenue Overview
          </h3>
          <p className="text-sm text-slate-500">
            Monthly performance analytics
          </p>
        </div>

        <ChartRangeTabs
          tabs={["6 Months", "1 Year", "All Time"]}
          activeTab="6 Months"
        />
      </div>

      <div className="relative h-64 w-full flex items-end justify-between gap-4 px-2 sm:px-4 border-b border-slate-100">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
        </div>

        {chartData.map((item) => (
          <RevenueBarItem key={item.month} {...item} />
        ))}
      </div>
    </CardContainer>
  );
};

export default RevenueChart;