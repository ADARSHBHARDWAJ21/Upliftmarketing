import './ClientWork.css'
import { siteClientVideos } from '../config/siteMedia'

function ClientWork() {
  const clientWork = [
    { title: 'Don\'t Boost YOUR POSTS', video: siteClientVideos[0] },
    { title: 'PART 1 OF 7 HOW DAILY HABIT SHAPE YOUR LIFE?', video: siteClientVideos[1] },
    { title: 'WEIGHTLOSS SWAPS', video: siteClientVideos[2] },
    { title: '5 THINGS THAT MADE ME CONFIDENT', video: siteClientVideos[3] },
    { title: 'EPISODE 1 KAIZEN CHALLENGE', video: siteClientVideos[4] },
    { title: 'BOLLYWOOD OBSESSION WITH NUMEROLOGY NUMBERS', video: siteClientVideos[5] },
    { title: 'BUSINESS GROWTH TRICKS WITH NUMEROLOGY PART 1', video: siteClientVideos[6] },
    { title: 'Content Creation for Tech Founders', video: siteClientVideos[7] },
    { title: 'Podcast Content', video: siteClientVideos[8] },
    { title: 'Social Media Reels', video: siteClientVideos[9] },
    { title: 'Video Editing Showcase', video: siteClientVideos[10] }
  ]

  const handleVolumeChange = (e) => {
    // Allow users to control volume - this ensures unmute works
    const video = e.target
    if (video.volume > 0) {
      video.muted = false
    }
  }

  return (
    <section className="client-work">
      <div className="client-work-container">
        <div className="client-work-header">
          <h2 className="client-work-title">Our Client Includes</h2>
          <p className="client-work-subtitle">Coaches, founders and Podcasters</p>
        </div>
        <div className="client-work-grid">
          {clientWork.map((work, index) => (
            <div key={index} className="work-item">
              {work.video ? (
                <video 
                  src={work.video} 
                  className="work-video"
                  controls
                  muted
                  preload="metadata"
                  playsInline
                  onVolumeChange={handleVolumeChange}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="work-placeholder">
                  <div className="play-icon">▶️</div>
                  <p>Video Content</p>
                </div>
              )}
              <div className="work-overlay">
                <h3 className="work-title">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientWork
