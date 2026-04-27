import React from "react";

const DashboardOverview = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">

        {/* Hero */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-5">
          
          <div>
            <h1 className="font-manrope text-[24px] sm:text-[30px] lg:text-[36px] leading-tight font-bold text-[#191b23]">
              Welcome back, Dr. Smith
            </h1>

            <p className="text-[14px] sm:text-[16px] leading-[22px] text-[#434655] mt-1">
              You have 12 appointments scheduled for today.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
            
            <button className="flex items-center justify-center gap-2 bg-white border border-[#c3c6d7] px-4 py-2.5 rounded-lg text-[#004ac6] text-[14px] sm:text-[16px] font-medium hover:bg-slate-50 transition w-full sm:w-auto">
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              Add Availability
            </button>

            <button className="flex items-center justify-center gap-2 bg-[#004ac6] text-white px-5 py-2.5 rounded-lg text-[14px] sm:text-[16px] font-medium hover:bg-blue-700 transition w-full sm:w-auto">
              <span className="material-symbols-outlined text-[18px]">
                videocam
              </span>
              Start Consultation
            </button>

          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">

          {/* Card 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow border border-slate-50 hover:border-blue-200 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>

              <span className="text-xs text-[#006e2f] bg-[#6bff8f]/10 px-2 py-1 rounded">
                +12%
              </span>
            </div>

            <p className="text-xs uppercase text-[#434655] font-semibold">
              Total Appointments
            </p>

            <p className="font-manrope text-[22px] sm:text-[24px] font-semibold text-[#191b23] mt-1">
              1,284
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow border border-slate-50 hover:border-blue-200 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <span className="material-symbols-outlined">group</span>
              </div>

              <span className="text-xs bg-[#e7e7f3] px-2 py-1 rounded">
                Daily
              </span>
            </div>

            <p className="text-xs uppercase text-[#434655] font-semibold">
              Today’s Patients
            </p>

            <p className="font-manrope text-[22px] sm:text-[24px] font-semibold mt-1">
              12
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow border border-slate-50 hover:border-blue-200 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <span className="material-symbols-outlined">
                  pending_actions
                </span>
              </div>

              <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                Urgent: 2
              </span>
            </div>

            <p className="text-xs uppercase text-[#434655] font-semibold">
              Pending Consults
            </p>

            <p className="font-manrope text-[22px] sm:text-[24px] font-semibold mt-1">
              08
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow border border-slate-50 hover:border-blue-200 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
              </div>

              <span className="text-xs text-[#006e2f] bg-[#6bff8f]/10 px-2 py-1 rounded">
                This Month
              </span>
            </div>

            <p className="text-xs uppercase text-[#434655] font-semibold">
              Earnings
            </p>

            <p className="font-manrope text-[22px] sm:text-[24px] font-semibold mt-1">
              $14.2k
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;