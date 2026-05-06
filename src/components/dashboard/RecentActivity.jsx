import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import ActivityItem from "../../common/display/ActivityItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDoctorDashboard } from "../../redux/doctor/dashboard/doctorDashboardSlice";

// const activities = [
//   {
//     color: "bg-blue-500",
//     title: "Diagnosis Updated",
//     subtitle: "Sarah Jenkins • 12 mins ago",
//   },
//   {
//     color: "bg-emerald-500",
//     title: "Lab Result Received",
//     subtitle: "Robert Chen • 1 hour ago",
//   },
//   {
//     color: "bg-amber-500",
//     title: "Appointment Cancelled",
//     subtitle: "Emily Blunt • 3 hours ago",
//   },
//   {
//     color: "bg-slate-300",
//     title: "Monthly Report Ready",
//     subtitle: "System Admin • 5 hours ago",
//   },
// ];

const RecentActivity = () => {
  const dispatch = useDispatch();
const { recentActivity } = useSelector((state) => state.doctorDashboard);

useEffect(() => {
  if (!recentActivity || recentActivity.length === 0) {
    dispatch(fetchDoctorDashboard());
  }
}, [dispatch, recentActivity]);
  return (
    <CardContainer className="p-6">

      <div className="flex justify-between items-center mb-6">
        <SectionHeader title="Recent Activity" />

        <span className="material-symbols-outlined text-slate-300">
          refresh
        </span>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-3 top-2 bottom-2 w-px border-l-2 border-dashed border-slate-100"></div>

        {recentActivity?.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </div>

    </CardContainer>
  );
};

export default RecentActivity;