import React from "react";
import UpcomingAppointmentRow from "../../common/display/UpcomingAppointmentRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDoctorDashboard } from "../../redux/doctor/dashboard/doctorDashboardSlice";
import { useNavigate } from "react-router-dom";
// const appointments = [
//   {
//     id: "#4421",
//     name: "Sarah Jenkins",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSJzzES9xAM4Hrd1mpacU8TrBdZSYpEapdId7FJzamN09_lSjfS0NSA1jsl6zmfDCGEJhdNmBHiN7xE_39itbuq_WMek1pkL6fxEUbCqkX_g-8riCsIez2wEijlaIeEi3wiQN7aO2W9_KrleMlcO480lL5QDTZT-fKZMGezNcZBapgSvtcdgIDQOYlPCeq9FWwECr0L0iozLd79fOFGZU19vLwBD2WqMPdmWStKj8_F5nNLZE43U88WIV7qSMaDvox-w79fY7_wGn7",
//     time: "09:30 AM",
//     type: "Video Call",
//     status: "Confirmed",
//   },
//   {
//     id: "#4425",
//     name: "Robert Chen",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPhe6iYNodrTXst31I5QuvZapre508rl4kqa77StiabsZ4LLKupjJz_NzcKOFTF-EUneWxiQfU4W-cKJ-k82UXp1cHwA4TMJWShXQS0yjGswhvzSTToZSw1zFwBgken2a2uP4qadajFTKIqlqHIgidntyxuC6QmTTXj-fnNaBAgqwVfJD_tAstwUzlxNC2FClzWUy-FeEdn0VL2gAo-XkZAAJIvDYBkMlcPRTntcPV0FpJkhwKh15XnZ_Ik7d6zLHbQeeZBh_JxkdU",
//     time: "10:15 AM",
//     type: "Messages",
//     status: "Cancelled",
//   },
//   {
//     id: "#4428",
//     name: "Michael Davis",
//     image: "",
//     time: "11:00 AM",
//     type: "Follow-up",
//     status: "Pending",
//   },
// ];

const UpcomingAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const { upcomingAppointments } = useSelector(
  (state) => state.doctorDashboard
);

useEffect(() => {
  if (!upcomingAppointments || upcomingAppointments.length === 0) {
    dispatch(fetchDoctorDashboard());
  }
}, [dispatch, upcomingAppointments]);
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_12px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden">
      
      <div className="p-4 sm:p-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-manrope text-[18px] sm:text-[20px] font-semibold text-[#191b23]">
          Upcoming Appointments
        </h3>

        <button className="text-[#004ac6] text-sm font-semibold hover:underline" onClick={()=>navigate("/appointments")}>
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left border-collapse">
          
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase">
                Patient
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase">
                Time
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase">
                Type
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-[#434655] uppercase">
                Status
              </th>
              <th className="px-4 sm:px-6 py-4 text-xs font-semibold text-right text-[#434655] uppercase">
                View-detail
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {upcomingAppointments?.map((item) => (
              <UpcomingAppointmentRow key={item.id} item={item} />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UpcomingAppointments;