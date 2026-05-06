import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorPatients = createAsyncThunk(
  "doctorPatients/fetchDoctorPatients",
  async () => {
    return await getData("/doctor/patients");
  }
);

const doctorPatientsSlice = createSlice({
  name: "doctorPatients",
  initialState: {
    tableHeaders: [],
    patients: [],
    stats: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorPatients.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDoctorPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorPatientsSlice.reducer;