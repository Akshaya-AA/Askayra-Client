import React from 'react';
import './Services.css';
import {
  FaSpa, FaCut, FaAirFreshener, FaPaintBrush, FaFeatherAlt,
  FaMagic, FaHandSparkles, FaHeartbeat, FaBrush, FaSmile, FaStar
} from 'react-icons/fa';

import hairImg from './images/serhaircut.jpg';
import facialImg from './images/serfacial.png';
import bridalImg from './images/serbridal.webp';
import colorImg from './images/serhaircolour.jpg';
import waxingImg from './images/waxing.png';
import nailsImg from './images/sernail.jpg';
import nailArtImg from './images/sernailart.jpg';
import spaImg from './images/serspa.jpg';
import bodyImg from './images/serbody.jpg';
import mehndiImg from './images/sermehandi.jpg';
import consultImg from './images/serconsul.jpg';
import comboImg from './images/sercombo.jpg';

const services = [
  {
    icon: <FaCut />,
    title: 'Hair Styling & Haircut',
    desc: 'Trendy cuts, professional styles, and bridal hairdos.',
    bg: hairImg,
  },
  {
    icon: <FaAirFreshener />,
    title: 'Facials & Skin Care',
    desc: 'Glow-enhancing facials and personalized skin treatments.',
    bg: facialImg,
  },
  {
    icon: <FaMagic />,
    title: 'Bridal Makeup',
    desc: 'Bridal beauty packages with flawless finish.',
    bg: bridalImg,
  },
  {
    icon: <FaPaintBrush />,
    title: 'Hair Coloring & Highlights',
    desc: 'Bold shades, soft tones, and stylish highlights.',
    bg: colorImg,
  },
  {
    icon: <FaFeatherAlt />,
    title: 'Threading & Waxing',
    desc: 'Smooth and painless hair removal services.',
    bg: waxingImg,
  },
  {
    icon: <FaHandSparkles />,
    title: 'Manicure & Pedicure',
    desc: 'Perfect nail care for your hands and feet.',
    bg: nailsImg,
  },
  {
    icon: <FaBrush />,
    title: 'Nail Art & Extension',
    desc: 'Trendy nail art and elegant nail extensions.',
    bg: nailArtImg,
  },
  {
    icon: <FaSpa />,
    title: 'Spa & Relaxation',
    desc: 'Massages and body therapies for stress relief.',
    bg: spaImg,
  },
  {
    icon: <FaHeartbeat />,
    title: 'Body Polishing & Cleanup',
    desc: 'Skin rejuvenation through gentle polishing.',
    bg: bodyImg,
  },
  {
    icon: <FaSmile />,
    title: 'Saree Draping & Mehndi',
    desc: 'Traditional styling and creative mehndi art.',
    bg: mehndiImg,
  },
  {
    icon: <FaStar />,
    title: 'Beauty Consultation',
    desc: 'Get expert advice for your personalized beauty needs.',
    bg: consultImg,
  },
  {
    icon: <FaStar />,
    title: 'Hair & Skin Spa Combo',
    desc: 'Ultimate rejuvenation with hair and skin treatment.',
    bg: comboImg,
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">Explore our premium beauty treatments tailored for you</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={service.title}  // Use the title or any unique identifier as the key
            style={{ backgroundImage: `url(${service.bg})` }}
          >
            <div className="small-icon">{service.icon}</div>
            <div className="overlay">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
