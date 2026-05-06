// src/api/apiHandler.js
import axiosInstance from "./axiosInstance";
import { USE_MOCK_DATA } from "../config/dataSource";
import mockData from "../mock/mockData.json";

export const getData = async (url) => {
  // ✅ If using mock data
  if (USE_MOCK_DATA) {
    console.log("Using MOCK:", url);

    // remove leading slash
    const cleanUrl = url.startsWith("/") ? url.slice(1) : url;

    // split path
    const keys = cleanUrl.split("/");

    let data = mockData;
  

    // dynamic access
    for (const key of keys) {
      data = data?.[key];
    }

    if (!data) {
      console.warn("Mock data not found for:", url);
    }

    return data;
  }

  // ✅ If using real API
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};