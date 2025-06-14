import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_nvcq2xp', // Replace with your EmailJS service ID
      'template_k3xw6vg', // Replace with your EmailJS template ID
      form.current,
      'sOoOT0BG_2tuCPlsu' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div id='contact' className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Whether you have a question about our furniture, need assistance with an order, or just want to share your thoughts, reach out to us.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Visit Us</h3>
            <p>123 Furniture Street<br />Design District, Woodville<br />WV 12345</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567<br />Mon-Fri: 9am-6pm<br />Sat: 10am-4pm</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>info@furnitureshop.com<br />support@furnitureshop.com</p>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Pinterest"><FaPinterest /></a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Send Us a Message</h2>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="user_name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="user_email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input type="tel" id="phone" name="user_phone" />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Order Support">Order Support</option>
                <option value="Product Questions">Product Questions</option>
                <option value="Custom Furniture">Custom Furniture</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="submit-message success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="submit-message error">
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;