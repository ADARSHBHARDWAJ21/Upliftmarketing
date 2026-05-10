import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 5L25 15L35 18L28 26L29 36L20 32L11 36L12 26L5 18L15 15L20 5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="footer-logo-text">UPLIFT ADVERTISING</h3>
            </div>
            <p className="footer-description">
              Uplift Advertising is an integrated social media and digital marketing agency that helps businesses grow their online presence and achieve their marketing goals. We turn creativity into business growth.
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">USEFUL LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">CONTACT</h4>
            <div className="footer-contact">
              <p>upliftmarketingagency360@gmail.com</p>
              <p>+91 89660 43256</p>
              <p>Instagram: @Uplift_advertising_agency</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
        <div className="footer-social">
  <a
    href="https://www.instagram.com/uplift_advertising_agency/"
    className="social-icon"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    📷
  </a>

  <a
    href="https://www.linkedin.com/"
    className="social-icon"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
  >
  
  </a>

  {/* <a
    href="https://www.youtube.com/"
    className="social-icon"
    aria-label="YouTube"
    target="_blank"
    rel="noopener noreferrer"
  >
    ▶️
  </a> */}
</div>
          <div className="footer-copyright">
            <p>© Uplift Advertising All Rights Reserved.</p>
            <div className="footer-legal">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

