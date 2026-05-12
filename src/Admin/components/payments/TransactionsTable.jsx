// src/Admin/components/payments/TransactionsTable.jsx
import React, { useEffect, useState } from "react";
import TableContainer from "../../../common/layout/TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminPayments } from "../../../redux/admin/payments/paymentSlice";

const TransactionsTable = ({
  searchTerm,
  setSearchTerm,
  status,
  setStatus,
  department,
  setDepartment,
  departments,
  filteredTransactions,
}) => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.adminPayments);

  const tableTransactions = filteredTransactions || transactions;

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);

  // PAGINATION LIMIT
  const itemsPerPage = 5;

  // PAGINATION TOTAL PAGES
  const totalPages = Math.ceil(tableTransactions.length / itemsPerPage);

  // PAGINATION SAFE PAGE
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);

  // PAGINATION START INDEX
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;

  // PAGINATION CURRENT DATA
  const currentTransactions = tableTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // PAGINATION PAGE NUMBERS
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    if (transactions.length === 0) {
      dispatch(fetchAdminPayments());
    }
  }, [dispatch, transactions.length]);

  // PAGINATION RESET WHEN FILTER DATA CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [tableTransactions.length]);

  return (
    <TableContainer variant="admin" className="min-w-0 overflow-hidden">
      <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h3 className="font-h3 text-h3 text-on-surface">Transactions</h3>
          <p className="text-body-sm text-secondary">
            Review and manage patient payments
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">
          {/* SEARCH */}
          <div className="relative w-full sm:w-[260px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
              search
            </span>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-white text-[13px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* STATUS FILTER */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-outline-variant rounded-lg bg-white text-[13px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option>All Status</option>
            <option>COMPLETED</option>
            <option>PENDING</option>
            <option>FAILED</option>
          </select>

          {/* DEPARTMENT FILTER */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-outline-variant rounded-lg bg-white text-[13px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option>All Departments</option>
            {departments.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[1050px] text-left border-collapse">
          <thead className="bg-slate-50">
            <tr className="border-b border-outline-variant/30">
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Date
              </th>
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Doctor
              </th>
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Patient
              </th>
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Amount
              </th>
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Commission
              </th>
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Status
              </th>
              <th className="px-6 py-4 font-label-md text-secondary whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant/20">
            {currentTransactions.length > 0 ? (
              currentTransactions.map((item, index) => (
                <tr
                  key={`${item.patientId}-${item.time}-${startIndex + index}`}
                  className="odd:bg-white even:bg-slate-50/40 hover:bg-blue-50/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-[13px] font-medium text-on-surface">
                      {item.date}
                    </div>
                    <div className="text-[11px] text-secondary">
                      {item.time}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary font-semibold text-[12px]">
                        {item.doctorInitial}
                      </div>

                      <div>
                        <div className="text-[13px] font-medium text-on-surface">
                          {item.doctor}
                        </div>
                        <div className="text-[11px] text-secondary">
                          {item.department}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-[13px] text-on-surface">
                      {item.patient}
                    </div>
                    <div className="text-[11px] text-secondary">
                      {item.patientId}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-[13px] font-semibold text-on-surface">
                      {item.amount}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-[13px] text-secondary">
                      {item.commission}{" "}
                      <span className="text-[10px] bg-secondary-container px-1.5 py-0.5 rounded">
                        {item.rate}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${item.statusClass}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.dotClass}`}
                      ></span>
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-center text-[14px] text-secondary"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="p-5 sm:p-6 border-t border-outline-variant/20 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end bg-surface-container-lowest">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={safeCurrentPage === 1}
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-[13px] font-medium text-secondary hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-[13px] font-medium transition-colors ${
                  safeCurrentPage === page
                    ? "bg-primary text-white shadow-sm"
                    : "border border-outline-variant/40 bg-white text-secondary hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={safeCurrentPage === totalPages}
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-[13px] font-medium text-secondary hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </TableContainer>
  );
};

export default TransactionsTable;