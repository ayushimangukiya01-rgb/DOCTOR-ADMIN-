// src/Admin/components/payments/PaymentsSummaryGrid.jsx
import React from "react";

const cards = [
  {
    title: "Total Revenue",
    value: "$124,592.00",
    icon: "account_balance_wallet",
    iconClass: "bg-primary/10 text-primary",
    trend: "+12.5%",
    footer: "Updated 2 mins ago",
  },
  {
    title: "MedPanel Commission",
    value: "$18,688.80",
    icon: "percent",
    iconClass: "bg-tertiary/10 text-tertiary",
    trend: "+4.2%",
    footer: "Across 412 bookings",
  },
  {
    title: "Payouts Pending",
    value: "$42,300.15",
    icon: "pending_actions",
    iconClass: "bg-secondary-container text-on-secondary-container",
    footer: "Review Batches",
    footerIcon: "chevron_right",
  },
  {
    title: "Billable Providers",
    value: "86 Active",
    icon: "medical_services",
    iconClass: "bg-surface-container-highest text-primary",
    doctors: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkkhVZHu9Cu982ITX4RoVsBWl-EXSZLRLN1NvGLW_Q6eSlVT52vOmWQlgkOH5cZcQjzcRiUf7EK7qjRcB_mW2vVJ0X9MV-548cJ_zf2iRhcQHBc2sl2Sci5nX3JKDsvqCAF1gva5Yqh0ZeVYzGYToDjw8lBMtHPtBehLoUnPfZ-Lmt5sGzrJDyF8xtN0_AlreKLj27VfFCOIfIHrCNNBkLFPW9imBkXIzxmKt7069Q7RiPTZ32qMa-MVaiFBEa5Bgcg9pWpYOOc77A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3GQKUoTwOT5O4JUNWo6U09CR74xTWIF1E7xHI9TjORguwQ9mjASjLBqN5c8BnKpF5B11vrD-y0fW4HCQqFh26BzkzZc7w9wJ3ukU3WnpsVeTrNg9XQu2x9jBMTWXFTw4Hwzbu1swSZbsoe2Kg0u4ZsvNIvvi9tKKyOsKcqdMT3-gFl8lYdKJgCKe0yLzZ6VJbGaLHacqH3th9NsHPVPGzISBwJhu-Ea5YTxNzUuvAk7teUGmVWr-bXBoD6yeZWJPhCMQJ4mWbJvyZ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwBQYAp0vc6KOlz2IZEfzHeUXh5QkhMXzTpF7Y3YyKFO7kOECVt7Aq7CMvoz7hVUmG3AoRAUQvxjW27vWDKW_bX876wLdtE0MCNbxbCgepAIv4YWCE1KZC4oO1-4aGrrE6tqCoy_FZbOwRcr-_dcAcOgBujEoUeNlDKQQeQ3-mVrdeNdis7Z6mMCsf2kzfZEqRLxcSrtkQNtFQbwXOwkZv6g_A4R0LLNqrPAinJr6whI5AwaO-hjSlIi--usC4hMrQ5Ts5MAEgmT8A",
    ],
  },
];

const PaymentsSummaryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between min-h-[190px] min-w-0"
        >
          <div>
            <div className="flex justify-between items-start gap-4">
              <span className={`p-2 rounded-lg ${card.iconClass}`}>
                <span className="material-symbols-outlined">{card.icon}</span>
              </span>

              {card.trend && (
                <span className="text-tertiary-container font-label-sm flex items-center gap-1 whitespace-nowrap">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  {card.trend}
                </span>
              )}
            </div>

            <p className="text-secondary font-label-md mt-4">{card.title}</p>
            <h2 className="font-h2 text-h2 text-on-surface truncate">
              {card.value}
            </h2>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-50">
            {card.doctors ? (
              <div className="flex -space-x-2">
                {card.doctors.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Doctor ${index + 1}`}
                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                  />
                ))}

                <div className="h-6 w-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[8px] font-bold">
                  +83
                </div>
              </div>
            ) : card.footerIcon ? (
              <button className="text-primary font-label-md hover:underline flex items-center gap-1">
                {card.footer}
                <span className="material-symbols-outlined text-sm">
                  {card.footerIcon}
                </span>
              </button>
            ) : (
              <p className="text-body-sm text-secondary">{card.footer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentsSummaryGrid;