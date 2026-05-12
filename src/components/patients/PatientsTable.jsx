import React, { useEffect, useState } from "react";
import PatientRow from "./PatientRow";
import PatientMobileCard from "./PatientMobileCard";
import PatientTableHeaderCell from "../../common/display/PatientTableHeaderCell";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorPatients } from "../../redux/doctor/patients/doctorPatientsSlice";

const PatientsTable = ({ filteredPatients }) => {
  const dispatch = useDispatch();

  const { patients, tableHeaders } = useSelector(
    (state) => state.doctorPatients
  );

  const tablePatients = filteredPatients || patients;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(tablePatients.length / itemsPerPage);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const currentPatients = tablePatients.slice(startIndex, startIndex + itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    if (patients.length === 0) {
      dispatch(fetchDoctorPatients());
    }
  }, [dispatch, patients.length]);

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-[0px_6px_18px_rgba(15,23,42,0.06)] overflow-hidden">
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              {tableHeaders.map((head) => (
                <PatientTableHeaderCell
                  key={head}
                  align={head === "Action" ? "center" : "left"}
                >
                  {head}
                </PatientTableHeaderCell>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {currentPatients.map((patient) => (
              <PatientRow key={patient.id} patient={patient} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden divide-y divide-slate-100">
        {currentPatients.map((patient) => (
          <PatientMobileCard key={patient.id} patient={patient} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-slate-100 bg-white">
          <button
            type="button"
            disabled={safeCurrentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_left
            </span>
          </button>

          {pageNumbers.map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-[14px] font-semibold transition ${
                safeCurrentPage === page
                  ? "bg-[#004ac6] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={safeCurrentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-[18px]">
              chevron_right
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientsTable;