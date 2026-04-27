import React from "react";

const UpcomingAppointments = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-manrope text-[18px] sm:text-[20px] leading-[28px] font-semibold text-[#191b23]">
          Upcoming Appointments
        </h3>
        <button className="text-[#004ac6] text-sm font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase tracking-wider">
                Patient
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase tracking-wider text-right">
                View-detail
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 sm:px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSJzzES9xAM4Hrd1mpacU8TrBdZSYpEapdId7FJzamN09_lSjfS0NSA1jsl6zmfDCGEJhdNmBHiN7xE_39itbuq_WMek1pkL6fxEUbCqkX_g-8riCsIez2wEijlaIeEi3wiQN7aO2W9_KrleMlcO480lL5QDTZT-fKZMGezNcZBapgSvtcdgIDQOYlPCeq9FWwECr0L0iozLd79fOFGZU19vLwBD2WqMPdmWStKj8_F5nNLZE43U88WIV7qSMaDvox-w79fY7_wGn7"
                    alt="Sarah Jenkins"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Sarah Jenkins
                    </p>
                    <p className="text-xs text-slate-500">ID: #4421</p>
                  </div>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                09:30 AM
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                Video Call
              </td>
              <td className="px-4 sm:px-6 py-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#6bff8f]/10 text-[#006e2f]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006e2f]"></span>
                  Confirmed
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 flex justify-end items-center">
                <button className="p-2 text-slate-400 hover:text-[#004ac6] transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 sm:px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPhe6iYNodrTXst31I5QuvZapre508rl4kqa77StiabsZ4LLKupjJz_NzcKOFTF-EUneWxiQfU4W-cKJ-k82UXp1cHwA4TMJWShXQS0yjGswhvzSTToZSw1zFwBgken2a2uP4qadajFTKIqlqHIgidntyxuC6QmTTXj-fnNaBAgqwVfJD_tAstwUzlxNC2FClzWUy-FeEdn0VL2gAo-XkZAAJIvDYBkMlcPRTntcPV0FpJkhwKh15XnZ_Ik7d6zLHbQeeZBh_JxkdU"
                    alt="Robert Chen"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">Robert Chen</p>
                    <p className="text-xs text-slate-500">ID: #4425</p>
                  </div>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                10:15 AM
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                Messages
              </td>
              <td className="px-4 sm:px-6 py-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Cancelled
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 flex justify-end items-center">
                <button className="p-2 text-slate-400 hover:text-[#004ac6] transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>

            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 sm:px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                    MD
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Michael Davis
                    </p>
                    <p className="text-xs text-slate-500">ID: #4428</p>
                  </div>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                11:00 AM
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-slate-600">
                Follow-up
              </td>
              <td className="px-4 sm:px-6 py-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Pending
                </span>
              </td>
              <td className="px-4 sm:px-6 py-4 flex justify-end items-center">
                <button className="p-2 text-slate-400 hover:text-[#004ac6] transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingAppointments;