import React from "react";
import AppointmentRow from "./AppointmentRow";
import TableContainer from "../../common/layout/TableContainer";
import TableHeaderCell from "../../common/display/TableHeaderCell";
import SelectField from "../../common/ui/SelectField";
import TextIconButton from "../../common/ui/TextIconButton";

const appointments = [
  {
    name: "Sarah Jenkins",
    id: "#PJ9201",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEMq96YRR-j7xsfNfVyCaGwZA0_WMmis8jLE_zlBP85Ig13NbM75dykyzbmvoMBLHkx8ym_lBdeXeiP_9cb1mMP7bTb4P3-VL5CLa8zXQxS7jvEVnl7nLMj-fFJxU8UhyHEfrGgT7VC31lpqfWr1oDIqKPohC85xwtSUr7rlFb6kN81Xo7iNgXwgUQdlI5toRyCAiN_DvdFUJCqrYGTAoANlmQsqCDEe-hnaM-J1xJ4dTWX-RCKS03skUVJOrevFWbrL_VliIIINzb",
    date: "Oct 24, 2023",
    time: "10:30 AM - 11:00 AM",
    type: "Video Call",
    icon: "videocam",
    typeBg: "bg-blue-50",
    typeColor: "text-blue-600",
      status: "Confirmed",
    // payment: "Paid",
    // paymentClass: "bg-[#6bff8f]/10 text-[#007432]",
  },
  {
    name: "Michael Ross",
    id: "#PJ9205",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvgAmytw7nAUgmNbPp0SdjRqArzGcdcXWpr_2xvlk585Vy-CUC6gMYKJ-4Ybf6D6Kc7I7oCedpLOuS_C1tyUdlIF7fXWyiP21SU4rS9Dg7lM8FhnN5EHHFI1CWqUhVNIcRD9d0LjrT3BiVsdPNpv564GpTgAM9JBvenqPuuGrmkbmBKjLlmma9fesIwyH10Qhx2SjAX0NyM3Kt-V0qEZGJMtObw389BVXgAKd6UsDi7FAENaKu6soPLxqjxn6ICd021JTHaXl3XCrW",
    date: "Oct 24, 2023",
    time: "11:15 AM - 11:45 AM",
    type: "Message",
    icon: "message",
    typeBg: "bg-slate-100",
    typeColor: "text-blue-600",
      status: "Confirmed",
    // payment: "Pending",
    // paymentClass: "bg-red-50 text-red-700",
  },
  {
    name: "Elena Rodriguez",
    id: "#PJ9209",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXvf_Cx4vj4Tme-3qAVqbDL7iKikbfJwmPPV14k7H1B-UHqifovnaKTw2TpDdFwLxvwSpTmXcQOZ-YIAywCdE9-ltjk0gHT_qIAoN7UJFRFfb1_8gu3JUkOaRgCSziPKvC_HdwkQyy4SzCGqmm9JQOY3ddlYv5z9CKdGS0QLjFK2CH8TTVi2BC4ybNM0Qp3NH0gT09tqB1-4hbf-UicSMit7Fi7p-1RSzYHAcf96Ee9eVojOTIa4Gnnaw2-XWixAruCLWnQ2NcpXxb",
    date: "Oct 24, 2023",
    time: "01:00 PM - 01:30 PM",
    type: "Chat Follow-up",
    icon: "forum",
    typeBg: "bg-blue-50",
    typeColor: "text-blue-600",
      status: "Confirmed",
    // payment: "Paid",
    // paymentClass: "bg-[#6bff8f]/10 text-[#007432]",
  },
  {
    name: "David Chang",
    id: "#PJ9212",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyTRZOPlHyVQM0tkF5hvIJXxG819mmeQTwMyNEEz7yvwKxmDiJEwGFy-4PbnGiRosMDvM9KAJXKdwQMzpeUkkdtIVLVuP5Lp0GdASrJjZACYCdMFRwgfwDNhaf_XvWd0dUolRISbWq50PgWpZDs100RPN4yd3wr6U6A46bld4jz24_Gz2dYKrNWJjsVUSbun7vAPhG2KaKiGeLt-cvKYg5tEe0AH0cO6_b0TsWzrvqgqt8_kPSIiYUyAl3o-_p6XJGmGH6coycTjL4",
    date: "Oct 24, 2023",
    time: "02:30 PM - 03:00 PM",
    type: "Video Call",
    icon: "videocam",
    typeBg: "bg-blue-50",
    typeColor: "text-blue-600",
     status: "Cancelled",
    // payment: "Paid",
    // paymentClass: "bg-[#6bff8f]/10 text-[#007432]",
  },
];



const AppointmentsTable = () => {
  return (
    <TableContainer>

      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <div className="flex flex-col sm:flex-row gap-4">
          <SelectField
            options={[
              "Any Type",
              "Video Call",
              "Message",
              "Message Follow-up",
              "Video-call Follow-up",
            ]}
          />
        </div>

        <TextIconButton icon="filter_list">
          Clear Filters
        </TextIconButton>

      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <TableHeaderCell>Patient Name</TableHeaderCell>
              <TableHeaderCell>Date & Time</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>status</TableHeaderCell>
              <TableHeaderCell align="right">Actions</TableHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {appointments.map((appointment) => (
              <AppointmentRow key={appointment.id} appointment={appointment} />
            ))}
          </tbody>
        </table>
      </div>

    </TableContainer>
  );
};

export default AppointmentsTable;
