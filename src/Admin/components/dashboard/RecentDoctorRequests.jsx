// src/Admin/components/dashboard/RecentDoctorRequests.jsx
import React from "react";
import TableContainer from "../../../common/layout/TableContainer";
import TableHeaderCell from "../../../common/display/TableHeaderCell";
import StatusBadge from "../../../common/display/StatusBadge";
import IconButton from "../../../common/ui/IconButton";

const doctorRequests = [
  {
    name: "Dr. Sarah Chen",
    specialization: "Cardiology",
    experience: "12 Years",
    date: "Oct 24, 2023",
    status: "Pending",                      
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoUGjStZj7C3jOAQICv-YXwoFhPz4JBV3rmA8BJPJ-gxJ32Ozn7iZA_Zg1mRMvF0G7eF6tO72CF-MsEFNIvNKhbBks96SIEdTPJiHKsdBOHYys-sPp15wfqU07zWA27XnuYSVg7QRehRlO6BLaprlypbpPSexd8ufxM9ZL1ZLERZnVrCICXM_i7390Y_MjQRb43by-gRjGPPoHymeICoYOGRaqgquWCFT9QB6MBmyYN1H4tLkKn7IY7bc_y4X4fjYNgDVFl9R3HSEM",
  },
  {
    name: "Dr. James Wilson",
    specialization: "Neurology",
    experience: "8 Years",
    date: "Oct 23, 2023",
    status: "Under Review",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZh-b9xEItwjdTOaaI-eZoERLbyUDhtNxPO3CYLdeA4kdGziasIfHGZsG054s8DPvzz8Oimcge-OzTVbLjVuLUsNEhXfP1YqhV2pa5FO3BUfo6UWZdK2Z0iY7E9Ve2AwIz_oPnm8pv3XjN_A2cZd3XtyslqXvCUevatx9TXyqXyIpDgXxUtYjkwGGZ8vdPKjnPhnHpBqBDJG38L_zpY2S7mzUfFz4uVc6jyUYV0vTXsu4eCzgiqH5F5WAouVo53hIPerpFmlGubTob",
  },
];

const RecentDoctorRequests = () => {
  return (
    <TableContainer variant="admin" className="min-w-0">
      <div className="flex items-center justify-between gap-4 border-b border-outline-variant/30 px-4 py-4 sm:px-6">
        <h3 className="text-[20px] leading-7 tracking-[-0.01em] font-semibold text-on-surface">
          Recent Doctor Requests
        </h3>

        <button className="shrink-0 text-primary text-[14px] font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-white">
            <tr>
              <TableHeaderCell variant="admin">Doctor Name</TableHeaderCell>
              <TableHeaderCell variant="admin">Specialization</TableHeaderCell>
              <TableHeaderCell variant="admin">Experience</TableHeaderCell>
              <TableHeaderCell variant="admin">Submission Date</TableHeaderCell>
              <TableHeaderCell variant="admin">Status</TableHeaderCell>
              <TableHeaderCell variant="admin">Action</TableHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {doctorRequests.map((doctor) => (
              <tr
                key={doctor.name}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="h-8 w-8 rounded-full border border-gray-100 object-cover"
                    />
                    <span className="text-[14px] leading-5 font-semibold text-on-surface">
                      {doctor.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {doctor.specialization}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {doctor.experience}
                </td>

                <td className="px-6 py-4 text-[14px] leading-5 text-on-surface-variant whitespace-nowrap">
                  {doctor.date}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge variant="admin" status={doctor.status} />
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <IconButton
                      variant="admin"
                      icon="check_circle"
                      className="text-primary hover:bg-primary/10"
                    />

                    <IconButton
                      variant="admin"
                      icon="cancel"
                      className="text-error hover:bg-error/10"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableContainer>
  );
};

export default RecentDoctorRequests;
