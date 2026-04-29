import React from "react";

const TablePatientCell = ({ image, name, id }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={image}
        alt={name}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-200"
      />

      <div className="min-w-0">
        <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">
          {name}
        </p>
        <p className="text-xs text-slate-500 truncate">ID: {id}</p>
      </div>
    </div>
  );
};

export default TablePatientCell;