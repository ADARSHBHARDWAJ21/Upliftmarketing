import './Services.css'

function Services() {
  const services = [
    {
      icon: '📱',
      title: 'Social Media Management',
      description: 'Comprehensive social media strategies to grow your presence and engagement across all platforms.',
      items: ['Monthly Calendars', 'Content Creation', 'Community Management', 'Platform Optimization', 'Analytics & Reporting']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build mobile-friendly and high-converting websites that represent your brand perfectly.',
      items: ['Static Websites', 'Dynamic Websites', 'E-Commerce Solutions', 'Mobile Optimization', 'Custom UI/UX Design']
    },
    {
      icon: '🎬',
      title: 'Video Creation',
      description: 'Create engaging videos to showcase your brand, products, and services.',
      items: ['Reels & Shorts', 'Explainer Videos', 'Testimonials', 'Motion Graphics', 'Video Editing']
    },
    {
      icon: '📊',
      title: 'Google and Meta Ads',
      description: 'Boost reach and conversions with targeted advertising campaigns.',
      items: ['Google Ads Campaigns', 'Meta Ads Campaigns', 'Campaign Strategy', 'A/B Testing', 'Performance Tracking']
    },
    {
      icon: '🎨',
      title: 'Graphic Designing & Video Editing',
      description: 'Creative visuals for social media, marketing, and branding that capture attention.',
      items: ['Social Media Creatives', 'Posters & Banners', 'Logo Design', 'Video Editing', 'Brand Guidelines']
    },
    {
      icon: '📝',
      title: 'Content Writing & Messaging',
      description: 'Compelling words to express your brand\'s vision and mission.',
      items: ['Website Copy', 'Blog Writing', 'Social Media Captions', 'Product Descriptions', 'Strategic Messaging']
    },
    {
      icon: '📈',
      title: 'Performance & Influencer Marketing',
      description: 'Boost reach and conversions with ads and influencer collaborations.',
      items: ['Influencer Research', 'Campaign Management', 'Performance Tracking', 'ROI Analysis']
    },
    {
      icon: '👤',
      title: 'Personal Branding',
      description: 'Position founders and professionals as thought leaders in their industry.',
      items: ['Profile Optimization', 'Content Strategy', 'Personal Brand Identity', 'Thought Leadership']
    },
    {
      icon: '📷',
      title: 'Photography & Videography',
      description: 'Capture stunning visuals to enhance your brand image.',
      items: ['Product Photography', 'Corporate Shoots', 'Event Coverage', 'Video Production']
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <p className="services-subtitle">WE PROVIDE</p>
          <h2 className="services-title">VARIOUS SERVICES</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-items">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
