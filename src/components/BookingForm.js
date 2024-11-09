import React, { useState } from "react";
import { submitBooking } from "../services/api";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitBooking(formData);
      alert("Booking confirmed: " + JSON.stringify(response));
    } catch {
      alert("Error submitting booking");
    }
  };

  return (
    <form id="booking" className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Stay</h2>
      <label>Check-In</label>
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
      />
      <label>Check-Out</label>
      <input
        type="date"
        name="checkOut"
        value={formData.checkOut}
        onChange={handleChange}
      />
      <label>Guests</label>
      <input
        type="number"
        name="guests"
        value={formData.guests}
        min="1"
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
