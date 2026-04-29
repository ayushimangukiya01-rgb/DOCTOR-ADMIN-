import React from "react";

const IconButton = ({ icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center transition ${className}`}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
};

export default IconButton;