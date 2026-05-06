import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorAppointments = createAsyncThunk(
  "doctorAppointments/fetchDoctorAppointments",
  async () => {
    return await getData("/doctor/appointments");
  }
);

const doctorAppointmentSlice = createSlice({
  name: "doctorAppointments",
  initialState: {
    stats: [],
    appointments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorAppointments.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDoctorAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorAppointmentSlice.reducer;