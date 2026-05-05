// src/Admin/components/dashboard/TodayAppointments.jsx
import React from "react";
import TableContainer from "../../../common/layout/TableContainer";
import TableHeaderCell from "../../../common/display/TableHeaderCell";
import StatusBadge from "../../../common/display/StatusBadge";
import IconButton from "../../../common/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDashboard } from "../../../redux/admin/dashboard/dashboardSlice";

// const appointments = [
//   {
//     patient: "Robert Fox",
//     doctor: "Dr. Sarah Chen",
//     time: "09:30 AM",
//     type: "Routine Checkup",
//     status: "Confirmed",
//   },
//   {
//     patient: "Jane Cooper",
//     doctor: "Dr. James Wilson",
//     time: "11:00 AM",
//     type: "Emergency Consultation",
//     status: "In Progress",
//   },
// ];

const TodayAppointments = () => {
  const dispatch = useDispatch();
const { todayAppointments } = useSelector((state) => state.dashboard);

useEffect(() => {
  if (todayAppointments.length === 0) {
    dispatch(fetchDashboard());
  }
}, [dispatch, todayAppointments.length]);
  return (
    <TableContainer variant="admin" className="min-w-0">
      <div className="flex items-center justify-between gap-4 border-b border-outline-variant/30 px-4 py-4 sm:px-6">
        <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface">
          Today Appointments
        </h3>

        <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary rounded text-[12px] leading-4 font-bold whitespace-nowrap">
          84 Total
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-white">
            <tr>
              <TableHeaderCell variant="admin">Patient</TableHeaderCell>
              <TableHeaderCell variant="admin">Doctor</TableHeaderCell>
              <TableHeaderCell variant="admin">Time</TableHeaderCell>
              <TableHeaderCell variant="admin">Type</TableHeaderCell>
              <TableHeaderCell variant="admin">Status</TableHeaderCell>
              <TableHeaderCell variant="admin">Action</TableHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {todayAppointments.map((item) => (
              <tr
                key={item.patient}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-6 py-4 text-[14px] leading-5 font-semibold text-on-surface whitespace-nowrap">
                  {item.patient}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {item.doctor}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface whitespace-nowrap">
                  {item.time}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {item.type}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge variant="admin" status={item.status} />
                </td>

                <td className="px-6 py-4">
                  <IconButton
                    variant="admin"
                    icon="more_vert"
                    className="text-gray-400 hover:text-primary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableContainer>
  );
};

export default TodayAppointments;