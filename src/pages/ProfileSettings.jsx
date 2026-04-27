import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import ProfilePageTitle from "../components/profile/ProfilePageTitle";
import ProfileHeaderCard from "../components/profile/ProfileHeaderCard";
import PersonalInformation from "../components/profile/PersonalInformation";
import ProfessionalCredentials from "../components/profile/ProfessionalCredentials";
import AboutMe from "../components/profile/AboutMe";
import PracticeDetails from "../components/profile/PracticeDetails";
import ProfileActions from "../components/profile/ProfileActions";    

const ProfileSettings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#f8fafc] min-h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1">
          <div className="max-w-[1000px] mx-auto p-4 sm:p-6 xl:p-12">
            <ProfilePageTitle />

            <ProfileHeaderCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7 space-y-6">
                <PersonalInformation />
                <ProfessionalCredentials />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <AboutMe/>
                <PracticeDetails/>
              </div>
            </div>
            <ProfileActions/>
            <div className="h-8"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileSettings;
