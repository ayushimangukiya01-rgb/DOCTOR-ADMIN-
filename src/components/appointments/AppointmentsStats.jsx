import React, { useEffect } from "react";
import Card from "../../common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointments } from "../../redux/doctor/appointments/doctorAppointmentSlice";

const AppointmentsStats = () => {
  const dispatch = useDispatch();
  const { stats } = useSelector((state) => state.doctorAppointments);

  useEffect(() => {
    if (stats.length === 0) {
      dispatch(fetchDoctorAppointments());
    }
  }, [dispatch, stats.length]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item) => (
        <Card
          key={item.label}
          variant="stat"
          icon={item.icon}
          label={item.label}
          value={item.value}
          iconBg={item.iconBg}
          iconColor={item.iconColor}
        />
      ))}
    </section>
  );
};

export default AppointmentsStats;