// src/Admin/components/payments/TransactionsTable.jsx
import React from "react";
import TableContainer from "../../../common/layout/TableContainer";

const transactions = [
  {
    date: "Oct 24, 2023",
    time: "09:42 AM",
    doctor: "Dr. Sarah Adams",
    department: "Cardiology",
    doctorInitial: "SA",
    patient: "Robert Fox",
    patientId: "#PAT-8821",
    amount: "$450.00",
    commission: "$67.50",
    rate: "15%",
    status: "COMPLETED",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    dotClass: "bg-tertiary",
  },
  {
    date: "Oct 24, 2023",
    time: "11:15 AM",
    doctor: "Dr. James Miller",
    department: "Neurology",
    doctorInitial: "JM",
    patient: "Leslie Alexander",
    patientId: "#PAT-9032",
    amount: "$1,200.00",
    commission: "$180.00",
    rate: "15%",
    status: "PENDING",
    statusClass: "bg-secondary-container text-on-secondary-container",
    dotClass: "bg-secondary",
  },
  {
    date: "Oct 23, 2023",
    time: "03:50 PM",
    doctor: "Dr. Emily Koh",
    department: "Dermatology",
    doctorInitial: "EK",
    patient: "Wade Warren",
    patientId: "#PAT-4412",
    amount: "$220.00",
    commission: "$33.00",
    rate: "15%",
    status: "COMPLETED",
    statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    dotClass: "bg-tertiary",
  },
  {
    date: "Oct 23, 2023",
    time: "01:20 PM",
    doctor: "Dr. Richard Wang",
    department: "General Medicine",
    doctorInitial: "RW",
    patient: "Jane Cooper",
    patientId: "#PAT-1109",
    amount: "$150.00",
    commission: "$22.50",
    rate: "15%",
    status: "FAILED",
    statusClass: "bg-error-container text-on-error-container",
    dotClass: "bg-error",
  },
];

const TransactionsTable = () => {
  return (
    <TableContainer variant="admin" className="min-w-0">
      <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-h3 text-h3 text-on-surface">Transactions</h3>
          <p className="text-body-sm text-secondary">
            Review and manage patient payments
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <button className="px-4 py-2 border border-outline-variant rounded-lg text-label-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="material-symbols-outlined text-lg">
              filter_list
            </span>
            Filter
          </button>

          <button className="px-4 py-2 bg-primary text-white rounded-lg text-label-md flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-lg">download</span>
            Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px] text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Doctor
              </th>
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Patient
              </th>
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Amount
              </th>
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Commission
              </th>
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-label-md text-secondary border-b border-gray-100 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {transactions.map((item) => (
              <tr
                key={`${item.patientId}-${item.time}`}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-body-md text-on-surface">
                    {item.date}
                  </div>
                  <div className="text-[11px] text-secondary">{item.time}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                      {item.doctorInitial}
                    </div>
                    <div>
                      <div className="font-label-md text-on-surface">
                        {item.doctor}
                      </div>
                      <div className="text-[11px] text-secondary">
                        {item.department}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-body-md text-on-surface">
                    {item.patient}
                  </div>
                  <div className="text-[11px] text-secondary">
                    {item.patientId}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-label-md text-on-surface">
                    {item.amount}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-body-md text-secondary">
                    {item.commission}{" "}
                    <span className="text-[10px] bg-secondary-container px-1 rounded">
                      {item.rate}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${item.statusClass}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.dotClass}`}
                    ></span>
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="p-1.5 hover:bg-white rounded-lg transition-all text-secondary">
                    <span className="material-symbols-outlined">
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-5 sm:p-6 border-t border-gray-100 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-body-sm text-secondary">
          Showing <span className="font-bold text-on-surface">1-10</span> of
          248 transactions
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled
            className="p-2 border border-outline-variant rounded-lg text-secondary hover:bg-gray-50 disabled:opacity-30"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-3.5 py-1.5 rounded-lg font-label-md ${
                page === 1
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-1 text-secondary">...</span>

          <button className="px-3.5 py-1.5 text-secondary hover:bg-gray-50 rounded-lg font-label-md">
            25
          </button>

          <button className="p-2 border border-outline-variant rounded-lg text-secondary hover:bg-gray-50">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </TableContainer>
  );
};

export default TransactionsTable;