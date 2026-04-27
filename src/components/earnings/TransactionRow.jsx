import React from "react";

const TransactionRow = ({ transaction }) => {
  return (
    <tr className="hover:bg-slate-50/30 transition-colors group">
      <td className="px-8 py-5 text-sm text-slate-600">
        {transaction.date}
      </td>

      <td className="px-8 py-5">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${transaction.avatarBg} ${transaction.avatarText}`}
          >
            {transaction.initials}
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {transaction.patient}
            </p>
            <p className="text-xs text-slate-500">
              {transaction.type}
            </p>
          </div>
        </div>
      </td>

      <td className="px-8 py-5 text-sm text-slate-400 font-mono">
        {transaction.reference}
      </td>

      <td className="px-8 py-5 text-sm font-bold text-slate-900">
        {transaction.amount}
      </td>

      <td className="px-8 py-5">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold border ${transaction.statusClass}`}
        >
          {transaction.status}
        </span>
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