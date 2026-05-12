import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import AppointmentsHeader from "../components/appointments/AppointmentsHeader";
import AppointmentsStats from "../components/appointments/AppointmentsStats";
import AppointmentFilters from "../components/appointments/AppointmentFilters";
import AppointmentsTable from "../components/appointments/AppointmentsTable";
import AppointmentPagination from "../components/appointments/AppointmentPagination";
import DashboardPageLayout from "../common/layout/DashboardPageLayout";

const AppointmentsPage = () => {
  const { appointments } = useSelector((state) => state.doctorAppointments);

  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("Any Type");
  const [status, setStatus] = useState("Any Status");
  const [dateFilter, setDateFilter] = useState("All");

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 4;

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const searchValue = searchTerm.toLowerCase();

      const matchSearch =
        appointment.name.toLowerCase().includes(searchValue) ||
        appointment.id.toLowerCase().includes(searchValue);

      const matchType = type === "Any Type" || appointment.type === type;

      const matchStatus =
        status === "Any Status" || appointment.status === status;

      const matchDate =
        dateFilter === "All" ||
        dateFilter === "This Week" ||
        (dateFilter === "Today" && appointment.date === "Oct 24, 2023") ||
        (dateFilter === "Tomorrow" && appointment.date === "Oct 25, 2023");

      return matchSearch && matchType && matchStatus && matchDate;
    });
  }, [appointments, searchTerm, type, status, dateFilter]);

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);

  // PAGINATION SAFE PAGE
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  // PAGINATION START INDEX
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentAppointments = filteredAppointments.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <DashboardPageLayout>
      <AppointmentsHeader />
      <AppointmentsStats />

      <AppointmentFilters
        searchTerm={searchTerm}
        setSearchTerm={(value) => {
          setSearchTerm(value);
          setCurrentPage(1);
        }}
        type={type}
        setType={(value) => {
          setType(value);
          setCurrentPage(1);
        }}
        status={status}
        setStatus={(value) => {
          setStatus(value);
          setCurrentPage(1);
        }}
        dateFilter={dateFilter}
        setDateFilter={(value) => {
          setDateFilter(value);
          setCurrentPage(1);
        }}
      />

      <AppointmentsTable filteredAppointments={currentAppointments} />

      <AppointmentPagination
        currentPage={safeCurrentPage}
        totalPages={totalPages}
        totalItems={filteredAppointments.length}
        currentItems={currentAppointments.length}
        setCurrentPage={setCurrentPage}
      />
    </DashboardPageLayout>
  );
};

export default AppointmentsPage;