import React from "react";

const ProfileTag = ({ children, variant = "blue" }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-green-50 text-green-600 border-green-100",
  };

  return (
    <span
      className={`px-3 py-1 text-[12px] font-semibold rounded-full border uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

export default ProfileTag;