// src/Admin/components/patients/PatientsTable.jsx
import React from "react";

const patients = [
  {
    name: "Eleanor Pena",
    id: "MED-99201",
    age: "34 Years",
    gender: "Female",
    phone: "(209) 555-0104",
    email: "eleanor.p@example.com",
    lastVisit: "Oct 12, 2023",
    visitType: "General Checkup",
    status: "Stable",
    statusClass: "bg-green-100 text-green-700",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX75CvWmaYUZg9o9j0rRSAb06AQ7n_SL4Yx-mQ1RLnpW3j7gpJIn-nO2aRH6Fun0HY6GRUs1YGegUCE74WbneOa-qgUaWld9GF9QczHl3s3819OevEk9mkSjxBxEEs02ppJ_dqwclZC0VjEtNJm74RqeuIfNfWMG-MksSanj3A4ZDTIXAeVp5OUXu-fCM0ePt3iV1emuNX6SRgvJexrIaQly7gyw8_Xaertv65QPnJF1h1OXE5mE-yOYfJ8WVwGdJBelRrB_aqH6Qu",
  },
  {
    name: "Robert Fox",
    id: "MED-99202",
    age: "45 Years",
    gender: "Male",
    phone: "(406) 555-0120",
    email: "robert.fox@example.com",
    lastVisit: "Oct 14, 2023",
    visitType: "Cardiology",
    status: "Critical",
    statusClass: "bg-red-100 text-red-700",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5dmA278a82NaY1hyXixd7EJWiuuAzhQCbTONOYYhnyYeyFNLO28jdaiBNequRj6o0qDY3YTe1VW1ukpo3Li4EgxArciUgzlnBwN3KIScQt3zOIEQPM6zcTtZ9z0yJt7ceyRUavbaGGe3BlWrcC2eNOaS2ucF9NBXryOuaf5pkyom5S72l01Z8DcF0XE12-I-OLNG-rTbQWEPn3Q6zpJdYWkavEyo_03jNjG36HT7FxsihL5BNu4IN7gqHu6RFuQbbStmZ4ZBcCxCs",
  },
  {
    name: "Jane Cooper",
    id: "MED-99203",
    age: "28 Years",
    gender: "Female",
    phone: "(219) 555-0114",
    email: "jane.c@example.com",
    lastVisit: "Oct 15, 2023",
    visitType: "Dermatology",
    status: "Recovering",
    statusClass: "bg-blue-100 text-blue-700",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5_7zXCOGPY7Xc60xwEKPZyJbh5j3Fip22KYcHWxy7tO2FTciGy8M7hWZ6e11dlPwI-cS35Su3wfSRL-bvsrQ_caz12lhrnEQ0Shee7zJ1boQ6Tf5eyG9UTWGvf_iJ_mCAh5OfC1FGbC326JDCU6EhDX1wfBoE34P9oZ4wd3YW3fRds1fFaujcwllwQuCaXp5cXihTb72GTOzTzsqBrtVwz7k_7XDdun-5OM4rRmgmTF_w9yulG_ALcaKBgx7gNj3-y6FtM5J4Nue",
  },
  {
    name: "Cameron Williamson",
    id: "MED-99204",
    age: "38 Years",
    gender: "Male",
    phone: "(302) 555-0107",
    email: "cam.w@example.com",
    lastVisit: "Oct 16, 2023",
    visitType: "Pediatrics",
    status: "Stable",
    statusClass: "bg-green-100 text-green-700",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDtTUjbAkve1yP4fIpaEuubCAhd_701IW-KMT3cs6qp8LPFCbooy4xsxdqUaDIqb7mgVETUMi4hwCaly19_5gD-oaRGNi-_kZzzQHHhVOgUt3JOIwn4FnXl_jWTjTDpQYIVaX5D9Aujp45oJUyCagyAJ0q896UNWXe6LCe5BIqP-MvdswvgfM71mWzxXDQ5qaQLExVAQt-bnpIunQZrcr6-WN7v53GCdG0RLtAW6xkPeMp1wELgRVp-2gCDFDnLe9Sk_xB-_zDpcAu",
  },
];

const PatientsTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] text-left">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Patient
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Age/Gender
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Contact
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Last Visit
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant text-right whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-label-md text-on-surface">
                        {patient.name}
                      </p>
                      <p className="font-body-sm text-on-surface-variant">
                        ID: {patient.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <p className="font-body-md text-on-surface">{patient.age}</p>
                  <p className="font-body-sm text-on-surface-variant">
                    {patient.gender}
                  </p>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <p className="font-body-md text-on-surface">
                    {patient.phone}
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {patient.email}
                  </p>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <p className="font-body-md text-on-surface">
                    {patient.lastVisit}
                  </p>
                  <p className="font-body-sm text-on-surface-variant">
                    {patient.visitType}
                  </p>
                </td>

                <td className="px-6 py-5 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full font-label-sm ${patient.statusClass}`}
                  >
                    {patient.status}
                  </span>
                </td>

               <td className="px-6 py-5 text-right">
  <div className="flex justify-end gap-2">
    {/* <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-lg">
      <span className="material-symbols-outlined">
        visibility
      </span>
    </button> */}

    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-lg">
      <span className="material-symbols-outlined">edit</span>
    </button>

    {/* <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-lg">
      <span className="material-symbols-outlined">delete</span>
    </button> */}
  </div>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-5 sm:p-6 border-t border-gray-100 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <button
          disabled
          className="flex items-center justify-center gap-2 px-4 py-2 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50"
        >
          <span className="material-symbols-outlined">chevron_left</span>
          Previous
        </button>

        <div className="flex items-center justify-center gap-1">
          <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md">
            1
          </button>
          <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md transition-colors">
            3
          </button>
          <span className="px-2 text-on-surface-variant">...</span>
          <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md transition-colors">
            125
          </button>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-outline rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
          Next
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </>
  );
};

export default PatientsTable;