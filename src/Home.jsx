import React from 'react';
import { Link } from 'react-router-dom';
import HelmetViewer from './components/HelmetViewer/HelmetViewer';
import HomeWorkflow from './components/HomeWorkflow/HomeWorkflow';
import TrustedBy from './components/TrustedBy/TrustedBy';
import { homeFeatures } from './homeFeatureData';
import './Home.css';

const FeatureIcon = ({ type }) => {
  if (type === 'helmet') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M12 4C8 4 5 6.5 5 10v2.5c0 1 .5 2 1.5 2.5L8 18h8l1.5-3c1-.5 1.5-1.5 1.5-2.5V10c0-3.5-3-6-7-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M6 18V8M10 18V12M14 18V6M18 18V10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const Home = () => (
  <div className="home-page">
    <section className="home-hero">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-hero__kicker">Compatible with any helmet</p>
          <h1 className="home-hero__title">
            Detect faster.
            <br />
            Analyze smarter.
            <br />
            <span className="home-hero__title-accent">Protect better.</span>
          </h1>
          <p className="home-hero__lead">
            Wearable impact monitoring that captures collision forces in real time and helps
            riders know when a hit is serious enough to stop and get checked.
          </p>
          <div className="home-hero__highlight">
            <strong>Never miss a serious impact again.</strong> Magnified Systems removes the
            guesswork after a crash so you always have a clear severity signal — even under
            pressure on the road.
          </div>
          <div className="home-hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/what-we-do" className="btn btn-secondary">
              What we do
            </Link>
          </div>
        </div>

        <div className="home-hero__media">
          <HelmetViewer />
        </div>
      </div>
    </section>

    <section className="home-features">
      <div className="home-features__inner">
        {homeFeatures.map((feature) => (
          <article key={feature.id} className="home-feature-card">
            <div className="home-feature-card__icon">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <h2 className="home-feature-card__title">{feature.title}</h2>
              <p className="home-feature-card__text">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="home-workflow-section">
      <div className="home-workflow-section__inner">
        <HomeWorkflow />
      </div>
    </section>

    <TrustedBy />
  </div>
);

export default Home;
