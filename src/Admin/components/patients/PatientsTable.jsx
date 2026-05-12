// src/Admin/components/patients/PatientsTable.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminPatients } from "../../../redux/admin/patients/patientSlice";

const PatientsTable = ({ filteredPatients }) => {
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state.adminPatients);

  const tablePatients = filteredPatients || patients;

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 5;

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(tablePatients.length / itemsPerPage);

  // PAGINATION SAFE PAGE
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  // PAGINATION START INDEX
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentPatients = tablePatients.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // PAGINATION PAGE NUMBERS
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    if (patients.length === 0) {
      dispatch(fetchAdminPatients());
    }
  }, [dispatch, patients.length]);

  // PAGINATION RESET WHEN FILTER DATA CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [tablePatients.length]);

  return (
    <>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[1100px] text-left border-collapse">
          <thead className="bg-slate-50">
            <tr className="border-b border-outline-variant/30">
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Patient
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Age/Gender
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Contact
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Last Visit
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
            {currentPatients.length > 0 ? (
              currentPatients.map((patient, index) => (
                <tr
                  key={`${patient.id}-${startIndex + index}`}
                  className="odd:bg-white even:bg-slate-50/40 hover:bg-blue-50/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <img
                        src={patient.avatar}
                        alt={patient.name}
                        className="w-10 h-10 rounded-full border border-slate-100 object-cover shadow-sm"
                      />
                      <div>
                        <p className="text-[14px] font-medium text-on-surface">
                          {patient.name}
                        </p>
                        <p className="text-[12px] text-on-surface-variant">
                          ID: {patient.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[13px] text-on-surface">
                      {patient.age}
                    </p>
                    <p className="text-[12px] text-on-surface-variant">
                      {patient.gender}
                    </p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[13px] text-on-surface">
                      {patient.phone}
                    </p>
                    <p className="text-[12px] text-on-surface-variant">
                      {patient.email}
                    </p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[13px] text-on-surface">
                      {patient.lastVisit}
                    </p>
                    <p className="text-[12px] text-on-surface-variant">
                      {patient.visitType}
                    </p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${patient.statusClass}`}
                    >
                      {patient.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
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
                  colSpan="6"
                  className="px-6 py-8 text-center text-[14px] text-on-surface-variant"
                >
                  No patients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="p-5 sm:p-6 border-t border-outline-variant/20 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-surface-container-lowest">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={safeCurrentPage === 1}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-outline-variant/40 bg-white rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
            Previous
          </button>

          <div className="flex items-center justify-center gap-1">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-[13px] font-medium transition-colors ${
                  safeCurrentPage === page
                    ? "bg-primary text-on-primary shadow-sm"
                    : "border border-outline-variant/40 bg-white text-on-surface-variant hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={safeCurrentPage === totalPages}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-outline-variant/40 bg-white rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            Next
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default PatientsTable;