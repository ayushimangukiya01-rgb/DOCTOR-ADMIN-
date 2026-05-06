import React, { useEffect } from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import PillBadge from "../../common/ui/PillBadge";
import DescriptionBox from "../../common/display/DescriptionBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointmentDetail } from "../../redux/doctor/appointmentDetail/doctorAppointmentDetailSlice";

const CurrentSymptoms = () => {
  const dispatch = useDispatch();

  const { currentSymptoms } = useSelector(
    (state) => state.doctorAppointmentDetail
  );

  useEffect(() => {
    if (!currentSymptoms?.symptoms?.length) {
      dispatch(fetchDoctorAppointmentDetail());
    }
  }, [dispatch, currentSymptoms?.symptoms?.length]);

  return (
    <CardContainer>
      <SectionHeader icon="medical_services" title="Current Symptoms" />

      <div className="flex flex-wrap gap-2 mb-4">
        {currentSymptoms.symptoms.map((item) => (
          <PillBadge key={item}>{item}</PillBadge>
        ))}
      </div>

      <DescriptionBox>{currentSymptoms.description}</DescriptionBox>
    </CardContainer>
  );
};

export default CurrentSymptoms;