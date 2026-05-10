import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-description">Get the latest digital marketing tips and insights delivered to your inbox.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

