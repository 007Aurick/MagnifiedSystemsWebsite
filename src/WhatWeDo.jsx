import React from 'react';
import { Link } from 'react-router-dom';
import { focusCards, systemCard, whatWeDoIntro } from './whatWeDoData';
import './WhatWeDo.css';

const WhatWeDo = () => (
  <div className="wwd-page">
    <div className="wwd-glow wwd-glow--a" aria-hidden />
    <div className="wwd-glow wwd-glow--b" aria-hidden />

    <section className="wwd-hero wwd-inner" aria-labelledby="wwd-heading">
      <p className="wwd-kicker">{whatWeDoIntro.kicker}</p>
      <h1 id="wwd-heading" className="wwd-title">
        {whatWeDoIntro.title}
      </h1>
      <p className="wwd-lead">{whatWeDoIntro.lead}</p>
    </section>

    <section className="wwd-section wwd-inner" aria-label="Our focus areas">
      <div className="wwd-focus-grid">
        {focusCards.map((card) => (
          <article
            key={card.id}
            className={[
              'wwd-card',
              card.featured ? 'wwd-card--featured' : '',
              card.comingSoon ? 'wwd-card--soon' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="wwd-card__visual">
              <img src={card.image} alt={card.imageAlt} loading="lazy" />
              {card.comingSoon ? (
                <span className="wwd-card__badge">Planned</span>
              ) : null}
            </div>
            <div className="wwd-card__body">
              <p className="wwd-card__tag">{card.tag}</p>
              <h2 className="wwd-card__title">{card.title}</h2>
              <p className="wwd-card__text">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="wwd-section wwd-inner" aria-label="How the system works">
      <article className="wwd-system">
        <div className="wwd-system__visual">
          <img src={systemCard.image} alt={systemCard.imageAlt} loading="lazy" />
        </div>
        <div className="wwd-system__body">
          <p className="wwd-card__tag">{systemCard.tag}</p>
          <h2 className="wwd-system__title">{systemCard.title}</h2>
          <p className="wwd-card__text">{systemCard.body}</p>
        </div>
      </article>
    </section>

    <section className="wwd-cta wwd-inner">
      <p className="wwd-cta__text">
        Building for riders today — and athletes tomorrow.
      </p>
      <Link to="/contact" className="btn btn-primary">
        Get in touch
      </Link>
    </section>
  </div>
);

export default WhatWeDo;
