import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <h1>Brisphere</h1>
    <nav>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#booking">Book Your Stay</a>
    </nav>
  </header>
);

export default Header;
