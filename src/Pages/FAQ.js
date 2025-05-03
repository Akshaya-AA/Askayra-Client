import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FAQ.css';

const faqData = {
  General: [
    { q: "What are your working hours?", a: "We're open from 9 AM to 8 PM every day." },
    { q: "Do I need to book in advance?", a: "Yes, we recommend booking 2-3 days in advance." },
  ],
  Bridal: [
    { q: "Do you offer trial makeup sessions?", a: "Absolutely! Bridal trial packages are available." },
    { q: "How early should I book for my wedding?", a: "At least 2 months prior is ideal." },
  ],
  Booking: [
    { q: "Can I reschedule my appointment?", a: "Yes, reschedule 24 hours prior to avoid charges." },
    { q: "How do I confirm my booking?", a: "After selecting a service, proceed to payment to confirm." },
  ],
  Products: [
    { q: "Are the products used skin-friendly?", a: "Yes, we use top brands suited for all skin types." },
    { q: "Do you offer organic treatments?", a: "Yes! Ask for our organic facial and hair care options." },
  ],
  Payments: [
    { q: "What payment methods do you accept?", a: "Cash, UPI, Credit/Debit Cards are accepted." },
    { q: "Do you offer refunds?", a: "Refunds are provided only for cancellations 24 hours in advance." },
  ]
};

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" data-aos="fade-up">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-icon">{open ? '✖' : '➕'}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="faq-container">
      <div className="faq-banner" data-aos="fade-down">
        <h2>Frequently Asked Questions</h2>
        <p>Clear all your doubts. We’re here to help!</p>
      </div>

      {Object.entries(faqData).map(([category, questions], index) => (
        <div className="faq-category" key={index}>
          <h3 className="faq-category-title" data-aos="fade-right">{category} Questions</h3>
          {questions.map((item, i) => (
            <AccordionItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      ))}

      <div className="faq-cta" data-aos="fade-up">
        <h3>Still have questions?</h3>
        <p>Feel free to contact us directly or book a consultation.</p>
        <button onClick={() => window.location.href = "/contact"}>Contact Us</button>
      </div>
    </div>
  );
};

export default FAQ;
