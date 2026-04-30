// src/common/ui/IconButton.jsx
import React from "react";

const IconButton = ({
  icon,
  className = "",
  variant = "default",
  children,
  ...props
}) => {
  const adminClass =
    "p-1.5 rounded-lg transition-colors inline-flex items-center justify-center";

  const defaultClass =
    "inline-flex items-center justify-center rounded-lg transition-colors";

  return (
    <button
      className={`${variant === "admin" ? adminClass : defaultClass} ${className}`}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      )}
      {children}
    </button>
  );
};

export default IconButton;