import React from "react";
import UpcomingAppointments from "./UpcomingAppointments";
import WeeklyStats from "./WeeklyStats";
import QuickActions from "./QuickActions";

const MainContentSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-2 lg:pt-4 pb-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* FULL WIDTH UPCOMING APPOINTMENTS */}
        <UpcomingAppointments />

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-8 min-w-0">
            <WeeklyStats />
          </div>

          <div className="xl:col-span-4 min-w-0">
            <QuickActions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;