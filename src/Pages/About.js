import React from 'react';
import "./About.css";
import team1 from './images/team1.jpg';
import team2 from './images/team2.avif';
import team3 from './images/team3.avif';
import client1 from './images/client1.jpg';
import client2 from './images/client2.jpg';
import client3 from './images/client3.jpg';
import client4 from './images/client4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const team = [
  {
    name: "Priya Sharma",
    role: "Senior Hair Stylist",
    image: team1,
    desc: "10+ years in modern and bridal hair styling. Creative and trend-savvy."
  },
  {
    name: "Anjali Verma",
    role: "Skin Care Expert",
    image: team2,
    desc: "Passionate about flawless skin. Specializes in facials and treatments."
  },
  {
    name: "Meena Kapoor",
    role: "Makeup Artist",
    image: team3,
    desc: "Bridal makeover expert with a flair for elegance and detail."
  }
];

const reviews = [
  {
    name: "Sonal Raj",
    feedback: "Absolutely loved the makeover! Professional and kind staff.",
    rating: 5,
    image: client1
  },
  {
    name: "Divya Menon",
    feedback: "They made my wedding day so special. Great service!",
    rating: 5,
    image: client2
  },
  {
    name: "Ankita Sharma",
    feedback: "Clean, calm ambiance and super results every time!",
    rating: 4.8,
    image: client3
  },
  {
    name: "Reema Joshi",
    feedback: "Highly recommend Askarya for facials and hair styling!",
    rating: 5,
    image: client4
  }
];

const About = () => {
  return (
    <div className="about-section">
      <div className="our-story-wrapper">
        <div className="our-story-card">
          <h2>Our Story</h2>
          <p>
            Askayra was born from a dream to bring timeless beauty to every individual.
            From a humble beginning, we’ve grown into a trusted name, offering
            personalized beauty solutions with love and care.
          </p>
        </div>
      </div>

      <h6 className="section-title">Meet Our Experts</h6>
      <p className="section-subtitle">Beauty Professionals with Passion & Experience</p>
      <div className="team-container">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="desc">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rating-section">
        <h3>⭐ 4.9/5</h3>
        <p>Rated by 250+ happy clients</p>
      </div>
      <div className="review-slider">
        <h2 className="section-title">Happy Clients</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <img src={review.image} alt={review.name} className="review-img" />
                <h4>{review.name}</h4>
                <p className="stars">⭐ {review.rating}/5</p>
                <p className="review-text">"{review.feedback}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
