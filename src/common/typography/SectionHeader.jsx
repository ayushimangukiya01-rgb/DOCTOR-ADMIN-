import React from "react";

const SectionHeader = ({
  icon,
  title,
  actionText,
  headingType = "h3",
}) => {
  const HeadingTag = headingType;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
      <div className="flex items-center gap-3">
        {icon && (
          <span className="material-symbols-outlined text-[#004ac6]">
            {icon}
          </span>
        )}

        <HeadingTag className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
          {title}
        </HeadingTag>
      </div>

      {actionText && (
        <button className="text-[#004ac6] text-sm font-semibold hover:underline text-left sm:text-right">
          {actionText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;