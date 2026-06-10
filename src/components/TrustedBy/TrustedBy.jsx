import React from 'react';
import { trustedOrgs } from './trustedData';
import './TrustedBy.css';

const TrustedBy = () => (
  <section className="trusted" aria-labelledby="trusted-heading">
    <div className="trusted__inner">
      <h2 id="trusted-heading" className="trusted__title">
        We are trusted by people from places like
      </h2>
      <ul className="trusted__logos">
        {trustedOrgs.map(({ id, name, logo }) => (
          <li key={id} className="trusted__logo-item">
            <img
              className={`trusted__logo-img trusted__logo-img--${id}`}
              src={logo}
              alt={name}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustedBy;
