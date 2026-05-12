// src/Admin/pages/PaymentsPage.jsx
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PaymentsHeader from "../components/payments/PaymentsHeader";
import PaymentsSummaryGrid from "../components/payments/PaymentsSummaryGrid";
import TransactionsTable from "../components/payments/TransactionsTable";

const PaymentsPage = () => {
  const { transactions } = useSelector((state) => state.adminPayments);

  // FILTER STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All Status");
  const [department, setDepartment] = useState("All Departments");

  // FILTERED TRANSACTIONS DATA
  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const searchValue = searchTerm.toLowerCase();

      const matchSearch =
        item.doctor.toLowerCase().includes(searchValue) ||
        item.patient.toLowerCase().includes(searchValue) ||
        item.patientId.toLowerCase().includes(searchValue) ||
        item.department.toLowerCase().includes(searchValue) ||
        item.status.toLowerCase().includes(searchValue);

      const matchStatus = status === "All Status" || item.status === status;

      const matchDepartment =
        department === "All Departments" || item.department === department;

      return matchSearch && matchStatus && matchDepartment;
    });
  }, [transactions, searchTerm, status, department]);

  const departments = [...new Set(transactions.map((item) => item.department))];

  return (
    <>
      <PaymentsHeader />
      <PaymentsSummaryGrid />

      <TransactionsTable
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        status={status}
        setStatus={setStatus}
        department={department}
        setDepartment={setDepartment}
        departments={departments}
        filteredTransactions={filteredTransactions}
      />
    </>
  );
};

export default PaymentsPage;