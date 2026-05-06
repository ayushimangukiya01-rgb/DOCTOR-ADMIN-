import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchAdminAppointments = createAsyncThunk(
  "adminAppointments/fetchAdminAppointments",
  async () => await getData("/admin/appointments")
);

const appointmentSlice = createSlice({
  name: "adminAppointments",
  initialState: {
    appointments: [],
    stats: [],
    topDoctors: [],
    appointmentTypes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminAppointments.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchAdminAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default appointmentSlice.reducer;