// src/Admin/pages/PaymentsPage.jsx
import React from "react";
import PaymentsHeader from "../components/payments/PaymentsHeader";
import PaymentsSummaryGrid from "../components/payments/PaymentsSummaryGrid";
import TransactionsTable from "../components/payments/TransactionsTable";
import PaymentsFooterCards from "../components/payments/PaymentsFooterCards";

const PaymentsPage = () => {
  return (
    <>
      <PaymentsHeader />
      <PaymentsSummaryGrid />
      <TransactionsTable />
      <PaymentsFooterCards />
    </>
  );
};

export default PaymentsPage;