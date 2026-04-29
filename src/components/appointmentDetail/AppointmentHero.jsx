import React from "react";
import { useNavigate } from "react-router-dom";
import SectionLabel from "../../common/typography/SectionLabel";
import StatusBadge from "../../common/display/StatusBadge";
import IconTextRow from "../../common/display/IconTextRow";
import ActionButton from "../../common/ui/ActionButton";

const AppointmentHero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div>
        <SectionLabel>Upcoming Appointment</SectionLabel>

        <h2 className="font-manrope text-[24px] sm:text-[30px] lg:text-[36px] leading-tight tracking-[-0.02em] font-bold text-slate-900">
          Oct 24, 2023 • 10:30 AM
        </h2>

        <div className="flex flex-wrap items-center gap-3 mt-3">
          <StatusBadge label="Confirmed" />

          <IconTextRow icon="videocam" text="Video Consultation" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <ActionButton variant="outline">
          <span className="material-symbols-outlined">event_repeat</span>
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
    </section>
  );
};

export default AppointmentHero;