import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { commonStyles } from "../../common/styles/commonStyles";
import SectionLabel from "../../common/typography/SectionLabel";
import IconTextRow from "../../common/display/IconTextRow";
import ActionButton from "../../common/ui/ActionButton";

const AppointmentHero = () => {
  const navigate = useNavigate();

  // RESCHEDULE STATE
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      
      {/* LEFT */}
      <div>
        <SectionLabel>Upcoming Appointment</SectionLabel>

        <h2 className="font-manrope text-[24px] sm:text-[30px] lg:text-[36px] leading-tight tracking-[-0.02em] font-bold text-[#0f172a]">
          Oct 24, 2023 • 10:30 AM
        </h2>

        <div className="flex flex-wrap items-center gap-3 mt-3">
          
          {/* Confirm Badge */}
          <div className={commonStyles.successBadge}>
            <span className={commonStyles.successDot}></span>
            Confirmed
          </div>

          <IconTextRow icon="videocam" text="Video Consultation" />
        </div>

        {/* SELECTED DATE */}
        {selectedDate && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-100 px-4 py-2">
            <span className="material-symbols-outlined text-primary text-[18px]">
              event
            </span>

            <p className="text-[14px] font-medium text-primary">
              Rescheduled to: {selectedDate}
            </p>
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-3 w-full md:w-auto">
        
        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          
          <ActionButton
            variant="outline"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <span className="material-symbols-outlined">
              event_repeat
            </span>

            Reschedule
          </ActionButton>

          <ActionButton variant="danger">
            <span className="material-symbols-outlined">cancel</span>
            Cancel
          </ActionButton>

          <ActionButton
            variant="primary"
            onClick={() => navigate("/videoconsultation")}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              play_circle
            </span>

            Start Consultation
          </ActionButton>
        </div>

        {/* CALENDAR */}
        {showCalendar && (
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full sm:w-[320px]">
            <label className="block text-[14px] font-semibold text-slate-700 mb-2">
              Select New Appointment Date
            </label>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[14px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentHero;