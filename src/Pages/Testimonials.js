import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css';

import t1 from './images/t1.jpeg';
import t2 from './images/t2.jpeg';
import t3 from './images/t3.jpeg';

const testimonials = [
  {
    name: 'Priya',
    location: 'Coimbatore',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Askayra made my wedding day so special! The makeup was flawless and I felt like a queen.',
    image: t1
  },
  {
    name: 'Divya',
    location: 'Chennai',
    service: 'Facial Glow',
    rating: 4.8,
    text: 'My skin is literally glowing! Amazing service and so relaxing.',
    image: t2
  },
  {
    name: 'Aishwarya',
    location: 'Madurai',
    service: 'Hair Styling',
    rating: 5,
    text: 'I got the Grand Curls style and everyone loved it! Thank you Askarya!',
    image: t3
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="testimonials-section">
      <div className="intro-quote" data-aos="fade-down">
        <h2 className="testimonials-heading">What Our Clients Say</h2>
        <p className="testimonials-subheading">"Beauty is not in the face; beauty is a light in the heart." — Kahlil Gibran</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card" data-aos="zoom-in">
              <img src={testimonial.image} alt={testimonial.name} className="client-photo" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-info">
                <strong>{testimonial.name}</strong> — {testimonial.location}<br />
                <em>Service:</em> {testimonial.service} <br />
                <span className="stars">
                  {'★'.repeat(Math.floor(testimonial.rating))}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testimonial-cta" data-aos="fade-up">
        <h3>Want your own beauty transformation?</h3>
        <p>Join hundreds of happy clients who trusted Askarya for their special days.</p>
        <button className="book-btn" onClick={() => window.location.href = '/booking'}>
          Book Your Glow-Up Now
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
