import React from "react";
import { Link, useNavigate } from "react-router-dom";

const VerificationPending = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-inter text-[#191b23] bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Effect */}
      <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-[#dbe1ff]/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="max-w-xl w-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-200/40 text-center relative z-10">
          {/* 🔥 ICON SECTION (FIXED) */}
          <div className="mb-10 flex flex-col items-center justify-center">
            {/* Big Blue Icon */}
            <span className="material-symbols-outlined text-[120px] sm:text-[150px] lg:text-[180px] text-[#004ac6] leading-none drop-shadow-[0_10px_25px_rgba(0,74,198,0.25)]">
              clinical_notes
            </span>

            {/* Small Badge */}
            <div className="mt-4 bg-[#ffdbcd] text-[#943700] p-3 rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-[28px]">
                verified_user
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ffdbcd] text-[#943700] text-[12px] font-semibold uppercase">
                <span
                  className="material-symbols-outlined text-sm mr-1"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  schedule
                </span>
                Pending Approval
              </span>
            </div>

            {/* Title */}
            <h1 className="font-manrope text-[26px] sm:text-[32px] lg:text-[34px] font-bold text-[#191b23]">
              Application Submitted
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-[#434655] max-w-md mx-auto">
              Your documents are under review. Approval may take 24–48 hours.
            </p>

            {/* Info Cards */}
            <div className="pt-6 border-t border-slate-200/40 mt-6 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#f3f3fe] rounded-lg text-left">
                <span className="material-symbols-outlined text-[#004ac6]">
                  security
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase">
                    Verification Process
                  </p>
                  <p className="text-sm text-[#434655] mt-1">
                    Our team is verifying your medical credentials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f3f3fe] rounded-lg text-left">
                <span className="material-symbols-outlined text-[#004ac6]">
                  notifications_active
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase">
                    Stay Notified
                  </p>
                  <p className="text-sm text-[#434655] mt-1 break-words">
                    We&apos;ll email you once approved.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 flex flex-col gap-3">
              <button className="w-full bg-[#004ac6] hover:bg-[#003ea8] text-white py-3 rounded-lg flex items-center justify-center gap-2">
                Refresh Status
                <span className="material-symbols-outlined">refresh</span>
              </button>

              <button
                onClick={() => navigate("/dashboard")}
                className="w-full hover:bg-[#e1e2ed] text-[#434655] py-3 rounded-lg flex items-center justify-center gap-2"
              >
                Logout
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="py-8 text-center">
        <p className="font-manrope text-lg text-[#004ac6] font-bold">
          MedPanel
        </p>

        <p className="text-sm text-[#737686] mt-1">
          Precise Healthcare Management • 2024
        </p>

        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <Link to="/privacy" className="text-xs hover:text-blue-600">
            Privacy
          </Link>
          <Link to="/support" className="text-xs hover:text-blue-600">
            Support
          </Link>
          <Link to="/status" className="text-xs hover:text-blue-600">
            Status
          </Link>
        </div>
      </footer> */}
    </div>
  );
};

export default VerificationPending;
