// src/Admin/components/dashboard/TodayAppointments.jsx
import React, { useEffect, useState } from "react";
import TableContainer from "../../../common/layout/TableContainer";
import TableHeaderCell from "../../../common/display/TableHeaderCell";
import StatusBadge from "../../../common/display/StatusBadge";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../../redux/admin/dashboard/dashboardSlice";

const TodayAppointments = () => {
  const dispatch = useDispatch();
  const { todayAppointments } = useSelector((state) => state.dashboard);

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 5;

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(todayAppointments.length / itemsPerPage);

  // PAGINATION START INDEX
  const startIndex = (currentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentAppointments = todayAppointments.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    if (todayAppointments.length === 0) {
      dispatch(fetchDashboard());
    }
  }, [dispatch, todayAppointments.length]);

  return (
    <TableContainer variant="admin" className="min-w-0 overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-outline-variant/30 px-4 py-4 sm:px-6">
        <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface">
          Today Appointments
        </h3>

        <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary rounded-full text-[12px] leading-4 font-bold whitespace-nowrap">
          {todayAppointments.length} Total
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-slate-50">
            <tr>
              <TableHeaderCell variant="admin">Patient</TableHeaderCell>
              <TableHeaderCell variant="admin">Doctor</TableHeaderCell>
              <TableHeaderCell variant="admin">Time</TableHeaderCell>
              <TableHeaderCell variant="admin">Type</TableHeaderCell>
              <TableHeaderCell variant="admin">Status</TableHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {currentAppointments.map((item, index) => (
              <tr
                key={`${item.patient}-${index}`}
                className="odd:bg-white even:bg-slate-50/40 hover:bg-blue-50/50 transition-colors"
              >
                <td className="px-6 py-5 text-[14px] leading-5 font-semibold text-on-surface whitespace-nowrap">
                  {item.patient}
                </td>

                <td className="px-6 py-5 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {item.doctor}
                </td>

                <td className="px-6 py-5 text-[14px] leading-5 font-medium text-on-surface whitespace-nowrap">
                  {item.time}
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[13px] leading-5 font-medium text-primary">
                    {item.type}
                  </span>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <StatusBadge variant="admin" status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 border-t border-outline-variant/20 px-4 py-4 sm:px-6">
          {/* PREVIOUS BUTTON */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-[14px] font-medium text-on-surface-variant hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>

          {/* PAGE NUMBER */}
          <span className="inline-flex h-10 min-w-[64px] items-center justify-center rounded-lg bg-primary/10 px-4 text-[14px] font-bold text-primary whitespace-nowrap">
            {currentPage} / {totalPages}
          </span>

          {/* NEXT BUTTON */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-[14px] font-medium text-on-surface-variant hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </TableContainer>
  );
};

export default TodayAppointments;