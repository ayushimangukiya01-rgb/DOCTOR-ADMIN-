// src/Admin/components/dashboard/QuickActions.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDashboard } from "../../../redux/admin/dashboard/dashboardSlice";

// const actions = [
//   {
//     label: "Add Doctor",
//     icon: "person_add",
//     primary: true,
//   },
//   {
//     label: "Generate Report",
//     icon: "receipt_long",
//   },
//   {
//     label: "Broadcast Message",
//     icon: "mail",
//   },
//   {
//     label: "System Config",
//     icon: "settings",
//   },
// ];

const QuickActions = () => {
  const dispatch = useDispatch();
const { quickActions } = useSelector((state) => state.dashboard);



useEffect(() => {
  if (quickActions.length === 0) {
    dispatch(fetchDashboard());
  }
}, [dispatch, quickActions.length]);
  return (
    <CardContainer variant="admin" className="p-5 sm:p-6 min-w-0">
      <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {quickActions.map((item) => (
          <button
            key={item.label}
            className={`min-w-0 flex flex-col items-center justify-center p-4 rounded-xl transition-colors gap-2 ${
              item.primary
                ? "bg-primary text-white hover:bg-primary-container"
                : "border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <span className="material-symbols-outlined text-2xl leading-none">
              {item.icon}
            </span>

            <span className="text-[12px] leading-4 font-medium text-center break-words">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </CardContainer>
  );
};

export default QuickActions;