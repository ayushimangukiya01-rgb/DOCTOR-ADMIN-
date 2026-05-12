import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import ChartLegendItem from "../../common/display/ChartLegendItem";
import BarChartItem from "../../common/display/BarChartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDoctorDashboard } from "../../redux/doctor/dashboard/doctorDashboardSlice";

// const chartItems = [
//   { day: "MON", height: "h-3/4" },
//   { day: "TUE", height: "h-1/2" },
//   { day: "WED", height: "h-full" },
//   { day: "THU", height: "h-2/3" },
//   { day: "FRI", height: "h-4/5" },
//   { day: "SAT", empty: true },
//   { day: "SUN", empty: true },
// ];

const WeeklyStats = () => {
  const dispatch = useDispatch();
const { weeklyStats } = useSelector((state) => state.doctorDashboard);

useEffect(() => {
  if (!weeklyStats || weeklyStats.length === 0) {
    dispatch(fetchDoctorDashboard());
  }
}, [dispatch, weeklyStats?.length]);
  return (
    <CardContainer className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h3 className="font-manrope text-[18px] sm:text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Weekly Statistics
        </h3>

        <div className="flex gap-3 sm:gap-2 flex-wrap">
          <ChartLegendItem colorClass="bg-[#004ac6]" label="Consults" />
          <ChartLegendItem colorClass="bg-emerald-500" label="New Patients" />
        </div>
      </div>

      <div className="h-48 flex items-end gap-2 sm:gap-4 px-2 sm:px-4">
          {weeklyStats?.map((item) => (
          <BarChartItem key={item.day} {...item} />
        ))}
      </div>
    </CardContainer>
  );
};

export default WeeklyStats;