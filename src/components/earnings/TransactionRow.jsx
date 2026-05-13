import React from "react";
import TransactionUserCell from "../../common/display/TransactionUserCell";
import StatusBadgeOutline from "../../common/display/StatusBadgeOutline";

const TransactionRow = ({ transaction }) => {
  return (
    <tr className="group hover:bg-blue-50/30 transition-colors">
      <td className="px-8 py-5">
        <TransactionUserCell
          initials={transaction.initials}
          avatarBg={transaction.avatarBg}
          avatarText={transaction.avatarText}
          name={transaction.patient}
          subtitle={transaction.type}
        />
      </td>

      <td className="px-8 py-5 text-sm font-medium text-slate-600 whitespace-nowrap">
        {transaction.date}
      </td>

      <td className="px-8 py-5 text-sm text-slate-600 font-medium font-mono whitespace-nowrap">
        {transaction.reference}
      </td>

      <td className="px-8 py-5 text-sm font-bold text-slate-900 whitespace-nowrap">
        {transaction.amount}
      </td>

      <td className="px-8 py-5 whitespace-nowrap">
        <StatusBadgeOutline
          text={transaction.status}
          className={transaction.statusClass}
        />
      </td>

      <td className="px-8 py-5 text-right"> 
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition">
          <span className="material-symbols-outlined text-[20px]">
            more_vert
          </span>
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;