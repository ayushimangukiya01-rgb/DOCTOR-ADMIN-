import React from "react";
import TransactionUserCell from "../../common/display/TransactionUserCell";
import StatusBadgeOutline from "../../common/display/StatusBadgeOutline";

const TransactionRow = ({ transaction }) => {
  return (
    <tr className="hover:bg-slate-50/30 transition-colors group">
      <td className="px-8 py-5">
        <TransactionUserCell
          initials={transaction.initials}
          avatarBg={transaction.avatarBg}
          avatarText={transaction.avatarText}
          name={transaction.patient}
          subtitle={transaction.type}
        />
      </td>
      <td className="px-8 py-5 text-sm text-slate-600">
        {transaction.date}
      </td>

      

      <td className="px-8 py-5 text-sm text-slate-400 font-mono">
        {transaction.reference}
      </td>

      <td className="px-8 py-5 text-sm font-bold text-slate-900">
        {transaction.amount}
      </td>

      <td className="px-8 py-5">
        <StatusBadgeOutline
          text={transaction.status}
          className={transaction.statusClass}
        />
      </td>

      <td className="px-8 py-5 text-right">
        <button className="material-symbols-outlined text-slate-400 hover:text-slate-600">
          more_vert
        </button>
      </td>

    </tr>
  );
};

export default TransactionRow;