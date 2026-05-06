import React, { useEffect } from "react";
import Card from "../../common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorPatients } from "../../redux/doctor/patients/doctorPatientsSlice";

const PatientStats = () => {
  const dispatch = useDispatch();

  const { stats } = useSelector(
    (state) => state.doctorPatients
  );

  useEffect(() => {
    if (stats.length === 0) {
      dispatch(fetchDoctorPatients());
    }
  }, [dispatch, stats.length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6">
      {stats.map((item) => (
        <Card
          key={item.title}
          variant="patientStat"
          icon={item.icon}
          title={item.title}
          value={item.value}
          note={item.note}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default PatientStats;