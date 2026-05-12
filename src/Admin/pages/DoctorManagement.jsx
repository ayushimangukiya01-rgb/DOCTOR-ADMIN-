// src/Admin/pages/DoctorManagement.jsx
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DoctorStatsGrid from "../components/doctors/DoctorStatsGrid";
import DoctorFilters from "../components/doctors/DoctorFilters";
import DoctorsTable from "../components/doctors/DoctorsTable";

const DoctorManagement = () => {
  const { doctors } = useSelector((state) => state.adminDoctors);

  // FILTER STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("All Specializations");
  const [status, setStatus] = useState("All");
  const [experience, setExperience] = useState("All Experience");

  // FILTERED DOCTORS DATA
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const searchValue = searchTerm.toLowerCase();

      const matchSearch =
        doctor.name.toLowerCase().includes(searchValue) ||
        doctor.id.toLowerCase().includes(searchValue) ||
        doctor.specialization.toLowerCase().includes(searchValue);

      const matchSpecialization =
        specialization === "All Specializations" ||
        doctor.specialization === specialization;

      const matchStatus =
        status === "All" ||
        doctor.status.toLowerCase().replaceAll("-", " ").trim() ===
          status.toLowerCase().trim();

      const doctorExperienceNumber = parseInt(doctor.experience);

      const matchExperience =
        experience === "All Experience" ||
        doctorExperienceNumber >= parseInt(experience);

      return (
        matchSearch && matchSpecialization && matchStatus && matchExperience
      );
    });
  }, [doctors, searchTerm, specialization, status, experience]);

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-h1 text-h1 text-on-surface">
            Doctor Management
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Manage medical staff, schedules, and practitioner credentials.
          </p>
        </div>
      </div>

      <DoctorStatsGrid />

      <DoctorFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        specialization={specialization}
        setSpecialization={setSpecialization}
        status={status}
        setStatus={setStatus}
        experience={experience}
        setExperience={setExperience}
      />

      <DoctorsTable filteredDoctors={filteredDoctors} />
    </div>
  );
};

export default DoctorManagement;