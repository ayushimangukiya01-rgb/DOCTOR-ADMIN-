// src/Admin/components/payments/PaymentsFooterCards.jsx
import React from "react";
import CardContainer from "../../../common/layout/CardContainer";

const payoutMethods = [
  {
    icon: "credit_card",
    title: "Direct Deposit",
    description: "Connected: Chase Bank (**** 4421)",
    badge: "ACTIVE",
  },
  {
    icon: "account_balance",
    title: "SWIFT Transfer",
    description: "Primary for International Docs",
    action: "Manage",
  },
];

const PaymentsFooterCards = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-primary-container text-on-primary-container p-5 sm:p-6 rounded-xl flex items-center gap-6 min-w-0">
        <div className="flex-1 min-w-0">
          <h4 className="font-h3 text-h3 mb-2">Need to automate payouts?</h4>

          <p className="text-body-md opacity-90 mb-4">
            Set up recurring bank transfers for all verified providers to reduce
            manual administrative load.
          </p>

          <button className="px-6 py-2.5 bg-white text-primary rounded-lg font-label-md shadow-lg">
            Configure Auto-Payouts
          </button>
        </div>

        <div className="hidden xl:block w-32 h-32 opacity-20 shrink-0">
          <span className="material-symbols-outlined !text-[128px]">
            account_balance
          </span>
        </div>
      </div>

      <CardContainer variant="admin" className="p-5 sm:p-6">
        <h4 className="font-label-md text-on-surface mb-4">
          Payout Method Status
        </h4>

        <div className="space-y-4">
          {payoutMethods.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    {item.icon}
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="font-label-md text-on-surface truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-secondary truncate">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.badge ? (
                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded shrink-0">
                  {item.badge}
                </span>
              ) : (
                <button className="text-primary font-label-md text-xs hover:underline shrink-0">
                  {item.action}
                </button>
              )}
            </div>
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default PaymentsFooterCards;