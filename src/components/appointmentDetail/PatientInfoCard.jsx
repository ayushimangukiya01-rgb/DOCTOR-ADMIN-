import React, { useEffect } from "react";
import CardContainer from "../../common/layout/CardContainer";
import ProfileHeader from "../../common/display/ProfileHeader";
import InfoItem from "../../common/display/InfoItem";
import FullWidthButton from "../../common/ui/FullWidthButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointmentDetail } from "../../redux/doctor/appointmentDetail/doctorAppointmentDetailSlice";

const PatientInfoCard = () => {
  const dispatch = useDispatch();

  const { patientInfo } = useSelector(
    (state) => state.doctorAppointmentDetail
  );

  useEffect(() => {
    if (!patientInfo?.details?.length) {
      dispatch(fetchDoctorAppointmentDetail());
    }
  }, [dispatch, patientInfo?.details?.length]);

  return (
    <CardContainer size="left">
      <ProfileHeader
        image={patientInfo.image}
        name={patientInfo.name}
        subtitle={patientInfo.subtitle}
      />

      <div className="py-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
         {patientInfo.details?.map((item) => (
            <InfoItem
              key={item.label}
              label={item.label}
              value={item.value}
              small
            />
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <FullWidthButton icon="contact_page">View Full Profile</FullWidthButton>
      </div>
    </CardContainer>
  );
};

export default PatientInfoCard;