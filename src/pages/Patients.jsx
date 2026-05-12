import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import PatientsHeader from "../components/patients/PatientsHeader";
import PatientStats from "../components/patients/PatientStats";
import PatientFilters from "../components/patients/PatientFilters";
import PatientsTable from "../components/patients/PatientsTable";

const Patients = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { patients } = useSelector((state) => state.doctorPatients);

  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("All Gender");
  const [consultationType, setConsultationType] = useState("All Types");

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const searchValue = searchTerm.toLowerCase();

      const matchSearch =
        patient.name.toLowerCase().includes(searchValue) ||
        patient.id.toLowerCase().includes(searchValue) ||
        patient.phone.toLowerCase().includes(searchValue) ||
        patient.email.toLowerCase().includes(searchValue);

      const matchGender =
        gender === "All Gender" || patient.gender === gender;

      const matchConsultationType =
        consultationType === "All Types" ||
        patient.status === consultationType;

      return matchSearch && matchGender && matchConsultationType;
    });
  }, [patients, searchTerm, gender, consultationType]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1">
          <div className="w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
            <PatientsHeader />
            <PatientStats />

            <PatientFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              gender={gender}
              setGender={setGender}
              consultationType={consultationType}
              setConsultationType={setConsultationType}
            />

            <PatientsTable filteredPatients={filteredPatients} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Patients;