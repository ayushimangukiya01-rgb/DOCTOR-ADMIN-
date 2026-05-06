import React, { useEffect } from "react";
import PatientRow from "./PatientRow";
import PatientMobileCard from "./PatientMobileCard";
import PatientTableHeaderCell from "../../common/display/PatientTableHeaderCell";
import PaginationButton from "../../common/ui/PaginationButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorPatients } from "../../redux/doctor/patients/doctorPatientsSlice";

const PatientsTable = () => {
  const dispatch = useDispatch();

  const { patients, tableHeaders } = useSelector(
    (state) => state.doctorPatients
  );

  useEffect(() => {
    if (patients.length === 0) {
      dispatch(fetchDoctorPatients());
    }
  }, [dispatch, patients.length]);

  return (
    <div className="bg-white rounded-b-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] overflow-hidden">
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-white">
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

          <tbody>
            {patients.map((patient) => (
              <PatientRow key={patient.id} patient={patient} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden divide-y divide-slate-100">
        {patients.map((patient) => (
          <PatientMobileCard key={patient.id} patient={patient} />
        ))}
      </div>

      <div className="hidden lg:flex items-center justify-between px-5 py-4 border-t border-slate-100">
        <p className="text-sm text-slate-500">
          Showing 1 to 5 of 1,248 patients
        </p>

        <div className="flex items-center gap-2">
          <PaginationButton icon>‹</PaginationButton>
          <PaginationButton active>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <PaginationButton>›</PaginationButton>
        </div>
      </div>
    </div>
  );
};

export default PatientsTable;