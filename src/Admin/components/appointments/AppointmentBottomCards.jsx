// src/Admin/components/appointments/AppointmentBottomCards.jsx
import React, { useEffect } from "react";
import CardContainer from "../../../common/layout/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminAppointments } from "../../../redux/admin/appointments/appointmentSlice";

// const topDoctors = [
//   {
//     name: "Dr. Sarah Chen",
//     value: "24 appointments",
//     iconClass: "bg-blue-50 text-primary",
//   },
//   {
//     name: "Dr. James Wilson",
//     value: "18 appointments",
//     iconClass: "bg-green-50 text-tertiary",
//   },
//   {
//     name: "Dr. Lisa Thorne",
//     value: "15 appointments",
//     iconClass: "bg-purple-50 text-purple-600",
//   },
// ];

// const appointmentTypes = [
//   { label: "Consultation", value: "45%", color: "bg-blue-500" },
//   { label: "Follow-up", value: "30%", color: "bg-green-500" },
//   { label: "Emergency", value: "25%", color: "bg-red-500" },
// ];

// src/Admin/components/appointments/AppointmentBottomCards.jsx


const AppointmentBottomCards = () => {
  const dispatch = useDispatch();
const { topDoctors, appointmentTypes } = useSelector(
  (state) => state.adminAppointments
);

useEffect(() => {
  if (topDoctors.length === 0 || appointmentTypes.length === 0) {
    dispatch(fetchAdminAppointments());
  }
}, [dispatch, topDoctors.length, appointmentTypes.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Top Doctors */}
      <CardContainer variant="admin" className="p-5 sm:p-6 min-w-0">
        <h3 className="text-[20px] leading-7 font-semibold text-on-surface mb-4">
          Top Doctors Today
        </h3>

        <div className="space-y-4">
          {topDoctors.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center justify-between gap-4 p-3 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors min-w-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${doc.iconClass}`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    medical_services
                  </span>
                </div>

                <span className="font-label-md text-on-surface truncate">
                  {doc.name}
                </span>
              </div>

              <span className="font-body-sm text-on-surface-variant whitespace-nowrap shrink-0">
                {doc.value}
              </span>
            </div>
          ))}
        </div>
      </CardContainer>

      {/* Appointment Types */}
      <CardContainer variant="admin" className="p-5 sm:p-6 min-w-0">
        <h3 className="text-[20px] leading-7 font-semibold text-on-surface mb-4">
          Appointment Types
        </h3>

        <div className="space-y-4">
          {appointmentTypes.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between gap-4 mb-1">
                <span className="font-label-md text-on-surface truncate">
                  {item.label}
                </span>

                <span className="font-body-sm text-on-surface-variant shrink-0">
                  {item.value}
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full`}
                  style={{ width: item.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default AppointmentBottomCards;