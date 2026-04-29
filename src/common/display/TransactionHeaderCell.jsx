import React from "react";

const TransactionHeaderCell = ({ children }) => {
  return (
    <th className="px-8 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500">
      {children}
    </th>
  );
};

export default TransactionHeaderCell;