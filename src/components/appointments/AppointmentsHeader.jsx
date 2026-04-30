import React from "react";
import PageHeader from "../../common/typography/PageHeader";
import Tabs from "../../common/ui/Tabs";

const AppointmentsHeader = () => {
  return (
    <section className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <PageHeader
          title="Manage Schedule"
          subtitle="Review and manage your patient consultations"
        />

        {/* 👇 THIS FIXES CENTER ALIGNMENT */}
        <div className="md:mt-2">
          <Tabs
            tabs={["Upcoming", "Completed", "Cancelled"]}
            activeTab="Upcoming"
          />
        </div>

      </div>
    </section>
  );
};

export default AppointmentsHeader;