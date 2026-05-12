// src/Admin/pages/PatientManagement.jsx
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PatientStatsGrid from "../components/patients/PatientStatsGrid";
import PatientTableControls from "../components/patients/PatientTableControls";
import PatientsTable from "../components/patients/PatientsTable";

const PatientManagement = () => {
  const { patients } = useSelector((state) => state.adminPatients);

  // FILTER STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All Statuses");
  const [gender, setGender] = useState("Gender: All");
  const [visitType, setVisitType] = useState("All Visit Types");

  // FILTERED PATIENTS DATA
  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const searchValue = searchTerm.toLowerCase();

      const matchSearch =
        patient.name.toLowerCase().includes(searchValue) ||
        patient.id.toLowerCase().includes(searchValue) ||
        patient.phone.toLowerCase().includes(searchValue) ||
        patient.email.toLowerCase().includes(searchValue);

      const matchStatus =
        status === "All Statuses" || patient.status === status;

      const matchGender =
        gender === "Gender: All" || patient.gender === gender;

      const matchVisitType =
        visitType === "All Visit Types" || patient.visitType === visitType;

      return matchSearch && matchStatus && matchGender && matchVisitType;
    });
  }, [patients, searchTerm, status, gender, visitType]);

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant mb-2">
            <span className="font-body-sm">Dashboard</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="font-body-sm text-primary font-medium">
              Patients
            </span>
          </nav>

          <h2 className="font-h1 text-h1 text-on-surface">
            Patient Management
          </h2>

          <p className="font-body-md text-on-surface-variant">
            Manage medical records and patient information for 1,248 registered
            users.
          </p>
        </div>
      </div>

      <PatientStatsGrid />

      <div className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden">
        <PatientTableControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          status={status}
          setStatus={setStatus}
          gender={gender}
          setGender={setGender}
          visitType={visitType}
          setVisitType={setVisitType}
        />

        <PatientsTable filteredPatients={filteredPatients} />
      </div>
    </div>
  );
};

export default PatientManagement;