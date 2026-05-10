import './CaseStudies.css'

function CaseStudies() {
  const caseStudies = [
    {
      title: 'Helped Jhumaa Dutta (Numerology Expert) to increase from 4k to 12.6k',
      before: { posts: '325', followers: '4,620', following: '454' },
      after: { posts: '392', followers: '12.6K', following: '604' },
      metrics: { views: '7M+', leads: '5000+ Organic leads' }
    },
    {
      title: 'Helped our client gain 1 million views in 2 videos in one week',
      highlight: 'Gained 10k+ Followers',
      videos: [
        { title: 'GANESH CHATURTHI REMEDY', views: '1.4M' },
        { title: 'Janmashtami Remedy', views: '1.1M' }
      ]
    },
    {
      title: 'Helped Vihana (Numerology Expert) to Gain 13k Followers in One month',
      highlight: 'Gain 13k Followers',
      metrics: { views: '6M+', leads: '3000+ Organic leads' }
    },
    {
      title: 'Helped Taste Great (Pickle Brand) With UGC Content',
      services: ['Content Idea', 'Content Scripting', 'Editing', 'Anchor Provided'],
      highlight: 'UGC Content Success'
    },
    {
      title: 'Single Reel Generated 2500+ Organic Leads',
      highlight: '2500+ Organic Leads',
      description: 'We created one Lead Funnel for this project.'
    }
  ]

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <p className="case-studies-subtitle">SUCCESS STORIES</p>
          <h2 className="case-studies-title">OUR CASE STUDIES</h2>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <h3 className="case-study-title">{study.title}</h3>
              {study.before && study.after && (
                <div className="before-after">
                  <div className="before">
                    <h4>Before</h4>
                    <p>{study.before.posts} posts</p>
                    <p>{study.before.followers} followers</p>
                    <p>{study.before.following} following</p>
                  </div>
                  <div className="after">
                    <h4>After</h4>
                    <p>{study.after.posts} posts</p>
                    <p>{study.after.followers} followers</p>
                    <p>{study.after.following} following</p>
                  </div>
                </div>
              )}
              {study.metrics && (
                <div className="metrics-box">
                  <div className="metric">{study.metrics.views}</div>
                  <div className="metric">{study.metrics.leads}</div>
                </div>
              )}
              {study.highlight && (
                <div className="highlight-box">
                  {study.highlight}
                </div>
              )}
              {study.services && (
                <ul className="services-provided">
                  {study.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              )}
              {study.videos && (
                <div className="videos-grid">
                  {study.videos.map((video, i) => (
                    <div key={i} className="video-card">
                      <div className="video-thumbnail">▶️</div>
                      <p className="video-title">{video.title}</p>
                      <p className="video-views">{video.views} views</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

