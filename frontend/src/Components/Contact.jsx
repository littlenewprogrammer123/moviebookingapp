import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions, suggestions, or just want to say hi, feel free to reach out!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@sunnybooking.com</p>
        <p><strong>Phone:</strong> +91 9*********</p>
        <p><strong>Location:</strong> Grand Line, East Blue, One Piece Universe 🌊🏴‍☠️</p>
      </div>

      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        This is a fun portfolio project. No real crew or treasure involved (yet). 😄
      </p>
    </div>
  );
};

export default Contact;
