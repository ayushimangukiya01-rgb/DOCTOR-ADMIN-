import React from "react";
import PageHeader from "../../common/typography/PageHeader";
import Tabs from "../../common/ui/Tabs";

const AppointmentsHeader = () => {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        
        <PageHeader
          title="Manage Schedule"
          subtitle="Review and manage your patient consultations"
        />

        <Tabs
          tabs={["Upcoming", "Completed", "Cancelled"]}
          activeTab="Upcoming"
        />

      </div>
    </section>
  );
};

export default AppointmentsHeader;