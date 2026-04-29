import React from "react";

const TransactionUserCell = ({
  initials,
  avatarBg,
  avatarText,
  name,
  subtitle,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${avatarBg} ${avatarText}`}
      >
        {initials}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">
          {name}
        </p>
        <p className="text-xs text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default TransactionUserCell;