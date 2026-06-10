import React from 'react';
import './Terms.css';

const sections = [
  {
    id: 'consent',
    title: 'Consent',
    paragraphs: [
      'As a user of our site, you are asked to agree to this Privacy Policy when you use our platform.',
    ],
  },
  {
    id: 'personal-data',
    title: 'Personal Data We Collect',
    paragraphs: [
      'We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect any additional data beyond the data listed below without notifying you first.',
      'Note: when you visit our site, we may automatically collect and store certain information.',
      'The information listed below will be used to perform certain functions on our site and may be collected in a non-automatic way:',
    ],
    list: [
      'First and last name',
      'Age',
      'Date of birth',
      'Email address',
      'Contact messages and inquiries',
      'Impact sensor data and device telemetry (where applicable)',
    ],
    outro: 'This data may be collected using the following methods:',
    list2: [
      'Submitting our contact form',
      'Creating an account',
      'Using our impact monitoring products or dashboard',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Personal Data',
    paragraphs: [
      'Data collected on our site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our site. We will not use your data beyond what we disclose in this Privacy Policy.',
      'The data we collect when the user performs certain functions may be used for the following purposes:',
    ],
    list: [
      'Communications and marketing',
      'Providing and improving our impact monitoring services',
      'Generating product support and account-related materials',
    ],
  },
  {
    id: 'who-we-share',
    title: 'Who We Share Personal Data With',
    paragraphs: [
      'Employees: we may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.',
      'Other disclosures: we will not sell or share your data with other third parties, except in the following cases:',
    ],
    list: [
      'If the law requires it',
      'If it is required for any legal proceedings',
      'To prove or protect our legal rights',
      'To buyers or potential buyers of this company in the event that we seek to sell the company',
      'With third-party cloud or infrastructure providers that help us operate our platform and store impact monitoring data',
    ],
    outro:
      'If you follow hyperlinks from our site to another site, please note that we are not responsible for and have no control over their privacy policies and practices.',
  },
  {
    id: 'protection',
    title: 'How We Protect Your Personal Data',
    paragraphs: [
      'All data is only accessible to our employees. Our employees are bound by strict confidentiality agreements and a breach of this agreement would result in the employee\'s termination.',
      'While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.',
    ],
  },
  {
    id: 'children',
    title: 'Children',
    paragraphs: [
      'The minimum age to use our website is 13 years of age. We do not knowingly collect or use personal data from children under 13 years of age. If we learn that we have collected personal data from a child under 13 years of age, the personal data will be deleted as soon as possible. If a child under 13 years of age has provided us with personal data, their parent or guardian may contact us to have it removed.',
    ],
  },
  {
    id: 'modifications',
    title: 'Modifications',
    paragraphs: [
      'This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the "Last updated" date at the bottom of this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.',
    ],
  },
];

const Privacy = () => (
  <article className="legal-page">
    <div className="legal-page__inner">
      <header className="legal-page__head">
        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__intro">
          At Magnified Systems, we take your privacy seriously. This Privacy Policy explains how
          we collect, use, and protect your information when you use our platform. In this
          Privacy Policy, we cover the personal data we collect, the use of collected data, who
          has access to the data collected, and the rights of site users.
        </p>
      </header>

      <div className="legal-page__body">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="legal-section">
            <h2 className="legal-section__title">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.intro ? <p>{section.intro}</p> : null}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.outro ? <p>{section.outro}</p> : null}
            {section.list2 ? (
              <ul>
                {section.list2.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <p className="legal-page__updated">Last updated: June 9, 2026</p>
    </div>
  </article>
);

export default Privacy;
