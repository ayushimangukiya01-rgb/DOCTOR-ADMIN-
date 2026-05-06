import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorAppointmentDetail = createAsyncThunk(
  "doctorAppointmentDetail/fetchDoctorAppointmentDetail",
  async () => {
    return await getData("/doctor/appointmentDetail");
  }
);

const doctorAppointmentDetailSlice = createSlice({
  name: "doctorAppointmentDetail",
initialState: {
  currentSymptoms: {
    symptoms: [],
    description: "",
   
  },

  medicalHistory: [],
   patientInfo: {},
   uploadedReports: [],

  loading: false,
  error: null,
},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorAppointmentDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorAppointmentDetail.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDoctorAppointmentDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorAppointmentDetailSlice.reducer;