// src/Admin/components/doctors/DoctorsTable.jsx
import React, { useEffect, useState } from "react";
import TableContainer from "../../../common/layout/TableContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDoctors } from "../../../redux/admin/doctors/doctorSlice";

const StatusPill = ({ status }) => {
  const isActive = status === "Approve-Doctor";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
        isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      <span
        className={`mr-2 h-1.5 w-1.5 rounded-full ${
          isActive ? "bg-green-600" : "bg-red-600"
        }`}
      ></span>
      {status}
    </span>
  );
};                    

const DoctorsTable = ({ filteredDoctors }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { doctors, loading, error } = useSelector(
    (state) => state.adminDoctors
  );

  const tableDoctors = filteredDoctors || doctors;

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 5;

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(tableDoctors.length / itemsPerPage);

  // PAGINATION SAFE PAGE
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  // PAGINATION START INDEX
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentDoctors = tableDoctors.slice(startIndex, startIndex + itemsPerPage);

  // PAGINATION PAGE NUMBERS
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchAdminDoctors());
    }
  }, [dispatch, doctors.length]);

  // PAGINATION RESET WHEN FILTER DATA CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [tableDoctors.length]);

  if (loading) {
    return (
      <TableContainer variant="admin" className="min-w-0 p-6">
        <p className="font-body-md text-on-surface-variant">
          Loading doctors...
        </p>
      </TableContainer>
    );
  }

  if (error) {
    return (
      <TableContainer variant="admin" className="min-w-0 p-6">
        <p className="font-body-md text-error">{error}</p>
      </TableContainer>
    );
  }

  return (
    <TableContainer variant="admin" className="min-w-0 overflow-hidden">
      <div className="w-full overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[1050px] text-left border-collapse">
          <thead className="bg-slate-50">
            <tr className="border-b border-outline-variant/40">
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Doctor
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Specialization
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant text-center whitespace-nowrap">
                Experience
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Fee
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant text-right whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {currentDoctors.length > 0 ? (
              currentDoctors.map((doctor, index) => (
                <tr
                  key={`${doctor.id}-${startIndex + index}`}
                  className="odd:bg-white even:bg-slate-50/40 hover:bg-blue-50/50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        className="h-11 w-11 rounded-full border border-slate-100 object-cover shadow-sm"
                      />

                      <div>
                        <p className="font-label-md text-label-md text-on-surface">
                          {doctor.name}
                        </p>
                        <p className="font-body-sm text-body-sm text-outline">
                          ID: {doctor.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
                      {doctor.specialization}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-center font-body-md text-body-md whitespace-nowrap">
                    {doctor.experience}
                  </td>

                  <td className="px-6 py-5 whitespace-nowrap">
                    <StatusPill status={doctor.status} />
                  </td>

                  <td className="px-6 py-5 font-label-md text-label-md whitespace-nowrap">
                    {doctor.fee}
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => navigate("/admin/doctors/verify")}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">
                        edit
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-8 text-center text-[14px] text-on-surface-variant"
                >
                  No doctors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-outline-variant/20 px-4 py-4 sm:px-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={safeCurrentPage === 1}
            className="rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-[14px] font-medium text-on-surface-variant hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-[14px] font-bold transition-colors ${
                safeCurrentPage === page
                  ? "bg-primary text-white"
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
            className="rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-[14px] font-medium text-on-surface-variant hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </TableContainer>
  );
};

export default DoctorsTable;