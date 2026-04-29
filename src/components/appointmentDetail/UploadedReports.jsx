import React from "react";
import CardContainer from "../../common/layout/CardContainer";
import SectionHeader from "../../common/typography/SectionHeader";
import ReportCard from "../../common/files/ReportCard";
import UploadBox from "../../common/files/UploadBox";

const reports = [
  {
    icon: "picture_as_pdf",
    title: "Blood_Test_Sept.pdf",
    detail: "2.4 MB • Uploaded 2 days ago",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: "image",
    title: "Brain_MRI_Scan.jpg",
    detail: "5.8 MB • Uploaded 1 day ago",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

const UploadedReports = () => {
  return (
    <CardContainer>
    <SectionHeader
  icon="description"
  title="Uploaded Reports"
  actionText="Download All"
/>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reports.map((report) => (
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