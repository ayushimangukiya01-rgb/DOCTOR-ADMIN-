import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import PatientSummaryCard from "../components/prescription/PatientSummaryCard";
import DiagnosisForm from "../components/prescription/DiagnosisForm";
import MedicationPlan from "../components/prescription/MedicationPlan";
import PrescriptionExtraDetails from "../components/prescription/PrescriptionExtraDetails";
import PrescriptionNotesActions from "../components/prescription/PrescriptionNotesActions";

const CreatePrescription = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1">
          <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
  <PatientSummaryCard/>
  <DiagnosisForm/>
  <MedicationPlan/>
  <PrescriptionExtraDetails/>
  <PrescriptionNotesActions/>

  <footer className="pt-8 pb-4 text-center border-t border-slate-100">
    <p className="text-xs font-semibold tracking-[0.05em] uppercase text-slate-400">
      © 2023 MedPanel Systems • HIPAA Compliant Interface
    </p>
  </footer>
</div>
        </main>
      </div>
    </div>
  );
};

export default CreatePrescription;