import React from "react";

const UploadBox = ({ text }) => {
  return (
    <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 sm:p-8 text-center hover:border-[#004ac6] transition-colors cursor-pointer bg-slate-50/20">
      <span className="material-symbols-outlined text-slate-300 text-4xl mb-2">
        cloud_upload
      </span>

      <p className="text-slate-500 text-sm">{text}</p>
    </div>
  );
};

export default UploadBox;