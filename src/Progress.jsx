import React from 'react';
import { progressIntro, progressReel } from './progressData';
import './Progress.css';

const Progress = () => (
  <div className="progress-page">
    <section className="progress-hero progress-inner" aria-labelledby="progress-heading">
      <p className="progress-kicker">{progressIntro.kicker}</p>
      <h1 id="progress-heading" className="progress-title">
        {progressIntro.title}
      </h1>
      <p className="progress-lead">{progressIntro.lead}</p>
    </section>

    <section className="progress-timeline-section progress-inner" aria-label="Progress reel timeline">
      <ol className="progress-timeline">
        {progressReel.map((entry, index) => (
          <li key={entry.id} className="progress-timeline__item">
            <div className="progress-timeline__rail" aria-hidden>
              <span className="progress-timeline__dot" />
              {index < progressReel.length - 1 ? <span className="progress-timeline__line" /> : null}
            </div>

            <article className="progress-timeline__card">
              <header className="progress-timeline__header">
                <h2 className="progress-timeline__title">{entry.title}</h2>
                {entry.date ? <time className="progress-timeline__date">{entry.date}</time> : null}
              </header>

              <div className="progress-timeline__media">
                <video
                  className="progress-timeline__video"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${entry.title} progress clip`}
                >
                  <source src={entry.video} type="video/quicktime" />
                  <source src={entry.video} />
                  Your browser does not support this video format.
                </video>
              </div>

              <p className="progress-timeline__description">{entry.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  </div>
);

export default Progress;
