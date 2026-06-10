import React from 'react';
import { Link } from 'react-router-dom';
import startupLogo from '../../Startup.png';
import './SiteFooter.css';

const quickLinks = [
  { to: '/what-we-do', label: 'What we do' },
  { to: '/Progress', label: 'Progress' },
  { to: '/meet-the-team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

const supportLinks = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms and Conditions' },
];

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <img src={startupLogo} alt="" width={36} height={36} aria-hidden />
            <span>Magnified Systems</span>
          </Link>
          <p className="site-footer__tagline">
            Wearable impact monitoring built for motorcycle, bike, and sports helmets.
          </p>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Quick Links</h3>
          <ul className="site-footer__links">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Support</h3>
          <ul className="site-footer__links">
            {supportLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <p>© 2026 Magnified Systems. All rights reserved.</p>
        <div className="site-footer__social">
          <a href="https://www.instagram.com/magnifiedsystems/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/magnified-systems" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/007Aurick/MagnifiedSystems" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
