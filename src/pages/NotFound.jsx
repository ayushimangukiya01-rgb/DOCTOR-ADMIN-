import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-md w-full text-center">
        <h1 className="text-[56px] font-bold text-[#004ac6]">404</h1>

        <h2 className="text-[24px] font-semibold text-slate-900 mt-2">
          Page Not Found
        </h2>

        <p className="text-slate-500 text-[14px] mt-2">
          The page you are looking for does not exist.
        </p>

        {/* <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 px-5 py-2.5 rounded-lg bg-[#004ac6] text-white font-semibold hover:bg-[#003ea8] transition"
        >
          Back to Dashboard
        </button> */}
      </div>
    </div>
  );
};

export default NotFound;