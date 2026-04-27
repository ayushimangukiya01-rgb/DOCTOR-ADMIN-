import React from "react";

const UpgradeCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#004ac6] to-blue-700 p-6 rounded-xl text-white shadow-[0px_4px_12px_rgba(15,23,42,0.05)] relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="font-bold text-lg mb-2">Upgrade to MedPanel Pro</h4>
        <p className="text-sm text-white/80 mb-4">
          Get AI-powered diagnosis assistance and unlimited cloud storage.
        </p>
        <button className="bg-white text-[#004ac6] px-4 py-2 rounded-lg text-sm font-bold">
          Learn More
        </button>
      </div>

      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

      <div className="absolute top-2 right-2 opacity-20">
        <span
          className="material-symbols-outlined text-4xl"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          workspace_premium
        </span>
      </div>
    </div>
  );
};

export default UpgradeCard;