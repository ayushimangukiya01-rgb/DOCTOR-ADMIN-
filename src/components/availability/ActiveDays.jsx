import React, { useEffect } from "react";
import CardContainer from "../../common/layout/CardContainer";
import CheckboxRow from "../../common/ui/CheckboxRow";
import SectionHeader from "../../common/typography/SectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAvailability } from "../../redux/doctor/availability/doctorAvailabilitySlice";

const ActiveDays = () => {
  const dispatch = useDispatch();
  const { activeDays } = useSelector((state) => state.doctorAvailability);

  useEffect(() => {
    if (activeDays.length === 0) {
      dispatch(fetchDoctorAvailability());
    }
  }, [dispatch, activeDays.length]);

  return (
    <CardContainer>
      <SectionHeader title="Active Days" actionText="Reset All" headingType="h2" />

      <div className="space-y-3">
        {activeDays.map((day, index) => (
          <CheckboxRow
            key={index}
            label={day.name}
            checked={day.active}
            disabled={!day.active}
          />
        ))}
      </div>
    </CardContainer>
  );
};

export default ActiveDays;