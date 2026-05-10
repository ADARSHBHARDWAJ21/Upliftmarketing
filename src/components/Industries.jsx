import './Industries.css'

function Industries() {
  const industries = [
    { icon: '🛒', name: 'E-commerce' },
    { icon: '🏢', name: 'Real Estate' },
    { icon: '🎓', name: 'Education' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🍽️', name: 'Restaurants' },
    { icon: '✈️', name: 'Travel & Tourism' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '🚚', name: 'Logistics' }
  ]

  return (
    <section className="industries">
      <div className="industries-container">
        <h2 className="industries-title">Where We Create Impact</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries

