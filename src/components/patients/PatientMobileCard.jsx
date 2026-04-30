import React from "react";
import StatusPill from "../../common/display/StatusBadge";

const MobileInfo = ({ label, value }) => {
  return (
    <div className="min-w-0">
      <p className="text-[11px] leading-4 tracking-[0.08em] font-bold text-slate-400 uppercase">
        {label}
      </p>

      <p className="mt-1 text-[15px] leading-5 font-semibold text-slate-900 break-words">
        {value}
      </p>
    </div>
  );
};

const PatientMobileCard = ({ patient }) => {
  return (
    <div className="p-4">
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      {/* Top */}
<div className="flex items-start gap-3">
  <img
    src={patient.img}
    alt={patient.name}
    className="w-14 h-14 rounded-2xl object-cover shrink-0"
  />

  <div className="flex-1 min-w-0">
    <h4 className="text-[16px] leading-5 font-bold text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis">
      {patient.name}
    </h4>

    <p className="text-xs text-slate-500 mt-1">{patient.id}</p>

    <div className="mt-2 w-fit">
      <StatusPill status={patient.status} variant="patient" />
    </div>
  </div>
</div>

        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
          <MobileInfo
            label="Age / Gender"
            value={`${patient.age} / ${patient.gender}`}
          />

          <MobileInfo label="Last Visit" value={patient.lastVisit} />
          <MobileInfo label="Condition" value={patient.condition} />
          <MobileInfo label="Contact" value={patient.phone} />
        </div>

        <button className="mt-5 w-full rounded-xl bg-[#004ac6] py-3 text-sm font-bold text-white hover:brightness-110 transition">
          View Full Profile
        </button>
      </div>
    </div>
  );
};

export default PatientMobileCard;