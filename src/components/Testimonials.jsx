import { useState, useEffect } from 'react'
import './Testimonials.css'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Jhumaa Dutta',
      role: 'Numerology Expert & Life Coach',
      rating: 5,
      text: 'Uplift Advertising helped me grow from 4k to 12.6k followers! Their content strategy and social media management transformed my online presence. The team is professional, creative, and truly understands how to engage audiences. Highly recommended!'
    },
    {
      name: 'Vihana Arya',
      role: 'Numerologist & Healer',
      rating: 5,
      text: 'Incredible results! Gained 13k followers in just one month with Uplift Advertising. Their content creation and strategic approach generated 6M+ views and 3000+ organic leads. The team is innovative and delivers beyond expectations.'
    },
    {
      name: 'Taste Great Brand',
      role: 'Pickle Brand',
      rating: 5,
      text: 'Working with Uplift Advertising for our UGC content was a game-changer. From content ideas to scripting and editing, they provided everything including anchors. Our engagement and brand awareness increased significantly. Exceptional service!'
    },
    {
      name: 'Tradex Markets',
      role: 'Trading Platform',
      rating: 5,
      text: 'Uplift Advertising created amazing content for us with their anchors. Our social media presence grew exponentially, reaching 4.89M followers. Their creative approach and understanding of our brand helped us connect better with our audience.'
    },
    {
      name: 'Anonymous Client',
      role: 'Business Owner',
      rating: 5,
      text: 'A single reel created by Uplift Advertising generated 2500+ organic leads for our business! Their lead funnel strategy is outstanding. They don\'t just create content, they create results. Best digital marketing investment we\'ve made.'
    },
    {
      name: 'Tech Founder Client',
      role: 'Tech Entrepreneur',
      rating: 5,
      text: 'Uplift Advertising handles our podcast and Instagram content flawlessly. Their team understands the nuances of tech content and creates engaging material that resonates with our audience. Professional, timely, and results-driven.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto Slide Animation
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <p className="testimonials-subtitle">HAPPY CLIENTS</p>
          <h2 className="testimonials-title">TESTIMONIAL</h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-button prev" onClick={prevTestimonial}>‹</button>

          <div className="testimonials-grid">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card fade-slide"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="testimonial-name">{testimonial.name}</h3>
                {testimonial.role && (
                  <p className="testimonial-role">{testimonial.role}</p>
                )}
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={nextTestimonial}>›</button>
        </div>

        <div className="testimonials-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
