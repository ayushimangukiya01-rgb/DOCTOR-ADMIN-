// src/Admin/components/doctors/DoctorsTable.jsx
import React from "react";
import TableContainer from "../../../common/layout/TableContainer";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    name: "Dr. James Wilson",
    id: "DOC-9821-W",
    specialization: "Cardiology",
    experience: "12 Years",
    status: "Approve-Doctor",
    fee: "$180.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU__blwIXlrMpH8DCEUqfftv37KoppmfYIS-eiWLfssu46ldqzq17xA2jFUK6QjblSZyi7vnpLmDoyCa4nBJf8_kNdvZU5feV3dpANtM5pAujLA5_x62FW1s11XXchetUelM5ihQoEArHvhW77aS--rxfrwXFqz6X3hKw4_xRbchwP29p4c6eXdo17RltdpYyTO8li3DOPriUaMSDyjMBJe9IIqTxEKXDe24drDOuDPbh-6pngYxYlHCzXd88ErqiME2OiPQgFUDNG",
  },
  {
    name: "Dr. Helena Marcus",
    id: "DOC-4412-M",
    specialization: "Neurology",
    experience: "8 Years",
    status: "Approve-Doctor",
    fee: "$210.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8z0LRelt9daQ2pw0EwGFCF11jpBQ-0EY7xCJibpT9FPn-E6Rb12drwz1Wag71r0BAwRv0CipHisqhxwpXxvwu-D0W__99YGSG5VwPclWLtRn9r58xcaKxUw4kFx75WEfLqTKaTGovdOGHxDXRjV7MJ8K3UHHll6-uJu0T329p6ACaw3CNlA5afcS7vCYUzF_PuEgsmbbrbfOweVDFtDtS9fIoHE9IymoNFJ-OLqIeb4E1X4jRGXstcprV8RkROBHyYLLbV5GLLjvi",
  },
  {
    name: "Dr. Marcus Thorne",
    id: "DOC-7723-T",
    specialization: "Pediatrics",
    experience: "15 Years",
    status: "Reject-Profile",
    fee: "$120.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyMqKd2r7E-3DqaE55Sko1AA2FpDOyw07dTnw4y0BmFIYRd-Mu2AQpl5_agRXGjj5gcQsc7S4SUcCkKm8ngin2nnB1zL-CMidzmfQyhyaxjsXIUdFSoNxylglNGfQO3ofl_ixxlWLFTK-XWv9DKikwQKm5L6CjdfJvZ8Jq8FPL4HGG0q7dra_akw5HW7OvcKxWFKtEQHFqWXW2H-odZGJKrfEtBi58tIGAFUfpWITe6MWfZu3QapNOW5TpRSuAcLsRX79TvLuxr3lV",
  },
  {
    name: "Dr. Sarah Miller",
    id: "DOC-1102-S",
    specialization: "Oncology",
    experience: "20 Years",
    status: "Reject-Profile",
    fee: "$250.00",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2-Ay1VN38Ziz3h47128YlbnzqxU7Xxbh_0jNmSH3Im1EKDsA-A9qe3X1_db5Ln3SUIORQ-flTTNRb3MibZj_NYJHq3WxBxLoQhiYvJdsNdNtcl3jPQh8Vvl71vHIQldEoCpKKhL8FTki_TIX_YrbhhI3jfADiY8bwMxxwJZMEmugIzLT2Eaz2aLMCEM57EtBiOWpxyw0LOaiHcHalQC4lnrWyPJCh9tFFKe9PG2h8VQSDKFRJ19XHSCoddzWXqNEJfSux2oxSEj2j",
  },
];

const StatusPill = ({ status }) => {
  const isActive = status === "Approve-Doctor";
  

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
        isActive
          ? "bg-tertiary-fixed-dim text-on-tertiary-fixed"
          : "bg-error-container text-on-error-container"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          isActive ? "bg-tertiary" : "bg-error"
        }`}
      ></span>
      {status}
    </span>
  );
};

const DoctorsTable = () => {
  const navigate = useNavigate();
  return (
    <TableContainer variant="admin" className="min-w-0">
      <div className="w-full overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[1050px] text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Doctor
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Specialization
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant text-center whitespace-nowrap">
                Experience
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
                Fee
              </th>
              <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant text-right whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant">
            {doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        {doctor.name}
                      </p>
                      <p className="font-body-sm text-body-sm text-outline">
                        ID: {doctor.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold text-primary">
                    {doctor.specialization}
                  </span>
                </td>

                <td className="px-6 py-4 text-center font-body-md text-body-md whitespace-nowrap">
                  {doctor.experience}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusPill status={doctor.status} />
                </td>

                <td className="px-6 py-4 font-label-md text-label-md whitespace-nowrap">
                  {doctor.fee}
                </td>

                <td className="px-6 py-4 text-right">
                  <button
   onClick={() => navigate("/admin/doctors/verify")}
  className="p-1.5 hover:bg-secondary-container rounded-lg text-secondary transition-all"
>
  <span className="material-symbols-outlined text-lg">edit</span>
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-4 sm:px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-surface-container-lowest border-t border-outline-variant">
        <p className="font-body-sm text-body-sm text-outline">
          Showing 1 to 4 of 124 entries
        </p>

        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors text-sm font-medium">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary text-on-primary rounded text-sm font-medium">
            1
          </button>
          <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors text-sm font-medium">
            2
          </button>
          <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors text-sm font-medium">
            3
          </button>
          <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors text-sm font-medium">
            Next
          </button>
        </div>
      </div>
    </TableContainer>
  );
};

export default DoctorsTable;