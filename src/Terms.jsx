import React from 'react';
import './Terms.css';

const sections = [
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    intro:
      'As a user of our site, you agree to use our site legally and not to use our site for illegal purposes, which include but are not limited to:',
    list: [
      'Harassment or mistreatment of other users',
      'Violating the rights of other users',
      'Hacking into the account of another user of the site',
      'Acting in any way that could be considered fraudulent',
      'Posting any material that may be deemed inappropriate or offensive',
    ],
    outro:
      'If we believe you are using our site illegally or in a manner that violates these terms and conditions, we may suspend or terminate your access.',
  },
  {
    id: 'user-contributions',
    title: 'User Contributions',
    paragraphs: [
      'By posting on our site, you agree to not act illegally or violate these terms and conditions.',
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts',
    intro: 'When you create an account on Magnified Systems, you agree to the following:',
    list: [
      'You are solely responsible for your account and the security and privacy of your account, including passwords or sensitive information attached to that account.',
      'All personal information you provide to us through your account is up to date, accurate, and truthful, and you will update your personal information if it changes.',
    ],
  },
  {
    id: 'third-party',
    title: 'Third Party Goods and Services',
    paragraphs: [
      'Our site may offer goods and services from third parties. We cannot guarantee the quality or accuracy of goods and services made available by third parties on our site.',
    ],
  },
  {
    id: 'links',
    title: 'Links to Other Websites',
    paragraphs: [
      'Our site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or service linked to on our site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using them.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    paragraphs: [
      'Magnified Systems and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses, including legal fees from your use of our site.',
    ],
  },
  {
    id: 'law',
    title: 'Applicable Law',
    paragraphs: ['These terms and conditions are governed by the laws of Ontario, Canada.'],
  },
];

const Terms = () => (
  <article className="legal-page">
    <div className="legal-page__inner">
      <header className="legal-page__head">
        <h1 className="legal-page__title">Terms and Conditions</h1>
        <p className="legal-page__intro">
          At Magnified Systems, we take our values seriously. Understand and read carefully to
          abide by them at all times.
        </p>
      </header>

      <div className="legal-page__body">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="legal-section">
            <h2 className="legal-section__title">{section.title}</h2>
            {section.intro ? <p>{section.intro}</p> : null}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.outro ? <p>{section.outro}</p> : null}
          </section>
        ))}
      </div>

      <p className="legal-page__updated">Last updated: June 9th, 2026</p>
    </div>
  </article>
);

export default Terms;
