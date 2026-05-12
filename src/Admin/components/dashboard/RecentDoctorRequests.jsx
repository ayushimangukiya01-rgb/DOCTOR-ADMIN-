// src/Admin/components/dashboard/RecentDoctorRequests.jsx
import React, { useEffect, useState } from "react";
import TableContainer from "../../../common/layout/TableContainer";
import TableHeaderCell from "../../../common/display/TableHeaderCell";
import StatusBadge from "../../../common/display/StatusBadge";
import IconButton from "../../../common/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../../redux/admin/dashboard/dashboardSlice";
import { useNavigate } from "react-router-dom";


const RecentDoctorRequests = () => {
  // NAVIGATE
const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doctorRequests } = useSelector((state) => state.dashboard);

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 5;

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(doctorRequests.length / itemsPerPage);

  // PAGINATION START INDEX
  const startIndex = (currentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentDoctors = doctorRequests.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    if (doctorRequests.length === 0) {
      dispatch(fetchDashboard());
    }
  }, [dispatch, doctorRequests.length]);

  return (
    <TableContainer variant="admin" className="min-w-0">
      <div className="flex items-center justify-between gap-4 border-b border-outline-variant/30 px-4 py-4 sm:px-6">
        <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface">
          Recent Doctor Requests
        </h3>

        <button
  onClick={() => navigate("/admin/doctors")}
  className="shrink-0 text-primary text-[14px] font-semibold hover:underline"
>
  View All
</button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-white">
            <tr>
              <TableHeaderCell variant="admin">Doctor Name</TableHeaderCell>
              <TableHeaderCell variant="admin">Specialization</TableHeaderCell>
              <TableHeaderCell variant="admin">Experience</TableHeaderCell>
              <TableHeaderCell variant="admin">
                Submission Date
              </TableHeaderCell>
              <TableHeaderCell variant="admin">Status</TableHeaderCell>
              <TableHeaderCell variant="admin">Action</TableHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {currentDoctors.map((doctor, index) => (
              <tr
                key={`${doctor.name}-${index}`}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-8 w-8 rounded-full border border-gray-100 object-cover"
                    />
                    <span className="text-[14px] leading-5 font-semibold text-on-surface">
                      {doctor.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {doctor.specialization}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {doctor.experience}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {doctor.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge variant="admin" status={doctor.status} />
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <IconButton
                      variant="admin"
                      icon="check_circle"
                      className="text-primary hover:bg-primary/10"
                    />

                    <IconButton
                      variant="admin"
                      icon="cancel"
                      className="text-error hover:bg-error/10"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-outline-variant/20">
          {/* PREVIOUS BUTTON */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-40"
          >
            Prev
          </button>

          {/* PAGE NUMBER */}
          <span className="text-sm font-medium">
            {currentPage} / {totalPages}
          </span>

          {/* NEXT BUTTON */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </TableContainer>
  );
};

export default RecentDoctorRequests;