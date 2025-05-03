import { Outlet, Link } from "react-router-dom";
import {
  FaPhone, FaClock, FaMapMarkerAlt, FaHome, FaInfoCircle,
  FaConciergeBell, FaImages, FaUsers, FaQuestionCircle,
  FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Pages/Layout.css";
import { useEffect } from "react";


const Layout = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
          navCollapse.classList.remove("show");
        }
      });
    });
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-3 py-2">
        <div className="d-flex align-items-center gap-3 small">
          <span><FaPhone className="me-1" /> +01234 567 890</span>
          <span><FaMapMarkerAlt className="me-1" /> Jl. Chennai No. 18, TNagar</span>
        </div>
        <div className="small">
          <FaClock className="me-1" /> Monday - Saturday: 9.00 AM - 8.00 PM
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
        <div className="container-fluid px-4">
          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <BsStars className="brand-icon" />
            <span className="brand-name">Askayra</span>
          </Link>

          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav + Button */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item"><Link className="nav-link" to="/"><FaHome className="me-1" /> Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About"><FaInfoCircle className="me-1" /> About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Services"><FaConciergeBell className="me-1" /> Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Gallery"><FaImages className="me-1" /> Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Testimonials"><FaUsers className="me-1" /> Testimonials</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/FAQ"><FaQuestionCircle className="me-1" /> FAQ</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Contact"><FaPhoneAlt className="me-1" /> Contact</Link></li>
            </ul>
            <Link to="/Booking" className="btn btn-appointment">Make an Appointment</Link>
          </div>
        </div>
      </nav>

      <Outlet />

    {/* Footer */}
<footer className="footer bg-dark text-light mt-5 py-4">
  <div className="container text-center">
    <div className="row">
      {/* Q Links */}
      <div className="col-md-2">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Booking">Booking</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Testimonials">Testimonials</Link></li>
          <li><Link to="/FAQ">FAQ</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div className="col-md-2">
        <h5>Services</h5>
        <ul className="list-unstyled">
          <li>Manicure & Pedicure</li>
          <li>Facial Treatment</li>
          <li>Bridal Makeup</li>
          <li>Hair Styling</li>
          <li>Spa Therapy</li>
        </ul>
      </div>

      {/* Contact Us */}
      <div className="col-md-2">
        <h5>Contact Us</h5>
        <p>Email: info@askyra.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Location: Chennai, India</p>
      </div>

      {/* Follow Us */}
      <div className="col-md-2">
        <h5>Follow Us</h5>
        <div className="social-icons">
          <a href="https://www.facebook.com/"><FaFacebook /></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram /></a>
          <a href="https://x.com/i/flow/login"><FaTwitter /></a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="col-md-3 newsletter">
        <h5>Subscribe to Our Newsletter</h5>
        <input type="email" className="form-control mb-2" placeholder="Enter your email" />
        <Link to="/Contact">
        <button className="subscribe-btn">Subscribe</button>
         </Link>


      </div>
    </div>

    {/* hr Line */}
    <hr />

    {/* Cr */}
    <p>&copy; 2025 Askayra Beauty. All rights reserved.</p>
  </div>
</footer>

    </>
  );
};

export default Layout;
