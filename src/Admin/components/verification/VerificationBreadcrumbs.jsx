// src/Admin/components/verification/VerificationBreadcrumbs.jsx
import React from "react";
import { Link } from "react-router-dom";

const VerificationBreadcrumbs = () => {
  return (
    <nav className="flex flex-wrap items-center gap-2 mb-6 text-outline font-label-sm">
      <Link to="/admin/doctors" className="hover:text-primary">
        Doctors
      </Link>

      <span className="material-symbols-outlined text-[16px]">
        chevron_right
      </span>

      <span className="hover:text-primary">Pending Verification</span>

      <span className="material-symbols-outlined text-[16px]">
        chevron_right
      </span>

      <span className="text-on-surface">Dr. Sarah Jenkins</span>
    </nav>
  );
};

export default VerificationBreadcrumbs;