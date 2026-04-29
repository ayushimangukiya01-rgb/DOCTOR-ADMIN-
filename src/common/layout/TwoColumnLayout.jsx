import React from "react";

const TwoColumnLayout = ({ left, right }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 space-y-6">
        {left}
      </div>

      <div className="col-span-12 lg:col-span-8 space-y-6">
        {right}
      </div>
    </div>
  );
};

export default TwoColumnLayout;