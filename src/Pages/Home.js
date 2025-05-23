import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import { useNavigate } from 'react-router-dom';

import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';

import bridalMakeup from './images/bmakeup1.avif';
import mehndi from './images/mehandi1.avif';
import nailArt from './images/nail1.avif';
import facial from './images/gfacial.jpg';
import hairStyle from './images/hairstyle4.jpg';
import westernStyle from './images/bmakeup3.avif';
import sareeDraping from './images/serbridal.webp';
import spaMoment from './images/rfacial.jpg';

import offer1 from './images/luxury.avif';
import offer2 from './images/premi.jpg';
import offer3 from './images/prof.jpg';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-carousel">
      {/* Main Carousel */}
      <Carousel fade interval={3000} controls indicators>
      <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Slide 3" />
          <Carousel.Caption>
            <h3>Bridal Makeover Experts</h3>
            <p>Let us make your big day perfect</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Slide 1" />
          <Carousel.Caption>
            <h3>Glow Like Never Before</h3>
            <p>Discover our premium beauty treatments</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Slide 2" />
          <Carousel.Caption>
            <h3>Relax and Rejuvenate</h3>
            <p>Pamper yourself with our spa packages</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="Slide 4" />
          <Carousel.Caption>
            <h3>Trendy Hair Styling</h3>
            <p>Get the look you always dreamed of</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide5} alt="Slide 5" />
          <Carousel.Caption>
            <h3>Feel Fresh Every Day</h3>
            <p>Explore our facial and skin care services</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="why-choose">
        <h4>Why Choose Askayra Beauty?</h4>
        <p>We believe beauty comes from confidence. Our premium beauty services, expert staff, and luxurious ambience ensure you experience beauty at its best. Choose Askayra for a perfect transformation!</p>

        <div className="offer-cards">
          <div className="offer-card">
            <img src={offer1} alt="Special Offer 1" />
            <div className="offer-content">
              <h4>20% Off Bridal Packages</h4>
            </div>
          </div>
          <div className="offer-card">
            <img src={offer2} alt="Special Offer 2" />
            <div className="offer-content">
              <h4>Free Facial on Makeover</h4>
            </div>
          </div>
          <div className="offer-card">
            <img src={offer3} alt="Special Offer 3" />
            <div className="offer-content">
              <h4>Complimentary Hair Styling</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Our Best Services Section */}
      <div className="our-best-services">
        <h3>Our Best Services</h3>
        <div className="features-container">
          <div className="feature-card">
            <img src={bridalMakeup} alt="Bridal Makeup" className="feature-image" />
            <div className="feature-title">Bridal Makeup</div>
          </div>
          <div className="feature-card">
            <img src={mehndi} alt="Mehndi Art" className="feature-image" />
            <div className="feature-title">Mehndi Art</div>
          </div>
          <div className="feature-card">
            <img src={nailArt} alt="Nail Art" className="feature-image" />
            <div className="feature-title">Nail Art</div>
          </div>
          <div className="feature-card">
            <img src={facial} alt="Glow Facial" className="feature-image" />
            <div className="feature-title">Glow Facial</div>
          </div>
          <div className="feature-card">
            <img src={hairStyle} alt="Hair Styling" className="feature-image" />
            <div className="feature-title">Hair Styling</div>
          </div>
          <div className="feature-card">
            <img src={westernStyle} alt="Western Look" className="feature-image" />
            <div className="feature-title">Western Look</div>
          </div>
          <div className="feature-card">
            <img src={sareeDraping} alt="Saree Draping" className="feature-image" />
            <div className="feature-title">Saree Draping</div>
          </div>
          <div className="feature-card">
            <img src={spaMoment} alt="Spa Moments" className="feature-image" />
            <div className="feature-title">Spa Moments</div>
          </div>
        </div>
      </div>
      <section className="experience-section">
  <h6>Experience Luxury Like Never Before</h6>
  <p>Step into a world of elegance, comfort, and exclusive services tailored just for you. At Askayra, we redefine what it means to feel special.</p>
  <button onClick={()=>navigate('/Booking')} class="book-now-btn">Book Now</button>
</section>



    </div>
  );
};

export default Home;
