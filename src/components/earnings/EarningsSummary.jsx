import React from "react";

const EarningsSummary = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Earnings */}
      <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-6xl">
            account_balance_wallet
          </span>
        </div>

        <p className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase text-slate-500 mb-2">
          Total Earnings
        </p>

        <h2 className="font-manrope text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.02em] font-bold text-slate-900">
          $12,840.00
        </h2>

        <div className="mt-4 flex items-center gap-2 text-[#006e2f] text-sm font-medium">
          <span className="material-symbols-outlined text-sm">
            trending_up
          </span>
          <span>+12.5% from last month</span>
        </div>
      </div>

      {/* Pending Payouts */}
      <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500 mb-2">
          Pending Payouts
        </p>

        <h2 className="font-manrope text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.02em] font-bold text-slate-900">
          $2,450.50
        </h2>

        <div className="mt-4 flex items-center gap-2 text-[#943700] text-sm font-medium">
          <span className="material-symbols-outlined text-sm">schedule</span>
          <span>Expected by Oct 15</span>
        </div>
      </div>

      {/* Completed Consultations */}
      <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100">
        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-slate-500 mb-2">
          Completed Consultations
        </p>

        <h2 className="font-manrope text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.02em] font-bold text-slate-900">
          142
        </h2>

        <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm font-medium">
          <span className="material-symbols-outlined text-sm">
            check_circle
          </span>
          <span>Avg. $90.40 per visit</span>
        </div>
      </div>
    </section>
  );
};

export default EarningsSummary;