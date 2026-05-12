import React from "react";

const SectionHeader = ({
  icon,
  title,
  subtitle,
  actionText,
  headingType = "h3",
}) => {
  const HeadingTag = headingType;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6 font-extrabold">
      <div className="flex items-start gap-3">
        {icon && (
          <span className="material-symbols-outlined text-[#004ac6] mt-1">
            {icon}
          </span>
        )}

        <div>
          <HeadingTag className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            {title}
          </HeadingTag>

          {subtitle && (
            <p className="mt-1 text-[14px] leading-5 font-normal text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
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