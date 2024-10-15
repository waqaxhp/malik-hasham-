import React from 'react';
import './ContactUs.css'; // Import your CSS for styling
import Pic1 from '../Assets/pic-1.jpeg';
import Pic2 from '../Assets/pic-2.jpeg';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Reach out to us</h2>
        <p>
          Got a question about Lender? Are you interested in partnering with us? Have some suggestions or just want to say hi? Contact us:
        </p>
        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="customer-care-section">
        <h2>Customer Care</h2>
        <p>
          Not sure where to start? Need help adding that extra mojo to your landing page? Just visit our help center or get in touch with us:
        </p>
        <div className="customer-card">
          <img src={Pic1} alt="Mickle Jason" />
          <div>
            <h3>Mickle Jason</h3>
            <p>Customer Care</p>
            <p>Toll free: +923001234567</p>
          </div>
        </div>
        <div className="customer-card">
          <img src={Pic2} alt="Anjil Khana" />
          <div>
            <h3>Anjil Khana</h3>
            <p>Customer Care</p>
            <p>Toll free: +923001234567</p>
          </div>
        </div>
        <div className="social-media-section">
          <h3>Other ways to contact us</h3>
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f facebook-bg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter twitter-bg"></i>
            </a>
          </div>
          <p>
            Be the first on your block to get product updates, news, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
