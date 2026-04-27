import React from "react";
import VideoGrid from "./VideoGrid";
import CallControls from "./CallControls";

const VideoWorkspace = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 p-4 sm:p-6 flex flex-col gap-6 overflow-y-auto">
        <div>
          <VideoGrid />
          <CallControls />
        </div>

        <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-slate-400">
          Clinical notes will come here
        </div>
      </div>

      <aside className="w-full lg:w-[380px] bg-white border-l border-slate-100">
        <div className="p-6 text-slate-400 text-center">
          Message panel will come here
        </div>
      </aside>
    </div>
  );
};

export default VideoWorkspace;