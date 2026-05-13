import React, { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";
import TableContainer from "../../common/layout/TableContainer";
import TransactionHeaderCell from "../../common/display/TransactionHeaderCell";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorEarnings } from "../../redux/doctor/earnings/doctorEarningsSlice";

const TransactionTable = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.doctorEarnings);

  // new: pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // new: pagination limit
  const itemsPerPage = 5;

  // new: pagination calculation
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    if (transactions.length === 0) {
      dispatch(fetchDoctorEarnings());
    }
  }, [dispatch, transactions.length]);

  return (
    <TableContainer className="overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-slate-100 bg-white">
        <div>
          <h3 className="font-manrope text-[20px] leading-[28px] font-semibold text-slate-900">
            Recent Transactions
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Track latest patient payments and payout status.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100">
              <TransactionHeaderCell>Patient</TransactionHeaderCell>
              <TransactionHeaderCell>Date</TransactionHeaderCell>
              <TransactionHeaderCell>Reference ID</TransactionHeaderCell>
              <TransactionHeaderCell>Amount</TransactionHeaderCell>
              <TransactionHeaderCell>Status</TransactionHeaderCell>
              <TransactionHeaderCell>Action</TransactionHeaderCell>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {currentTransactions.map((transaction) => (
              <TransactionRow
                key={transaction.reference}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* new: pagination */}
      {totalPages > 1 && (
        <div className="px-4 sm:px-6 lg:px-8 py-4 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-slate-50/40">
          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, transactions.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {transactions.length}
            </span>{" "}
            transactions
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={safeCurrentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-semibold transition ${
                    safeCurrentPage === page
                      ? "bg-[#004ac6] text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              type="button"
              disabled={safeCurrentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      )}
    </TableContainer>
  );
};

export default TransactionTable;