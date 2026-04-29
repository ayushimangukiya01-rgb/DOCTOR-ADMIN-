import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import CardTitle from "../../common/typography/CardTitle";
import IconBox from "../../common/display/IconBox";

const ConsultationTypeCard = () => {
  return (
    <CardContainer>
      <CardTitle>Consultation Type</CardTitle>

      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
        <IconBox icon="videocam" />

        <div>
          <h4 className="text-[16px] leading-[24px] font-semibold text-slate-900">
            Video Call
          </h4>
          <p className="text-sm text-slate-500">
            Scheduled for 30 mins
          </p>
        </div>
      </div>
    </CardContainer>
  );
};

export default ConsultationTypeCard;