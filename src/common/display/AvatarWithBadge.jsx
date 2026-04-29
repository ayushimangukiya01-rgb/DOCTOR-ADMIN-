import React from "react";

const AvatarWithBadge = ({ image, alt, badge }) => {
  return (
    <div className="relative mx-auto lg:mx-0 shrink-0">
      <img
        src={image}
        alt={alt}
        className="w-20 h-20 rounded-full object-cover grayscale-[0.2]"
      />

      <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#006e2f] rounded-full border-4 border-white flex items-center justify-center">
        <span className="text-[10px] text-white font-bold">{badge}</span>
      </div>
    </div>
  );
};

export default AvatarWithBadge;