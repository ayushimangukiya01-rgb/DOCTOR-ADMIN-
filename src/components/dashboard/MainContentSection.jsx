import React from "react";
import UpcomingAppointments from "./UpcomingAppointments";
import WeeklyStats from "./WeeklyStats";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import UpgradeCard from "./UpgradeCard";

const MainContentSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-2 lg:pt-4 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-8 space-y-6">
            <UpcomingAppointments />
            <WeeklyStats />
          </div>

          <div className="xl:col-span-4 space-y-6">
            <QuickActions />
            <RecentActivity />
            <UpgradeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;