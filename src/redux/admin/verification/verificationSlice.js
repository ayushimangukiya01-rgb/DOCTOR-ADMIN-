// src/redux/admin/verification/verificationSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  mockDoctorProfile,
  mockProfessionalSummary,
  mockSubmittedDocuments,
  mockAuditTimeline,
} from "../../../data/adminMockData";

export const fetchAdminVerification = createAsyncThunk(
  "adminVerification/fetchAdminVerification",
  async () => {
    return {
      doctorProfile: mockDoctorProfile,
      professionalSummary: mockProfessionalSummary,
      submittedDocuments: mockSubmittedDocuments,
      auditTimeline: mockAuditTimeline,
    };
  }
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
        state.doctorProfile = action.payload.doctorProfile;
        state.professionalSummary = action.payload.professionalSummary;
        state.submittedDocuments = action.payload.submittedDocuments;
        state.auditTimeline = action.payload.auditTimeline;
      })
      .addCase(fetchAdminVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default verificationSlice.reducer;