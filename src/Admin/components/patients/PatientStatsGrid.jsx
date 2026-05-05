// src/Admin/components/patients/PatientStatsGrid.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminPatients } from "../../../redux/admin/patients/patientSlice";

// const stats = [
//   {
//     title: "Total Patients",
//     value: "1,248",
//     icon: "group",
//     iconClass: "bg-blue-50 text-blue-600",
//     change: "+12%",
//     changeClass: "text-tertiary",
//   },
//   {
//     title: "Active Treatments",
//     value: "432",
//     icon: "how_to_reg",
//     iconClass: "bg-green-50 text-green-600",
//     change: "+5%",
//     changeClass: "text-tertiary",
//   },
//   {
//     title: "Critical Alerts",
//     value: "18",
//     icon: "emergency",
//     iconClass: "bg-orange-50 text-orange-600",
//     change: "+2 today",
//     changeClass: "text-error",
//   },
//   {
//     title: "Today's Visits",
//     value: "64",
//     icon: "calendar_today",
//     iconClass: "bg-purple-50 text-purple-600",
//     change: "Scheduled",
//     changeClass: "text-on-surface-variant",
//   },
// ];



const PatientStatsGrid = () => {
  const dispatch = useDispatch();
const { stats } = useSelector((state) => state.adminPatients);

useEffect(() => {
  if (stats.length === 0) {
    dispatch(fetchAdminPatients());
  }
}, [dispatch, stats.length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white p-5 sm:p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] min-w-0"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${item.iconClass}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>

            <span className={`font-label-sm ${item.changeClass}`}>
              {item.change}
            </span>
          </div>

          <p className="font-label-sm text-on-surface-variant">
            {item.title}
          </p>

          <h3 className="font-h2 text-h2 text-on-surface">{item.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default PatientStatsGrid;