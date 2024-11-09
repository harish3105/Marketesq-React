import React, { useState } from "react";
import axios from "axios";
import "../styles/OrderForm.css";

const OrderForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        console.log("Order submitted", response);
        alert("Booking confirmed!");
      })
      .catch((error) => console.error("Error submitting order", error));
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Book Your Stay</h2>
      <label>Check-In Date</label>
      <input
        type="date"
        name="checkIn"
        value={formData.checkIn}
        onChange={handleChange}
      />
      <label>Check-Out Date</label>
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

export default OrderForm;
