import React from "react";
import PatientRow from "./PatientRow";
import PatientMobileCard from "./PatientMobileCard";
import PatientTableHeaderCell from "../../common/display/PatientTableHeaderCell";
import PaginationButton from "../../common/ui/PaginationButton";

const patients = [
  {
    id: "P-1001",
    name: "Sarah Johnson",
    age: 28,
    gender: "Female",
    phone: "(555) 123-4567",
    email: "sarah.j@email.com",
    lastVisit: "27 Apr 2024",
    condition: "Hypertension",
    status: "Follow-up",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "P-1002",
    name: "Michael Brown",
    age: 45,
    gender: "Male",
    phone: "(555) 987-6543",
    email: "michael.b@email.com",
    lastVisit: "25 Apr 2024",
    condition: "Diabetes Type 2",
    status: "Stable",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "P-1003",
    name: "Emily Davis",
    age: 32,
    gender: "Female",
    phone: "(555) 456-7890",
    email: "emily.d@email.com",
    lastVisit: "23 Apr 2024",
    condition: "Asthma",
    status: "Stable",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "P-1004",
    name: "Linda Wilson",
    age: 60,
    gender: "Female",
    phone: "(555) 321-0987",
    email: "linda.w@email.com",
    lastVisit: "21 Apr 2024",
    condition: "Arthritis",
    status: "Follow-up",
    img: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    id: "P-1005",
    name: "David Lee",
    age: 50,
    gender: "Male",
    phone: "(555) 654-3210",
    email: "david.l@email.com",
    lastVisit: "20 Apr 2024",
    condition: "Heart Disease",
    status: "Critical",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const tableHeaders = [
  "Patient",
  "Age / Gender",
  "Contact",
  "Last Visit",
  "Condition",
  "Status",
  "Action",
];

const PatientsTable = () => {
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