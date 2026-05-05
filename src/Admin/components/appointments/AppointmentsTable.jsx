// src/Admin/components/appointments/AppointmentsTable.jsx
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "../../../common/layout/TableContainer";
import { useEffect } from "react";
import { fetchAdminAppointments } from "../../../redux/admin/appointments/appointmentSlice";
// const appointments = [
//   {
//     patient: "James Davenport",
//     patientId: "P-90231",
//     patientInitial: "JD",
//     patientAvatar: "",
//     patientBg: "bg-blue-100 text-primary",
//     doctor: "Dr. Robert Chen",
//     doctorAvatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDWhTnjgMd_rWP2XbaV9oRZoedv1COSIDjbBcuTIwR0r_Fd35quLuS_Svg3vLOyFGYYnIWdsQV_yqX2xUucRARCDj8mKO3PFKsIoEoNs1MDBZHWM5Pqi2TwNdspyvth7T9Bij9gZiaNbx6JHQ6q3Y-ea-gSrXjCyeqpixxizZ6J2VPhYF_kzBYxVeApzJ_V8wsGAMCm3UMQ5wyadwPS8s7vxMb-azQkaZwtO-z81XzZToCd_IhYGbVXFXhr_n1oYFJXhXYTsW5ThGGF",
//     date: "Oct 24, 2023",
//     time: "09:30 AM",
//     type: "Chat Follow-up",
//     typeClass: "bg-blue-50 text-blue-700 border-blue-100",
//     paymentIcon: "check_circle",
//     paymentIconClass: "text-tertiary",
//     payment: "$120.00",
//     status: "Confirmed",
//     statusClass: "bg-tertiary-fixed/20 text-tertiary border-tertiary/20",
//     dotClass: "bg-tertiary",
//   },
//   {
//     patient: "Elena Rodriguez",
//     patientId: "P-90442",
//     patientAvatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuApTMAxdO4l2tUmJDrgEJ83z7pTYEmptr5zoftVNgGODHBiEN_denGEzdK2O4Xpks8u9niblbntsuxQTNN14A0xhxQk4VKMA0Ywe_5n-R3tTn4a21aymKrSwIvw7CCKWz6KzVTTr71XCfluRFd2TDNgsbdkqkA8mUdlE2XW6qILcbchBz9yRFGyML5KYOfqXjLA8wmKPEVESz4eiVkYbdaY-2Ak6p5Q70DlIure7C7VYegbzXhFJrLptCgOGfvFma_B58btXEUY7ODM",
//     doctor: "Dr. Sarah Kostic",
//     doctorInitial: "SK",
//     date: "Oct 24, 2023",
//     time: "11:15 AM",
//     type: "Video Call",
//     typeClass: "bg-secondary-container text-on-secondary-container border-outline-variant",
//     paymentIcon: "pending",
//     paymentIconClass: "text-error",
//     payment: "$250.00",
//     status: "In Progress",
//     statusClass: "bg-primary-fixed/30 text-primary border-primary/20",
//     dotClass: "bg-primary",
//   },
//   {
//     patient: "Marcus Bennett",
//     patientId: "P-90881",
//     patientInitial: "MB",
//     patientAvatar: "",
//     patientBg: "bg-tertiary-fixed-dim/40 text-tertiary",
//     doctor: "Dr. Lisa Thorne",
//     doctorAvatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAlylrkC2SEiDuSrf4f1XK6inAtL613tCu7vwJQKJm9k3_osBOZVmwlOdbQN4T1VBTle0dxz8tA3sC-BehWITAPYbhL22i7F4jGGjOQ_L8Gq66zv_tkONi8MKrRRnkhKe6rEFr3S8HDons-vV5nfS4jUDIe2_VDux7S0WiaXgZLgxnQCdU7JJCXaZn8yoN4Wbl41qCCZMq0IM9btbXlRgZE90-WgbuyN8MyITj3geyZ4xpaz267VvTr9W5PV2N49K1Nlb2rIV--OA58",
//     date: "Oct 24, 2023",
//     time: "02:00 PM",
//     type: "Message",
//     typeClass: "bg-error-container text-on-error-container border-error/10",
//     paymentIcon: "check_circle",
//     paymentIconClass: "text-tertiary",
//     payment: "$400.00",
//     status: "Pending",
//     statusClass: "bg-surface-variant text-on-surface-variant border-outline-variant",
//     dotClass: "bg-gray-400",
//   },
//   {
//     patient: "Samuel Thompson",
//     patientId: "P-90554",
//     patientAvatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDxaeEX4-gC6FJNqWxl2_pZ9MjYG-RWBL9I_y6mhBpNxob9lT9boTh2qrqClzRvjD0304JQ5HTc5lBcDWRe17f7S7DHj95hOMcbTXq6ter1DxU3VEdJArpGU35-3dWai_ZioowaLDzswP-DRuVgMgcpXu9mzOoII4QyaXd2SrP7l4HuI55vmXAbl2c_qNLLsQ7PGAkSa23g1xQZ7SIuzhWzLuKhs_SnjFvP0D4FGU00tglQSJagVGMoHhf1UopLZGBXpC25_GmAD8XY",
//     doctor: "Dr. David Miller",
//     doctorAvatar:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAzM58eB55n6CCFx8z4_-G9TsM88QssnOQTB2v_2YCn1f1XcbGBu70bEU1v561TWRW8fFAQFyBA2_Dth00922lSRf18mfSb5k-6Zkx2wV1pp6JzjF3YXZnTXr5RcBmNczgbHlU7AbggLMczDSJzYD7Ch45EppIZZGYZfyOSAYRQPJXSoZK7KeC1FrXnRh3zdLn7O_h4WyGrjO9-8zgbV9qAeCua3aiBYzzakUSLvzJH8WLVyvoZhKz5xR_AI37REM3YB06XrVIwp1Ht",
//     date: "Oct 24, 2023",
//     time: "03:45 PM",
//     type: "Video Call",
//     typeClass: "bg-blue-50 text-blue-700 border-blue-100",
//     paymentIcon: "check_circle",
//     paymentIconClass: "text-tertiary",
//     payment: "$85.00",
//     status: "Confirmed",
//     statusClass: "bg-tertiary-fixed/20 text-tertiary border-tertiary/20",
//     dotClass: "bg-tertiary",
//   },
// ];

const AppointmentsTable = () => {
  const dispatch = useDispatch();
const { appointments } = useSelector((state) => state.adminAppointments);

useEffect(() => {
  if (appointments.length === 0) {
    dispatch(fetchAdminAppointments());
  }
}, [dispatch, appointments.length]);

  return (
    <TableContainer variant="admin" className="min-w-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px] text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Patient
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Doctor
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Date & Time
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Type
              </th>
              <th className="px-6 py-4 font-label-md text-on-surface-variant whitespace-nowrap">
                Payment
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
            {appointments.map((item) => (
              <tr
                key={item.patientId}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    {item.patientAvatar ? (
                      <img
                        src={item.patientAvatar}
                        alt={item.patient}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${item.patientBg}`}
                      >
                        {item.patientInitial}
                      </div>
                    )}

                    <div>
                      <p className="font-label-md text-on-surface">
                        {item.patient}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        ID: {item.patientId}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    {item.doctorAvatar ? (
                      <img
                        src={item.doctorAvatar}
                        alt={item.doctor}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">
                        {item.doctorInitial}
                      </div>
                    )}

                    <p className="font-body-md text-on-surface">
                      {item.doctor}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="font-body-md text-on-surface">{item.date}</p>
                  <p className="font-body-sm text-on-surface-variant">
                    {item.time}
                  </p>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${item.typeClass}`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`material-symbols-outlined text-lg ${item.paymentIconClass}`}
                    >
                      {item.paymentIcon}
                    </span>
                    <span className="font-body-md text-on-surface">
                      {item.payment}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.statusClass}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${item.dotClass}`}></span>
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-white rounded-lg border border-transparent hover:border-outline-variant text-on-surface-variant">
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>

                    {/* <button className="p-1.5 hover:bg-white rounded-lg border border-transparent hover:border-outline-variant text-on-surface-variant">
                      <span className="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button> */}

                    {/* <button className="p-1.5 hover:bg-error-container/20 rounded-lg border border-transparent hover:border-error/20 text-error">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-4 sm:px-6 bg-surface-container-low border-t border-outline-variant flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-body-sm text-on-surface-variant">
          Showing <span className="font-semibold text-on-surface">1</span> of{" "}
          <span className="font-semibold text-on-surface">156</span> results
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled
            className="p-2 border border-outline-variant rounded-lg hover:bg-white transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-lg">
              chevron_left
            </span>
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-label-sm ${
                page === 1
                  ? "bg-primary text-on-primary"
                  : "hover:bg-white border border-transparent hover:border-outline-variant text-on-surface-variant"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="text-on-surface-variant">...</span>

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white border border-transparent hover:border-outline-variant text-on-surface-variant font-label-sm">
            16
          </button>

          <button className="p-2 border border-outline-variant rounded-lg hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-lg">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </TableContainer>
  );
};

export default AppointmentsTable;