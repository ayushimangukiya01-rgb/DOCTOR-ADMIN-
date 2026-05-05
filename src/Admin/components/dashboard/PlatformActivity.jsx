// src/Admin/components/dashboard/PlatformActivity.jsx
import React, { useEffect } from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../../redux/admin/dashboard/dashboardSlice";
const PlatformActivity = () => {
  const dispatch = useDispatch();
  const { platformActivities } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <CardContainer variant="admin" className="p-5 sm:p-6 min-w-0">
      <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface mb-6">
        Platform Activity
      </h3>

      <div className="space-y-6">
        {platformActivities.map((item, index) => (
          <div key={item.title} className="flex gap-4 min-w-0">
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.iconClass}`}
              >
                <span className="material-symbols-outlined text-[18px] leading-none">
                  {item.icon}
                </span>
              </div>

              {index !== platformActivities.length - 1 && (
                <div className="w-0.5 flex-1 bg-gray-100 my-1"></div>
              )}
            </div>

            <div className="pb-4 min-w-0">
              <p className="text-[14px] leading-5 font-semibold text-on-surface">
                {item.title}
              </p>

              <p className="text-[12px] leading-4 text-on-surface-variant break-words">
                {item.description}
              </p>

              <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 border border-outline-variant/30 rounded-lg text-[14px] font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
        View Full Activity Log
      </button>
    </CardContainer>
  );
};

export default PlatformActivity;