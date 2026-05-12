import React from "react";
import { useNavigate } from "react-router-dom";
import TablePatientCell from "../../common/display/TablePatientCell";
import StatusPill from "../../common/display/StatusBadge";

const PatientRow = ({ patient }) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/60 transition">
      
      {/* Patient */}
      <td className="px-5 py-4">
        <TablePatientCell
          image={patient.img}
          name={patient.name}
          id={patient.id}
        />
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
        <StatusPill status={patient.status} />
      </td>

      {/* Action */}
      <td className="px-5 py-4 text-center min-w-[160px]">
        <div className="flex items-center justify-center gap-2">
          
          <button
            onClick={() => navigate("/appointment-detail")}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            View Profile
          </button>

         
        </div>
      </td>

    </tr>
  );
};

export default PatientRow;