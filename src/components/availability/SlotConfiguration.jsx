import React, { useState } from "react";
import CardContainer from "../../common/layout/CardContainer";
import FormSelect from "../../common/ui/FormSelect";
import InfoHighlightRow from "../../common/display/InfoHighlightRow";

const SlotConfiguration = () => {
  // new: selected slot duration state
  const [slotDuration, setSlotDuration] = useState("15 mins");

  return (
    <CardContainer className="p-6">
      <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 font-['Manrope']">
        Slot Configuration
      </h2>

      <div className="space-y-4">
        <FormSelect
          label="Standard Slot Duration"
          value={slotDuration}
          // new: update selected slot duration
          onChange={(e) => setSlotDuration(e.target.value)}
          options={["15 mins", "25 mins", "30 mins", "35 mins"]}
        />

        <InfoHighlightRow
          label="Buffer between slots"
          // new: buffer value depends on selected slot
          value={slotDuration}
        />
      </div>
    </CardContainer>
  );
};

export default SlotConfiguration;