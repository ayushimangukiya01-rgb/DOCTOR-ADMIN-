import React, { useEffect } from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import TimelineList from "../../common/display/TimelineList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointmentDetail } from "../../redux/doctor/appointmentDetail/doctorAppointmentDetailSlice";

const MedicalHistory = () => {
  const dispatch = useDispatch();

  const { medicalHistory } = useSelector(
    (state) => state.doctorAppointmentDetail
  );

  useEffect(() => {
    if (medicalHistory.length === 0) {
      dispatch(fetchDoctorAppointmentDetail());
    }
  }, [dispatch, medicalHistory.length]);

  return (
    <CardContainer>
      <SectionHeader icon="history" title="Medical History" />
      <TimelineList items={medicalHistory} />
    </CardContainer>
  );
};

export default MedicalHistory;