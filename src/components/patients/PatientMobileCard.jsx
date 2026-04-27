import React from "react";

const statusClasses = {
  Stable: "bg-green-50 text-green-600 border-green-100",
  "Follow-up": "bg-orange-50 text-orange-500 border-orange-100",
  Critical: "bg-red-50 text-red-500 border-red-100",
};

const PatientMobileCard = ({ patient }) => {
  return (
    <div className="p-4">
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <img
            src={patient.img}
            alt={patient.name}
            className="w-14 h-14 rounded-2xl object-cover"
          />

          <div className="flex-1 min-w-0">
            <h4 className="text-base font-bold text-slate-900 leading-tight">
              {patient.name}
            </h4>
            <p className="text-xs text-slate-500 mt-1">{patient.id}</p>
          </div>

          <span
            className={`shrink-0 inline-flex items-center whitespace-nowrap px-2.5 py-1 rounded-full border text-xs font-semibold ${
              statusClasses[patient.status]
            }`}
          >
            {patient.status}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Info label="Age / Gender" value={`${patient.age} / ${patient.gender}`} />
          <Info label="Last Visit" value={patient.lastVisit} />
          <Info label="Condition" value={patient.condition} />
          <Info label="Contact" value={patient.phone} />
        </div>

        <button className="mt-4 w-full rounded-xl bg-[#004ac6] py-3 text-sm font-bold text-white hover:brightness-110 transition">
          View Full Profile
        </button>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800 leading-snug">
        {value}
      </p>
    </div>
  );
};

export default PatientMobileCard;