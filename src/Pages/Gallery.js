import React, { useRef } from 'react';
import './Gallery.css';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { FaCut, FaPaintBrush, FaSpa, FaHandSparkles,  FaImage } from 'react-icons/fa'; // React Icons

import hairstyle1 from './images/hairstyle1.avif';
import hairstyle2 from './images/hairstyle2.avif';
import hairstyle3 from './images/hairstyle3.avif';
import hairstyle4 from './images/hairstyle4.jpg';
import hairstyle5 from './images/hairstyle5.jpg';
import hairstyle6 from './images/hairstyle6.jpg';
import hairstyle7 from './images/hairstyle7.avif';
import hairstyle8 from './images/hairstyle8.jpg';


import bmakeup1 from './images/bmakeup1.avif';
import bmakeup2 from './images/bmakeup2.avif';
import bmakeup3 from './images/bmakeup3.avif';
import bmakeup4 from './images/bmakeup4.avif';
import bmakeup5 from './images/bmakeup5.avif';
import bmakeup6 from './images/bmakeup6.jpg';
import bmakeup7 from './images/bmakeup7.jpg';
import bmakeup8 from './images/bmakeup8.jpg';


import gfacial1 from './images/gfacial.jpg';
import dfacial2 from './images/dfacial.avif';
import ffacial3 from './images/ffacial.avif';
import dtfacial4 from './images/dtfacial.avif';
import rfacial6 from './images/rfacial.jpg';
import facial7 from './images/frfacial.avif';
import facial8 from './images/cfacial.avif';


import nail1 from './images/nail1.avif';
import nail2 from './images/nail2.avif';
import nail3 from './images/nail3.jpg';
import nail4 from './images/nail4.avif';
import nail5 from './images/nail5.avif';

import mehandi1 from './images/mehandi1.avif';
import mehandi2 from './images/mehandi2.jpg';
import mehandi3 from './images/mehandi3.avif';
import mehandi4 from './images/mehandi4.avif';
import mehandi5 from './images/mehandi5.jpg';

import mba1 from './images/mba1.jpg';
import mba2 from './images/mba2.jpg';
import mba3 from './images/mba3.jpg';
import mba4 from './images/mba4.jpg';
import mba5 from './images/mba5.avif';

const services = [
  {
    title: 'Hair Styling',
    icon: <FaCut />,
    items: [
      { image: hairstyle1, name: 'Classic Cut', price: '₹500', time: '30 mins', offer: '10% Off', rating: '4.5' },
      { image: hairstyle2, name: 'Layered Style', price: '₹800', time: '45 mins', offer: '15% Off', rating: '4.8' },
      { image: hairstyle3, name: 'Curls', price: '₹1200', time: '1 hr', offer: '20% Off', rating: '4.6' },
      { image: hairstyle4, name: 'French Bride', price: '₹1000', time: '45 mins', offer: '10% Off', rating: '4.7' },
      { image: hairstyle5, name: 'Hair Spa', price: '₹700', time: '30 mins', offer: '15% Off', rating: '4.9' },
      { image: hairstyle6, name: 'Flower Bride', price: '₹700', time: '30 mins', offer: '15% Off', rating: '4.9' },
      { image: hairstyle7, name: 'Jewel Bride', price: '₹700', time: '30 mins', offer: '15% Off', rating: '4.9' },
      { image: hairstyle8, name: 'Hair Spa', price: '₹700', time: '30 mins', offer: '15% Off', rating: '4.9' }
    ]
  },
  {
    title: 'Bridal Makeup',
    icon: <FaPaintBrush />, 
    items: [
      { image: bmakeup1, name: 'Bridal Glow', price: '₹5000', time: '2 hrs', offer: '25% Off', rating: '4.9' },
      { image: bmakeup2, name: 'HD Makeup', price: '₹7000', time: '2.5 hrs', offer: '20% Off', rating: '4.8' },
      { image: bmakeup3, name: 'Airbrush Makeup', price: '₹8000', time: '3 hrs', offer: '15% Off', rating: '5.0' },
      { image: bmakeup4, name: 'Reception Look', price: '₹6000', time: '2 hrs', offer: '10% Off', rating: '4.7' },
      { image: bmakeup5, name: 'Engagement Look', price: '₹4500', time: '1.5 hrs', offer: '10% Off', rating: '4.6' },
      { image: bmakeup6, name: 'Engagement Look', price: '₹4500', time: '1.5 hrs', offer: '10% Off', rating: '4.6' },
      { image: bmakeup7, name: 'Engagement Look', price: '₹4500', time: '1.5 hrs', offer: '10% Off', rating: '4.6' },
      { image: bmakeup8, name: 'Engagement Look', price: '₹4500', time: '1.5 hrs', offer: '10% Off', rating: '4.6' }
    ]
  },
  {
    title: 'Facial Glow',
    icon: <FaSpa />, 
    items: [
      { image: ffacial3, name: 'Fruit Facial', price: '₹800', time: '45 mins', offer: '10% Off', rating: '4.5' },
      { image: gfacial1, name: 'Gold Facial', price: '₹1200', time: '1 hr', offer: '15% Off', rating: '4.7' },
      { image: dfacial2, name: 'Diamond Facial', price: '₹1500', time: '1 hr', offer: '20% Off', rating: '4.9' },
      { image: dtfacial4, name: 'Oxy Facial', price: '₹1100', time: '50 mins', offer: '10% Off', rating: '4.8' },
      { image: rfacial6, name: 'Rose Facial', price: '₹500', time: '30 mins', offer: '5% Off', rating: '4.6' },
      { image: facial7, name: 'Clean-up', price: '₹500', time: '30 mins', offer: '5% Off', rating: '4.6' },
      { image: facial8, name: 'Cucumber Facial', price: '₹500', time: '30 mins', offer: '5% Off', rating: '4.6' },
    ]
  },
  {
    title: 'Nail Art',
    icon: <FaHandSparkles />, 
    items: [
      { image: nail1, name: 'Gel Nails', price: '₹1000', time: '45 mins', offer: '10% Off', rating: '4.7' },
      { image: nail2, name: 'Acrylic Nails', price: '₹1200', time: '1 hr', offer: '15% Off', rating: '4.8' },
      { image: nail3, name: 'Nail Extension', price: '₹1500', time: '1.5 hrs', offer: '20% Off', rating: '4.9' },
      { image: nail4, name: 'French Tips', price: '₹900', time: '45 mins', offer: '10% Off', rating: '4.6' },
      { image: nail5, name: 'Glitter Nails', price: '₹1100', time: '50 mins', offer: '15% Off', rating: '4.7' }
    ]
  },
  {
    title: 'Mehandi',
    icon: <FaPaintBrush />, 
    items: [
      { image: mehandi1, name: 'Bridal Mehndi', price: '₹2500', time: '2 hrs', offer: '20% Off', rating: '4.8' },
      { image: mehandi2, name: 'Arabic Design', price: '₹1200', time: '1 hr', offer: '15% Off', rating: '4.7' },
      { image: mehandi3, name: 'Rajasthani Design', price: '₹1500', time: '1.5 hrs', offer: '10% Off', rating: '4.6' },
      { image: mehandi4, name: 'Minimalist Design', price: '₹800', time: '45 mins', offer: '10% Off', rating: '4.5' },
      { image: mehandi5, name: 'Kids Mehndi', price: '₹500', time: '30 mins', offer: '5% Off', rating: '4.4' }
    ]
  },
  {
    title: 'Makeover Before/After',
    icon: <FaImage />, 
    items: [
      { image: mba1, name: 'Basic Makeover', price: '₹2500', time: '1 hr', offer: '20% Off', rating: '4.8' },
      { image: mba2, name: 'Glam Look', price: '₹3000', time: '1.5 hrs', offer: '15% Off', rating: '4.9' },
      { image: mba3, name: 'Photo Shoot Ready', price: '₹3500', time: '2 hrs', offer: '10% Off', rating: '5.0' },
      { image: mba4, name: 'Casual Makeover', price: '₹2000', time: '45 mins', offer: '10% Off', rating: '4.7' },
      { image: mba5, name: 'Party Look', price: '₹2800', time: '1 hr', offer: '15% Off', rating: '4.8' }
    ]
  }
];
const Gallery = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="gallery-container">
      {services.map((section, index) => (
        <div key={index} className="gallery-section">
          <h6 className="section-title">
            {section.icon} {section.title}
          </h6>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="gallery-swiper"
          >
            {section.items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="gallery-card">
                  <img src={item.image} alt={item.name} className="card-image" />
                  <div className="card-overlay">
                    <h4>{item.name}</h4>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Time:</strong> {item.time}</p>
                    <p><strong>Offer:</strong> {item.offer}</p>
                    <p><strong>Rating:</strong> {item.rating} ⭐</p>
                    <button className="book-btn" onClick={() => navigate('/booking')}>
                      Book Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev" ref={prevRef}></div>
            <div className="swiper-button-next" ref={nextRef}></div>
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Gallery;