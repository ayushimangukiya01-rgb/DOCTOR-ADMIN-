import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../common/typography/PageHeader";
import ActionButton from "../../common/ui/ActionButton";
import Card from "../../common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorDashboard } from "../../redux/doctor/dashboard/doctorDashboardSlice";

const DashboardOverview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { stats, header } = useSelector((state) => state.doctorDashboard);

  useEffect(() => {
    if (stats.length === 0) {
      dispatch(fetchDoctorDashboard());
    }
  }, [dispatch, stats.length]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5">
          <PageHeader title={header.title} subtitle={header.subtitle} />

          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
            <ActionButton
              variant="outline"
              onClick={() => navigate("/availability")}
            >
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              Add Availability
            </ActionButton>

            <ActionButton
              variant="primary"
              onClick={() => navigate("/appointments")}
            >
              <span className="material-symbols-outlined text-[18px]">
                videocam
              </span>
              Start Consultation
            </ActionButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item) => (
            <Card key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;