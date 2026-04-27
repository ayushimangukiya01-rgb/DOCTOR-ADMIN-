import React from "react";
import Topbar from "../components/dashboard/Topbar";
import VideoWorkspace from "../components/video/VideoWorkspace";

const VideoConsultation = () => {
  return (
    <div className="bg-[#faf8ff] min-h-screen flex flex-col">
      <Topbar />

      <main className="flex-1 overflow-hidden">
        <VideoWorkspace/>
      </main>
    </div>
  );
};

export default VideoConsultation;