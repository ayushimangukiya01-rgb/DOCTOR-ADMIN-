// src/Admin/components/doctors/DoctorStatsGrid.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDoctors } from "../../../redux/admin/doctors/doctorSlice";

// const stats = [
//   {
//     label: "Total Doctors",
//     value: "124",
//     icon: "medical_services",
//     bg: "bg-blue-50",
//     text: "text-primary",
//   },
//   {
//     label: " Approve Doctor",
//     value: "98",
//     icon: "verified",
//     bg: "bg-green-50",
//     text: "text-green-600",
//   },
//   {
//     label: "Reject Profile",
//     value: "12",
//     icon: "event_busy",
//     bg: "bg-orange-50",
//     text: "text-orange-600",
//   },
//   {
//     label: " Pending Profile",
//     value: "14",
//     icon: "pending_actions",
//     bg: "bg-purple-50",
//     text: "text-purple-600",
//   },
// ];



const DoctorStatsGrid = () => {
  const dispatch = useDispatch();
const { stats } = useSelector((state) => state.adminDoctors);

useEffect(() => {
  if (stats.length === 0) {
    dispatch(fetchAdminDoctors());
  }
}, [dispatch, stats.length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition"
        >
          <div>
            <p className="text-[12px] text-on-surface-variant mb-1">
              {item.label}
            </p>
            <h3 className="text-[22px] font-semibold text-on-surface">
              {item.value}
            </h3>
          </div>

          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${item.bg} ${item.text}`}
          >
            <span className="material-symbols-outlined text-[22px]">
              {item.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorStatsGrid;