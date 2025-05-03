import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully! ✨');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message 😢');
    });

    e.target.reset();
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-icon">
          <i className="fas fa-user"></i>
          <input type="text" name="name" placeholder="Your Name" required minLength={2} />
        </div>
        <div className="input-icon">
          <i className="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="input-icon">
          <i className="fas fa-pen"></i>
          <input type="text" name="title" placeholder="Subject" required minLength={10} />
        </div>
        <div className="input-icon">
          <i className="fas fa-comment-dots" style={{ top: '15px' }}></i>
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="send-btn">Send Message</button>
      </form>

      <div className="contact-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="mailto:akshayag2906@gmail.com" target="_blank" rel="noreferrer">
          <i className="fas fa-envelope"></i> Gmail
        </a>
      </div>
    </section>
  );
};

export default Contact;
