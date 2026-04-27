import React from "react";
import { useNavigate } from "react-router-dom";

const statusClasses = {
  Stable: "bg-green-50 text-green-600",
  "Follow-up": "bg-orange-50 text-orange-500",
  Critical: "bg-red-50 text-red-500",
};

const PatientRow = ({ patient }) => {
    const navigate = useNavigate()

  return (
    <tr className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/60 transition">
      
      {/* Patient */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src={patient.img}
            alt={patient.name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              {patient.name}
            </h4>
            <p className="text-xs text-slate-500">{patient.id}</p>
          </div>
        </div>
      </td>

      {/* Age */}
      <td className="px-5 py-4 text-sm text-slate-600">
        {patient.age} / {patient.gender}
      </td>

      {/* Contact */}
      <td className="px-5 py-4">
        <p className="text-sm text-slate-700">{patient.phone}</p>
        <p className="text-xs text-slate-500 mt-0.5">
          {patient.email}
        </p>
      </td>

      {/* Last Visit */}
      <td className="px-5 py-4 text-sm text-slate-600">
        {patient.lastVisit}
      </td>

      {/* Condition */}
      <td className="px-5 py-4 text-sm text-slate-600">
        {patient.condition}
      </td>

      {/* Status */}
      <td className="px-5 py-4 min-w-[110px]">
        <span
          className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1 rounded-md text-xs font-medium ${
            statusClasses[patient.status]
          }`}
        >
          {patient.status}
        </span>
      </td>

      {/* Action (FIXED) */}
      <td className="px-5 py-4 text-center min-w-[160px]">
        <div className="flex items-center justify-center gap-2">
          
          <button className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"onClick={()=>navigate('/appointment-detail')}>
            View Profile
          </button>

          <button className="text-slate-400 hover:text-slate-700">
            <span className="material-symbols-outlined text-[20px]">
              more_vert
            </span>
          </button>

        </div>
      </td>

    </tr>
  );
};

export default PatientRow;