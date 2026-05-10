import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Talk</h2>
          <p className="contact-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service interested in</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="social">Social Media Management</option>
                <option value="web">Web Development</option>
                <option value="video">Video Creation</option>
                <option value="ads">Google and Meta Ads</option>
                <option value="graphic">Graphic Designing & Video Editing</option>
                <option value="content">Content Writing & Messaging</option>
                <option value="performance">Performance & Influencer Marketing</option>
                <option value="personal">Personal Branding</option>
                <option value="photography">Photography & Videography</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <span className="send-icon">✈️</span>
            </button>
          </form>
          <div className="contact-info">
            <div className="info-block">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>upliftmarketingagency360@gmail.com</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 89660 43256</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p></p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Saturday, 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

