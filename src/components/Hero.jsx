import React, { useState, useEffect } from "react";
import "./Hero.css";
import { siteImages } from "../config/siteMedia";

function Hero() {
  const phrases = [
    "Brand Boosters",
    "Digital Agency",
    "Web Developer",
    "SEO Optimizer",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">
            Welcome to Uplift Advertising,
            <br />
            We are, <span className="highlight">{displayedText}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            Open the digital door in Twenty-Twenty-Five,
            <br />
            Uplift Advertising magic, Ready to explore.
            <br />
            Designs that dazzle, websites to impress,
            <br />
            Your brand shines best, In our digital nest.
            <br />
            Unlock your story, let aspirations fly,
            <br />
            With Uplift Advertising, Your brand will touch the sky.
          </p>
        </div>

        {/* Image on top-right */}
        <div className="hero-right">
          <img src={siteImages.heroAirplane} alt="Airplane" className="hero-airplane" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
