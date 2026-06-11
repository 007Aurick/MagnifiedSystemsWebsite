import React from 'react';
import { Link } from 'react-router-dom';
import { impactLevels, useCaseCards, whatWeDoIntro } from './whatWeDoData';
import './WhatWeDo.css';

const UseCaseIcon = ({ type }) => {
  if (type === 'motorcycle') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 4C8 4 5 6.5 5 10v2.5c0 1 .5 2 1.5 2.5L8 18h8l1.5-3c1-.5 1.5-1.5 1.5-2.5V10c0-3.5-3-6-7-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'sports') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M4 18h16M8 18V11l4-3 4 3v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const WhatWeDo = () => (
  <div className="wwd-page">
    <section className="wwd-hero wwd-inner" aria-labelledby="wwd-heading">
      <p className="wwd-kicker">{whatWeDoIntro.kicker}</p>
      <h1 id="wwd-heading" className="wwd-title">
        {whatWeDoIntro.title}
      </h1>
      <p className="wwd-lead">{whatWeDoIntro.lead}</p>
    </section>

    <section className="wwd-impact" aria-labelledby="wwd-impact-heading">
      <div className="wwd-impact__helmet" aria-hidden>
        <img src="/images/impact-helmet-photo.png" alt="" loading="lazy" />
      </div>
      <div className="wwd-impact__inner wwd-inner">
        <div className="wwd-impact__copy">
          <p className="wwd-impact__kicker">Impact Level Indicator</p>
          <h2 id="wwd-impact-heading" className="wwd-impact__title">
            Instant Visual Feedback
          </h2>
          <p className="wwd-impact__lead">
            LED status lights provide at-a-glance awareness of impact severity.
          </p>

          <ul className="wwd-impact__legend" aria-label="Impact severity levels">
            {impactLevels.map(({ id, label, title, detail }) => (
              <li key={id} className={`wwd-impact__legend-item wwd-impact__legend-item--${id}`}>
                <span className="wwd-impact__legend-dot" aria-hidden />
                <div className="wwd-impact__legend-text">
                  <span className="wwd-impact__legend-label">{label}</span>
                  <span className="wwd-impact__legend-title">{title}</span>
                  <span className="wwd-impact__legend-detail">{detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="wwd-use-cases wwd-inner" aria-labelledby="wwd-use-cases-heading">
      <p id="wwd-use-cases-heading" className="wwd-use-cases__kicker">
        Built for those who take impacts seriously
      </p>

      <div className="wwd-use-cases__grid">
        {useCaseCards.map(({ id, title, description, image, imageAlt, icon }) => (
          <article key={id} className={`wwd-use-case wwd-use-case--${id}`}>
            <img className="wwd-use-case__bg" src={image} alt={imageAlt} loading="lazy" />
            <div className="wwd-use-case__shade" aria-hidden />
            <div className="wwd-use-case__content">
              <div className="wwd-use-case__icon">
                <UseCaseIcon type={icon} />
              </div>
              <h3 className="wwd-use-case__title">{title}</h3>
              <p className="wwd-use-case__text">{description}</p>
              <Link to="/contact" className="wwd-use-case__link" aria-label={`Contact us about ${title}`}>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default WhatWeDo;
