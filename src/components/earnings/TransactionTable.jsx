import React from "react";
import TransactionRow from "./TransactionRow";
import TableContainer from "../../common/layout/TableContainer";
import TransactionHeaderCell from "../../common/display/TransactionHeaderCell";
import TableIconPager from "../../common/ui/TableIconPager";

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
    <TableContainer>
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
    <TransactionHeaderCell>Patient</TransactionHeaderCell>

    <TransactionHeaderCell>Date</TransactionHeaderCell>
    <TransactionHeaderCell>Reference ID</TransactionHeaderCell>
    <TransactionHeaderCell>Amount</TransactionHeaderCell>
    <TransactionHeaderCell>Status</TransactionHeaderCell>
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

        <TableIconPager />
      </div>
    </TableContainer>
  );
};

export default TransactionTable;