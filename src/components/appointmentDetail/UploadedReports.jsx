import React, { useEffect } from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import ReportCard from "../../common/files/ReportCard";
import UploadBox from "../../common/files/UploadBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointmentDetail } from "../../redux/doctor/appointmentDetail/doctorAppointmentDetailSlice";

const UploadedReports = () => {
  const dispatch = useDispatch();

  const { uploadedReports } = useSelector(
    (state) => state.doctorAppointmentDetail
  );

  useEffect(() => {
    if (uploadedReports.length === 0) {
      dispatch(fetchDoctorAppointmentDetail());
    }
  }, [dispatch, uploadedReports.length]);

  return (
    <CardContainer>
      <SectionHeader
        icon="description"
        title="Uploaded Reports"
        actionText="Download All"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {uploadedReports.map((report) => (
          <ReportCard key={report.title} report={report} />
        ))}
      </div>

      <div className="mt-6">
        <UploadBox text="Click to upload or drag and drop additional medical files" />
      </div>
    </CardContainer>
  );
};

export default UploadedReports;