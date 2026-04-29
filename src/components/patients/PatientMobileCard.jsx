import React from "react";
import InfoItem from "../../common/display/InfoItem";
import StatusPill from "../../common/display/StatusBadge";

const PatientMobileCard = ({ patient }) => {
  return (
    <div className="p-4">
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        
        {/* Top */}
        <div className="flex items-start gap-3">
          
          {/* Image */}
          <img
            src={patient.img}
            alt={patient.name}
            className="w-14 h-14 rounded-2xl object-cover shrink-0"
          />

          {/* Content */}
          <div className="flex-1 min-w-0">
            
            {/* Name + Status */}
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-bold text-slate-900 leading-tight break-words">
                {patient.name}
              </h4>

              {/* ✅ Status FIXED POSITION */}
              <StatusPill status={patient.status} variant="patient" />
            </div>

            {/* ID */}
           <p className="text-xs text-slate-500 mt-2">
  {patient.id}
</p>

          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <InfoItem
            label="Age / Gender"
            value={`${patient.age} / ${patient.gender}`}
          />

          <InfoItem
            label="Last Visit"
            value={patient.lastVisit}
          />

          <InfoItem
            label="Condition"
            value={patient.condition}
          />

          <InfoItem
            label="Contact"
            value={patient.phone}
          />
        </div>

        {/* Button */}
        <button className="mt-4 w-full rounded-xl bg-[#004ac6] py-3 text-sm font-bold text-white hover:brightness-110 transition">
          View Full Profile
        </button>

      </div>
    </div>
  );
};

export default PatientMobileCard;