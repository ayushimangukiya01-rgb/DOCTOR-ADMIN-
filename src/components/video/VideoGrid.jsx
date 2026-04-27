import React from "react";

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[420px] lg:h-[500px]">
      {/* Patient Feed */}
      <div className="relative rounded-xl overflow-hidden bg-slate-900 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] group min-h-[260px]">
        <img
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          alt="Patient video"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqe9Z1HtPOomt7LkoZqnJS0gw52B3DcGayuUES-uoRQIhm0uItmKg0qnWNoc5OhJcpVwIcYRe3VFyVuc0CSwXQqcTY1pgbAW1p4UGZGn80n3ADDjd3Fs7Xv1TEB-XnnYLQDQNAjOoQTdq8ZZmo3_VEixyr7Zeqp5KoECfHqSEZPBjtZPWzUcWpey26_uE2PW8KdfmgKXxmxcc4JvQ6nDHhuHC2k3p0S68Y8CSfyc2BNW_OqoXzfFuLgCaB9CGdy0u5R2YyzLGyE1B0"
        />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <span className="text-white text-[11px] font-semibold tracking-[0.05em] uppercase">
            Sarah Jenkins (Patient)
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <div className="bg-black/40 backdrop-blur-sm p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </div>
        </div>
      </div>

      {/* Doctor Feed */}
      <div className="relative rounded-xl overflow-hidden bg-slate-900 shadow-[0px_4px_12px_rgba(15,23,42,0.05)] group min-h-[260px]">
        <img
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          alt="Doctor video"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuArtxQ7NnwAGwiyMeBOJfj-PVAgPQFUrtG90iYmBDeQekCqrfaydNUPbxuO9UubgRDThxJBkSP-8in5kjUREhhZoYBXLRJsQSs_fXMgsS_FUWL6BARen6oATF2fQwIAma4zJCaMRmePsace5aORjjYiMrFKe61UGpI5D8k5e7x2YUYCPN9s2Q_7kMuNGn-GGB7tFa0TWOWN1GRKDcpNdX_ZykrrUioO6ZIQ5UZDLvlZ19I3hm3gibhBpDtopcULOVgyUfWRDtoQE83E"
        />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <span className="text-white text-[11px] font-semibold tracking-[0.05em] uppercase">
            Dr. Smith (You)
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              videocam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;