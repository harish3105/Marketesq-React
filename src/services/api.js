// src/services/api.js
import axios from "axios";

export const submitBooking = async (data) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw error;
  }
};
