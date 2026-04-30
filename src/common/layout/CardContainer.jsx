import React from "react";
import { commonStyles } from "../styles/commonStyles";

const CardContainer = ({ children, className = "", size = "default" }) => {
  const padding =
    size === "left" ? commonStyles.leftCardPadding : commonStyles.cardPadding;

  return (
    <div className={`${commonStyles.card} ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default CardContainer;