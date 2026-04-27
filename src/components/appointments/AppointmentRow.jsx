import React from "react";
import { Link } from "react-router-dom";

const AppointmentRow = ({ appointment }) => {
  return (
    <tr className="hover:bg-slate-50 transition-all duration-200">
      
      {/* Patient */}
      <td className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          
          {/* Avatar */}
          <img
            src={appointment.image}
            alt={appointment.name}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-200"
          />

          {/* Info */}
          <div className="min-w-0">
            <p className="font-semibold text-slate-900 text-sm sm:text-base truncate">
              {appointment.name}
            </p>
            <p className="text-xs text-slate-500 truncate">
              ID: {appointment.id}
            </p>
          </div>
        </div>
      </td>

      {/* Date & Time */}
      <td className="px-4 sm:px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm text-slate-800 font-medium">
            {appointment.date}
          </span>
          <span className="text-xs text-blue-600 font-medium">
            {appointment.time}
          </span>
        </div>
      </td>

      {/* Type */}
      <td className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          
          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${appointment.typeBg} ${appointment.typeColor}`}
          >
            <span className="material-symbols-outlined text-base">
              {appointment.icon}
            </span>
          </div>

          <span className="text-sm text-slate-700 whitespace-nowrap">
            {appointment.type}
          </span>
        </div>
      </td>


    {/* status */}

    <td className="px-4 sm:px-6 py-4">
  <span
    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
      appointment.status === "Confirmed"
        ? "bg-green-50 text-green-600"
        : appointment.status === "Cancelled"
        ? "bg-red-50 text-red-500"
        : "bg-blue-50 text-blue-600"
    }`}
  >
    <span className="w-2 h-2 rounded-full bg-current"></span>
    {appointment.status}
  </span>
</td>

      {/* Action */}
      <td className="px-4 sm:px-6 py-4 text-right">
        <Link to="/appointment-detail"
          to="/appointment-detail"
          className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-[#004ac6] border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default AppointmentRow;