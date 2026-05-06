import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchAdminVerification = createAsyncThunk(
  "adminVerification/fetchAdminVerification",
  async () => await getData("/admin/verification")
);

const verificationSlice = createSlice({
  name: "adminVerification",
  initialState: {
    doctorProfile: {},
    professionalSummary: {},
    submittedDocuments: [],
    auditTimeline: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminVerification.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchAdminVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default verificationSlice.reducer;