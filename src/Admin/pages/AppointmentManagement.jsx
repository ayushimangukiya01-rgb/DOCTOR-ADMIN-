// src/Admin/pages/AppointmentManagement.jsx
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import AppointmentHeader from "../components/appointments/AppointmentHeader";
import AppointmentFilters from "../components/appointments/AppointmentFilters";
import AppointmentsTable from "../components/appointments/AppointmentsTable";
import AppointmentBottomCards from "../components/appointments/AppointmentBottomCards";

const AppointmentManagement = () => {
  const { appointments } = useSelector((state) => state.adminAppointments);

  // FILTER STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All Status");
  const [type, setType] = useState("All Types");
  const [doctor, setDoctor] = useState("All Doctors");

  // FILTERED APPOINTMENTS DATA
  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) => {
      const searchValue = searchTerm.toLowerCase();

      const matchSearch =
        item.patient.toLowerCase().includes(searchValue) ||
        item.patientId.toLowerCase().includes(searchValue) ||
        item.doctor.toLowerCase().includes(searchValue) ||
        item.type.toLowerCase().includes(searchValue);

      const matchStatus = status === "All Status" || item.status === status;
      const matchType = type === "All Types" || item.type === type;
      const matchDoctor = doctor === "All Doctors" || item.doctor === doctor;

      return matchSearch && matchStatus && matchType && matchDoctor;
    });
  }, [appointments, searchTerm, status, type, doctor]);

  const doctors = [...new Set(appointments.map((item) => item.doctor))];

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <AppointmentHeader />

      <AppointmentFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
        type={type}
        setType={setType}
        doctor={doctor}
        setDoctor={setDoctor}
        doctors={doctors}
        totalResults={filteredAppointments.length}
      />

      <AppointmentsTable filteredAppointments={filteredAppointments} />

      <AppointmentBottomCards />
    </div>
  );
};

export default AppointmentManagement;