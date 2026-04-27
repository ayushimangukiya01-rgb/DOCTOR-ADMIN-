import React from "react";
import TransactionRow from "./TransactionRow";

const transactions = [
  {
    date: "Oct 12, 2023",
    patient: "Jane Doe",
    type: "Tele-consultation",
    reference: "TXN-90210-A",
    amount: "$120.00",
    status: "PAID",
    statusClass: "bg-[#006e2f]/10 text-[#006e2f] border-[#006e2f]/20",
    initials: "JD",
    avatarBg: "bg-blue-50",
    avatarText: "text-blue-600",
  },
  {
    date: "Oct 11, 2023",
    patient: "Mark Smith",
    type: "In-person Followup",
    reference: "TXN-88432-C",
    amount: "$85.00",
    status: "PAID",
    statusClass: "bg-[#006e2f]/10 text-[#006e2f] border-[#006e2f]/20",
    initials: "MS",
    avatarBg: "bg-slate-100",
    avatarText: "text-slate-600",
  },
  {
    date: "Oct 10, 2023",
    patient: "Linda White",
    type: "Initial Assessment",
    reference: "TXN-77211-B",
    amount: "$200.00",
    status: "PROCESSING",
    statusClass: "bg-blue-50 text-blue-600 border-blue-100",
    initials: "LW",
    avatarBg: "bg-blue-50",
    avatarText: "text-blue-600",
  },
  {
    date: "Oct 09, 2023",
    patient: "Robert King",
    type: "Lab Results Review",
    reference: "TXN-66410-F",
    amount: "$45.00",
    status: "PAID",
    statusClass: "bg-[#006e2f]/10 text-[#006e2f] border-[#006e2f]/20",
    initials: "RK",
    avatarBg: "bg-slate-100",
    avatarText: "text-slate-600",
  },
];

const TransactionTable = () => {
  return (
    <section className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-slate-50">
        <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
          Recent Transactions
        </h3>

        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          <span className="material-symbols-outlined text-sm">download</span>
          Export Statement
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500">
                Date
              </th>
              <th className="px-8 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500">
                Patient
              </th>
              <th className="px-8 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500">
                Reference ID
              </th>
              <th className="px-8 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500">
                Amount
              </th>
              <th className="px-8 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500">
                Status
              </th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.reference}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-4 border-t border-slate-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-slate-50/30">
        <p className="text-xs text-slate-500">
          Showing 1-10 of 142 transactions
        </p>

        <div className="flex gap-2">
          <button className="p-1 rounded border border-slate-200 text-slate-400 hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>

          <button className="p-1 rounded border border-slate-200 text-slate-400 hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransactionTable;