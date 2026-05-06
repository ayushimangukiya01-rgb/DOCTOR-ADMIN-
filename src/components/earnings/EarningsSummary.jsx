import React, { useEffect } from "react";
import Card from "../../common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorEarnings } from "../../redux/doctor/earnings/doctorEarningsSlice";

const EarningsSummary = () => {
  const dispatch = useDispatch();
  const { summaryItems } = useSelector((state) => state.doctorEarnings);

  useEffect(() => {
    if (summaryItems.length === 0) {
      dispatch(fetchDoctorEarnings());
    }
  }, [dispatch, summaryItems.length]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summaryItems.map((item) => (
        <Card
          key={item.label}
          variant="summaryMetric"
          label={item.label}
          value={item.value}
          metaIcon={item.metaIcon}
          metaText={item.metaText}
          metaColor={item.metaColor}
          backgroundIcon={item.backgroundIcon}
        />
      ))}
    </section>
  );
};

export default EarningsSummary;