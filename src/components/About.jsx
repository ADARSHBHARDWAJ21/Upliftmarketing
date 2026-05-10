import './About.css'

function About() {
  return (
    <section className="about" id="know-us">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Building Digital Success Since 2019</h2>
          <div className="about-text">
            <p>
              Founded with a mission to democratize digital marketing, we've helped hundreds of businesses transform their online presence. From startups to established enterprises, our strategies have generated millions in revenue and countless success stories.
            </p>
            <p>
              Our team combines creativity with analytics, ensuring every campaign not only looks great but delivers measurable results.
            </p>
          </div>
          <button className="cta-button">
            Learn Our Story
            <span className="arrow-icon">→</span>
          </button>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Years of Market Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-number">250+</div>
            <div className="stat-label">Ad Campaigns</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏰</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Successful Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
