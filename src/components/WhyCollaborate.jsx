import './WhyCollaborate.css'

function WhyCollaborate() {
  const benefits = [
    {
      icon: '👑',
      title: 'Affordable & Premium',
      description: 'Combining affordability with premium quality services.'
    },
    {
      icon: '🎯',
      title: 'Personalized Service',
      description: 'Crafting strategies tailored to your brand\'s unique identity and goals.'
    },
    {
      icon: '🤲',
      title: 'Careful Handling',
      description: 'Treating your brand with utmost care and attention to detail.'
    },
    {
      icon: '💡',
      title: 'Approachable',
      description: 'Our team is always ready to listen and adapt to your requirements.'
    },
    {
      icon: '🚀',
      title: 'Innovative Solutions',
      description: 'Constantly exploring new ideas to keep your brand ahead of the curve.'
    },
    {
      icon: '🏆',
      title: 'Proven Success',
      description: 'With a solid track record of delivering results for our clients.'
    }
  ]

  return (
    <section className="why-collaborate">
      <div className="why-collaborate-container">
        <h2 className="why-collaborate-title">WHY COLLABORATE WITH US</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyCollaborate

