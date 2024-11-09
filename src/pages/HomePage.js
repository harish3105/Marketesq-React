
import React from 'react';
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import TestimonialSection from '../components/TestimonialSection';
import BookingForm from '../components/BookingForm';

const HomePage = () => (
  <div>
    <Header />
    <main>
      <ServiceSection />
      <TestimonialSection />
      <BookingForm />
    </main>
  </div>
);

export default HomePage;
