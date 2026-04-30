// src/Admin/components/payments/PaymentsHeader.jsx
import React from "react";

const PaymentsHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-[30px] leading-[38px] tracking-[-0.02em] font-bold text-on-surface">
        Financial Overview
      </h1>

      <p className="text-[14px] leading-5 text-secondary mt-1">
        Real-time revenue tracking and commission management
      </p>
    </div>
  );
};

export default PaymentsHeader;