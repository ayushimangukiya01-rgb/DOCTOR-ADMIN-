import React, { useEffect } from "react";
import AppointmentRow from "./AppointmentRow";
import TableContainer from "../../common/layout/TableContainer";
import TableHeaderCell from "../../common/display/TableHeaderCell";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointments } from "../../redux/doctor/appointments/doctorAppointmentSlice";

const AppointmentsTable = ({ filteredAppointments }) => {
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.doctorAppointments);

  const tableAppointments = filteredAppointments || appointments;

  useEffect(() => {
    if (!appointments || appointments.length === 0) {
      dispatch(fetchDoctorAppointments());
    }
  }, [dispatch, appointments?.length]);

  return (
    <TableContainer>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <TableHeaderCell>Patient Name</TableHeaderCell>
              <TableHeaderCell>Date & Time</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell align="right">Actions</TableHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {tableAppointments.length > 0 ? (
              tableAppointments.map((appointment) => (
                <AppointmentRow
                  key={appointment.id}
                  appointment={appointment}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-[14px] text-slate-500"
                >
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </TableContainer>
  );
};

export default AppointmentsTable;