import React, { useState } from 'react';
import { homeTechCards } from '../HomeTechCards/homeTechData';
import './HomeWorkflow.css';

const TAB_LABELS = {
  pulse: 'Detect',
  signal: 'Analyze',
  telemetry: 'Report',
};

const HomeWorkflow = () => {
  const [activeId, setActiveId] = useState(homeTechCards[0].id);
  const active = homeTechCards.find((card) => card.id === activeId) ?? homeTechCards[0];

  return (
    <section className="workflow" aria-labelledby="workflow-heading">
      <h2 id="workflow-heading" className="workflow__section-title">
        How it will work
      </h2>

      <div className="workflow__panel" role="region" aria-label="Impact monitoring workflow">
        <div className="workflow__panel-head">
          <p className="workflow__panel-label">Explore each step of the system</p>
          <div className="workflow__tabs" role="tablist" aria-label="Workflow steps">
            {homeTechCards.map((card) => (
              <button
                key={card.id}
                type="button"
                role="tab"
                id={`workflow-tab-${card.id}`}
                aria-selected={activeId === card.id}
                aria-controls={`workflow-panel-${card.id}`}
                className={`workflow__tab ${activeId === card.id ? 'workflow__tab--active' : ''}`}
                onClick={() => setActiveId(card.id)}
              >
                <span className="workflow__tab-index">{card.index}</span>
                {TAB_LABELS[card.id]}
              </button>
            ))}
          </div>
        </div>

        <div
          className="workflow__panel-body"
          role="tabpanel"
          id={`workflow-panel-${active.id}`}
          aria-labelledby={`workflow-tab-${active.id}`}
        >
          <div className="workflow__visual">
            <img src={active.image} alt={active.imageAlt} loading="lazy" />
            {active.callout ? (
              <div className="workflow__callout">
                <p className="workflow__callout-title">{active.callout.title}</p>
                <p className="workflow__callout-detail">{active.callout.detail}</p>
              </div>
            ) : null}
            {active.legend ? (
              <ul className="workflow__legend" aria-label="Severity levels">
                {active.legend.map(({ level, label }) => (
                  <li key={level} className={`workflow__legend-item workflow__legend-item--${level}`}>
                    <span className="workflow__legend-dot" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="workflow__copy">
            <p className="workflow__step-tag">Step {active.index}</p>
            <h3 className="workflow__step-title">{active.stepTitle}</h3>
            <p className="workflow__step-heading">{active.title}</p>
            <p className="workflow__step-text">{active.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkflow;
