import './ClientWork.css'
import { clientShowcaseVideos } from '../config/siteMedia'

function ClientWork() {

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
        <div className="client-work-grid client-work-grid--three">
          {clientShowcaseVideos.map((work) => (
            <div key={work.title} className="work-item">
              <video
                src={work.src}
                className="work-video"
                controls
                muted
                preload="metadata"
                playsInline
                onVolumeChange={handleVolumeChange}
              >
                Your browser does not support the video tag.
              </video>
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
