import React from "react";

const UpcomingAppointmentRow = ({ item }) => {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      
      {/* Patient */}
      <td className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}

          <div>
            <p className="font-semibold text-slate-900">
              {item.name}
            </p>
            <p className="text-xs text-slate-500">
              ID: {item.id}
            </p>
          </div>
        </div>
      </td>

      {/* Time */}
      <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
        {item.time}
      </td>

      {/* Type */}
      <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
        {item.type}
      </td>

      {/* Status */}
      <td className="px-4 sm:px-6 py-4">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
            item.status === "Confirmed"
              ? "bg-[#6bff8f]/10 text-[#006e2f]"
              : item.status === "Cancelled"
              ? "bg-amber-100 text-amber-700"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          {item.status}
        </span>
      </td>

      {/* Action */}
      <td className="px-4 sm:px-6 py-4 flex justify-end items-center">
        <button className="p-2 text-slate-400 hover:text-[#004ac6] transition-colors">
          <span className="material-symbols-outlined">
            more_vert
          </span>
        </button>
      </td>
    </tr>
  );
};

export default UpcomingAppointmentRow;