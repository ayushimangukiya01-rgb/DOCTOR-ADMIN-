import React, { useEffect, useState } from "react";
import CardContainer from "../../common/layout/CardContainer";
import ChartRangeTabs from "../../common/ui/ChartRangeTabs";
import RevenueBarItem from "../../common/display/RevenueBarItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorEarnings } from "../../redux/doctor/earnings/doctorEarningsSlice";

const RevenueChart = () => {
  const dispatch = useDispatch();

  const { revenueChart } = useSelector(
    (state) => state.doctorEarnings
  );

  // new: active chart range filter
  const [activeRange, setActiveRange] = useState("6 Months");

  useEffect(() => {
    if (revenueChart.length === 0) {
      dispatch(fetchDoctorEarnings());
    }
  }, [dispatch, revenueChart.length]);

  // new: filter revenue data based on selected range
  const filteredRevenueChart =
    activeRange === "6 Months"
      ? revenueChart.slice(-6)
      : revenueChart.slice(-12);

  // new: highest amount from filtered data
  const filteredMaxAmount = Math.max(
    ...filteredRevenueChart.map((item) => item.amount || 0)
  );

  
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
  tabs={["6 Months", "1 Year"]}
  activeTab={activeRange}
  onTabChange={setActiveRange}
/>
      </div>

      <div className="relative h-64 w-full flex items-end justify-between gap-4 px-2 sm:px-4 border-b border-slate-100">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
          <div className="border-t border-slate-50"></div>
        </div>

  {filteredRevenueChart.map((item) => (
  <RevenueBarItem
    key={item.month}
    {...item}
    maxAmount={filteredMaxAmount}
  />
))}
      </div>
    </CardContainer>
  );
};

export default RevenueChart;