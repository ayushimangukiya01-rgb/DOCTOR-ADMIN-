// src/redux/admin/payments/paymentSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  mockPaymentsSummary,
  mockTransactions,
} from "../../../data/adminMockData";

export const fetchAdminPayments = createAsyncThunk(
  "adminPayments/fetchAdminPayments",
  async () => {
    return {
      summary: mockPaymentsSummary,
      transactions: mockTransactions,
    };
  }
);

const paymentSlice = createSlice({
  name: "adminPayments",
  initialState: {
    summary: [],
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload.summary;
        state.transactions = action.payload.transactions;
      })
      .addCase(fetchAdminPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;