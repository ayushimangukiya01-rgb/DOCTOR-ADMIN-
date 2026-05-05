// src/redux/admin/patients/patientSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mockPatients, mockPatientStats } from "../../../data/adminMockData";

export const fetchAdminPatients = createAsyncThunk(
  "adminPatients/fetchAdminPatients",
  async () => {
    return {
      patients: mockPatients,
      stats: mockPatientStats,
    };
  }
);

const patientSlice = createSlice({
  name: "adminPatients",
  initialState: {
    patients: [],
    stats: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = action.payload.patients;
        state.stats = action.payload.stats;
      })
      .addCase(fetchAdminPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default patientSlice.reducer;