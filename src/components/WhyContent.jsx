import './WhyContent.css'
import { siteImages } from '../config/siteMedia'

function WhyContent() {
  const reasons = [
    'Build Authority and Credibility',
    'Showcase Your Personality and Values',
    'Generate leads and sales',
    'Foster Community and Engagement'
  ]

  return (
    <section className="why-content">
      <div className="why-content-container">
        <div className="why-content-content">
          <h2 className="why-content-title">
            Why People need to <span className="highlight">Create Content online?</span>
          </h2>
          <ul className="reasons-list">
            {reasons.map((reason, index) => (
              <li key={index} className="reason-item">
                <span className="reason-icon">✓</span>
                <span className="reason-text">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-content-image">
          <img src={siteImages.whyTeam} alt="Team collaboration" />
        </div>
      </div>
    </section>
  )
}

export default WhyContent

