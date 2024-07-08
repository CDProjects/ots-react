// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-section" className="contact-section">
      <div className="content-container">
        <h1 className="section-title">CONTACT</h1>
        <div className="contact-info">
          <h3><i>For new people/players, contact our Chairman directly</i></h3>
          <h3>Old Town Shamrocks Rugby Club ry</h3>
          <p>Kirkkokatu 1A 1b</p>
          <p>06100 Porvoo, Finland</p>
          <p><strong>Chairman:</strong> Stefan Rogers <a href="tel:+358408655733">+358 40 8655733</a></p>
          <p><strong>Club Email:</strong> <a href="mailto:porvoo@finland.rugby">porvoo@finland.rugby</a></p>
          <img src="/images/OTS Shield Logo NBG.png" alt="OTS Shield Logo" className="contact-image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;