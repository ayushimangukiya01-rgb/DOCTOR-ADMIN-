import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import FormSelect from "../../common/ui/FormSelect";
import InfoHighlightRow from "../../common/display/InfoHighlightRow";

const SlotConfiguration = () => {
  return (
    <CardContainer className="p-6">
      <h2 className="text-[20px] leading-[28px] font-semibold text-slate-900 mb-4 font-['Manrope']">
        Slot Configuration
      </h2>

      <div className="space-y-4">
        <FormSelect
          label="Standard Slot Duration"
          options={["15 mins", "30 mins", "45 mins", "60 mins"]}
        />

        <InfoHighlightRow
          label="Buffer between slots"
          value="10 mins"
        />
      </div>
    </CardContainer>
  );
};

export default SlotConfiguration;