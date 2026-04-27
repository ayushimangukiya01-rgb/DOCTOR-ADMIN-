import React from "react";

const PatientSummaryCard = () => {
  return (
    <section className="bg-white rounded-xl border border-slate-100 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
      <div className="relative mx-auto lg:mx-0 shrink-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZZ-LuZYyUvQt-cgx7ak97jlbestPK88TmXCp4QaxFRttu9Dh_VuZEgBf3ZHQ726hklWmbKkdsvoe7bhZuhQXjKgk5lkq0KQfhgq6ZVUrWRPv2PyqQhIzGXE9I91Ysc4QyKdiJDtLqLBOipkwYwueyV2_W-j9LHOPwNkgU-vsWUpV6pKQxccidz_qEKe7_zPIiaTiOhesDSLwk83vSU1jRHbaje7shwUm3ISi2-UTXf5lQUNLnnBrPWgSqMRFYhf0ne7-CPIAOv0tu"
          alt="Patient"
          className="w-20 h-20 rounded-full object-cover grayscale-[0.2]"
        />

        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#006e2f] rounded-full border-4 border-white flex items-center justify-center">
          <span className="text-[10px] text-white font-bold">BP</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 text-center sm:text-left">
        <div>
          <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 uppercase mb-1">
            Patient Name
          </p>
          <p className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            Eleanor Vance
          </p>
          <p className="text-sm text-slate-500">64 Yrs, Female</p>
        </div>

        <div>
          <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-400 uppercase mb-1">
            Patient ID
          </p>
          <p className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            #MP-90210
          </p>
          <p className="text-sm text-slate-500 italic">
            Last visit: 12 Oct 2023
          </p>
        </div>

        <div className="sm:col-span-2 lg:col-span-2">
          <div className="bg-[#f3f3fe] rounded-lg p-4">
            <p className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-slate-500 uppercase mb-2">
              Vital Signs
            </p>

            <div className="flex flex-wrap gap-4">
              <div>
                <span className="text-xs text-slate-400">BP</span>{" "}
                <span className="text-sm font-semibold">120/80</span>
              </div>
              <div>
                <span className="text-xs text-slate-400">TEMP</span>{" "}
                <span className="text-sm font-semibold">98.6 F</span>
              </div>
              <div>
                <span className="text-xs text-slate-400">SPO2</span>{" "}
                <span className="text-sm font-semibold">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSummaryCard;