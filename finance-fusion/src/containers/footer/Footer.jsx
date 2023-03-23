import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="ff__footer section__padding">
    <div className="ff__footer-heading">
      <h1 className="gradient__text__features">Do you want to step in to the future before others</h1>
    </div>

    <div className="ff__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="ff__footer-links">
      <div className="ff__footer-links_logo">
        <p>G-RIMA <br /> All Rights Reserved</p>
      </div>
      <div className="ff__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="ff__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ff__footer-links_div">
        <h4>Get in touch</h4>
        <p>Nyeri, Kenya</p>
        <p>0799090102</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="ff__footer-copyright">
      <p>@2023 Finace Fusion. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer;
