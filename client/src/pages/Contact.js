import React from "react";
import Layout from "./../components/Layout/Layout";

import "./contact.css";
import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <p className="contact-description">
        We align leaders around a shared purpose and strategic story that catalyzes their business
        and brand to take action.
      </p>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <BiMap className="info-icon" />
            <h3>ADDRESS:</h3>
            <p> NH05, Chandigarh-Ludhiana Highway</p>
          </div>
          <div className="info-item">
            <BiEnvelope className="info-icon" />
            <h3>EMAIL:</h3>
            <p>
              <a href="mailto:hello@company.com">pickifystore@company.com</a>
              <br />
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
          <div className="info-item">
            <BiPhone className="info-icon" />
            <h3>CALL US:</h3>
            <p>+91 7668438769</p>
            <p>+91 8825186523</p>
          </div>
          <div className="info-item social-links">
            <h3>CONTACT US</h3>
            <p>Contact us for a quote, help, or to join the team.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaPinterestP /></a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.3920390985514!2d-74.00324368490761!3d40.71277627933149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzE1LjMiTiA3NMKwMDAnMDYuOSJQ!5e0!3m2!1sen!2sin!4v1615035076711!5m2!1sen!2sin"
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </Layout>
  );
};


export default Contact;