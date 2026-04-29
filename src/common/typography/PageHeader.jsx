import React from "react";

const PageHeader = ({ title, subtitle, variant = "default" }) => {
  const variants = {
    default: {
      title: "text-[24px] sm:text-[28px] font-semibold",
      subtitle: "text-sm",
    },
    large: {
      title:
        "text-[32px] sm:text-[36px] leading-[40px] sm:leading-[44px] tracking-[-0.02em] font-bold",
      subtitle: "text-[16px] leading-[24px]",
    },
  };

  return (
    <div className="mb-8">
      <h2
        className={`font-manrope text-slate-900 mb-2 ${variants[variant].title}`}
      >
        {title}
      </h2>

      <p className={`text-[#434655] ${variants[variant].subtitle}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;