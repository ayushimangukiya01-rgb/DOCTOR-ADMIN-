// src/Admin/components/appointments/AppointmentsTable.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "../../../common/layout/TableContainer";
import { fetchAdminAppointments } from "../../../redux/admin/appointments/appointmentSlice";

const AppointmentsTable = ({ filteredAppointments }) => {
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.adminAppointments);

  const tableAppointments = filteredAppointments || appointments;

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 5;

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(tableAppointments.length / itemsPerPage);

  // PAGINATION SAFE PAGE
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  // PAGINATION START INDEX
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentAppointments = tableAppointments.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // PAGINATION PAGE NUMBERS
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    if (appointments.length === 0) {
      dispatch(fetchAdminAppointments());
    }
  }, [dispatch, appointments.length]);

  // PAGINATION RESET WHEN FILTER DATA CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [tableAppointments.length]);

  return (
    <TableContainer variant="admin" className="min-w-0 overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[1200px] text-left border-collapse">
          <thead className="bg-slate-50">
            <tr className="border-b border-outline-variant/30">
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Patient
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Doctor
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Date & Time
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Type
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Payment
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant text-right whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {currentAppointments.length > 0 ? (
              currentAppointments.map((item, index) => (
                <tr
                  key={`${item.patientId}-${startIndex + index}`}
                  className="odd:bg-white even:bg-slate-50/40 hover:bg-blue-50/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      {item.patientAvatar ? (
                        <img
                          src={item.patientAvatar}
                          alt={item.patient}
                          className="w-10 h-10 rounded-full border border-slate-100 object-cover shadow-sm"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-semibold ${item.patientBg}`}
                        >
                          {item.patientInitial}
                        </div>
                      )}

                      <div>
                        <p className="text-[14px] font-medium text-on-surface">
                          {item.patient}
                        </p>
                        <p className="text-[12px] text-on-surface-variant">
                          ID: {item.patientId}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      {item.doctorAvatar ? (
                        <img
                          src={item.doctorAvatar}
                          alt={item.doctor}
                          className="w-8 h-8 rounded-full border border-slate-100 object-cover shadow-sm"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[11px] font-semibold">
                          {item.doctorInitial}
                        </div>
                      )}

                      <p className="text-[13px] text-on-surface">
                        {item.doctor}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[13px] text-on-surface">{item.date}</p>
                    <p className="text-[12px] text-on-surface-variant">
                      {item.time}
                    </p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium ${item.typeClass}`}
                    >
                      {item.type}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`material-symbols-outlined text-[18px] ${item.paymentIconClass}`}
                      >
                        {item.paymentIcon}
                      </span>
                      <span className="text-[13px] text-on-surface">
                        {item.payment}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${item.statusClass}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.dotClass}`}
                      ></span>
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined text-[18px]">
                          edit
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-center text-[14px] text-on-surface-variant"
                >
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="px-4 py-4 sm:px-6 bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={safeCurrentPage === 1}
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/40 bg-white px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-[13px] font-medium transition-colors ${
                  safeCurrentPage === page
                    ? "bg-primary text-on-primary shadow-sm"
                    : "border border-outline-variant/40 bg-white text-on-surface-variant hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={safeCurrentPage === totalPages}
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/40 bg-white px-3 py-2 text-[13px] font-medium text-on-surface-variant hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </TableContainer>
  );
};

export default AppointmentsTable;