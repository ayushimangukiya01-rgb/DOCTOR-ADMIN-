import React from "react";
import TablePatientCell from "../../common/display/TablePatientCell";
import AppointmentTypeCell from "../../common/display/AppointmentTypeCell";
import StatusPill from "../../common/display/StatusPill";
import TableActionLink from "../../common/ui/TableActionLink";


const AppointmentRow = ({ appointment }) => {
  return (
    <tr className="hover:bg-slate-50 transition-all duration-200">
      <td className="px-4 sm:px-6 py-4">
        <TablePatientCell
          image={appointment.image}
          name={appointment.name}
          id={appointment.id}
        />
      </td>

      <td className="px-4 sm:px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm text-slate-800 font-medium">
            {appointment.date}
          </span>
          <span className="text-xs text-blue-600 font-medium">
            {appointment.time}
          </span>
        </div>
      </td>

      <td className="px-4 sm:px-6 py-4">
        <AppointmentTypeCell
          icon={appointment.icon}
          type={appointment.type}
          typeBg={appointment.typeBg}
          typeColor={appointment.typeColor}
        />
      </td>

      <td className="px-4 sm:px-6 py-4">
        <StatusPill status={appointment.status} />
      </td>

      <td className="px-4 sm:px-6 py-4 text-right">
        <TableActionLink to="/appointment-detail">View</TableActionLink>
      </td>
    </tr>
  );
};

export default AppointmentRow;