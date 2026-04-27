import React from "react";

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
    <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#004ac6]">
            description
          </span>
          <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            Uploaded Reports
          </h3>
        </div>

        <button className="text-[#004ac6] text-sm font-medium hover:underline text-left sm:text-right">
          Download All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reports.map((report) => (
          <div
            key={report.title}
            className="group relative p-4 border border-slate-100 rounded-xl hover:border-[#004ac6] transition-all bg-slate-50/50"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg shrink-0 ${report.iconBg} ${report.iconColor}`}
              >
                <span className="material-symbols-outlined">
                  {report.icon}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[16px] leading-[24px] font-semibold text-slate-900 truncate">
                  {report.title}
                </p>
                <p className="text-slate-400 text-xs">{report.detail}</p>
              </div>

              <button className="material-symbols-outlined text-slate-400 hover:text-[#004ac6]">
                visibility
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-8 text-center hover:border-[#004ac6] transition-colors cursor-pointer bg-slate-50/20">
          <span className="material-symbols-outlined text-slate-300 text-4xl mb-2">
            cloud_upload
          </span>
          <p className="text-slate-500 text-sm">
            Click to upload or drag and drop additional medical files
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadedReports;