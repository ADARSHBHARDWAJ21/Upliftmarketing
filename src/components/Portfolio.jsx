import { useState } from 'react'
import './Portfolio.css'

import { portfolioItems } from '../config/portfolioMedia'

function Portfolio() {

  const [activeTab, setActiveTab] =
    useState('Graphic Design')

  const tabs = [
    'Graphic Design',
    'Logo',
    'Video Editing',
    'Web Development'
  ]

  const filteredItems =
    portfolioItems.filter(
      (item) => item.category === activeTab
    )

  return (

    <section
      className="portfolio"
      id="portfolio"
    >

      <div className="portfolio-container">

        <div className="portfolio-title-section">

          <p className="portfolio-subtitle">
            LATEST WORK
          </p>

          <h2 className="portfolio-title">
            {activeTab.toUpperCase()}
          </h2>

        </div>

        <div className="portfolio-tabs-container">

          <div className="portfolio-tabs">

            {tabs.map((tab) => (

              <button
                key={tab}

                className={`portfolio-tab ${
                  activeTab === tab
                    ? 'active'
                    : ''
                }`}

                onClick={() =>
                  setActiveTab(tab)
                }
              >

                {tab}

              </button>

            ))}

          </div>

        </div>

        <div className="portfolio-grid">

          {filteredItems.map((item) => (

            <div
              key={item.id}
              className="portfolio-item"
            >

              {item.type === 'image' && (

                <img
                  src={item.media}
                  alt={item.title}
                  className="portfolio-image"
                  loading="lazy"
                />

              )}

              {item.type === 'video' && (

                <video
                  className="portfolio-video"
                  controls
                  preload="metadata"
                >

                  <source
                    src={item.media}
                    type="video/mp4"
                  />

                </video>

              )}

              <div className="portfolio-overlay">

                <h3 className="portfolio-item-title">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Portfolio