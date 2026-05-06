// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // change later if needed
  timeout: 10000,
});

export default axiosInstance;