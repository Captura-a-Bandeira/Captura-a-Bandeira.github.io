import React from 'react';
import { useTranslation } from 'react-i18next';
import { parseFormattedText } from '../utils/textFormatting.jsx'

import organizators from '../assets/imgs/organizators.jpeg';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-me" className="section" aria-labelledby="About the event section">
      <h2 id="about-title">{t('about.title')}</h2>
      <div className="about">
        <div className="about-content">
          <p className="subtitle" style={{textAlign: 'start', marginBottom: '1rem'}}>
            {parseFormattedText(
              t('about.description'),
              { fontWeight: 'bold', fontSize: '1.3rem', color: 'white' }
            )}
          </p>
          <p className="subtitle" style={{textAlign: 'start', marginBottom: '1rem'}}>
            {parseFormattedText(
              t('about.description2'),
              { fontWeight: 'bold', fontSize: '1.3rem', color: 'white' }
            )}
          </p>
          <p className="subtitle" style={{textAlign: 'start', marginBottom: '1rem'}}>
            {parseFormattedText(
              t('about.description3'),
              { fontWeight: 'bold', fontSize: '1.3rem', color: 'white' }
            )}
          </p>
        </div>

        <aside className="organizators">
          <img src={organizators} alt='Organizadores'/>
        </aside>
      </div>

      <style>{`
        .about {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }

        .about-content {
          flex: 2;
          display: flex;
          flex-direction: column;
        }

        .organizators {
          flex: 1;
          border-radius: 15px;
          box-shadow: var(--highlight-border) 0px 8px 24px ;
          height: fit-content;
        }

        .organizators img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 15px;
          border: 1px solid var(--accent-color);
          align-self: center;
        }

        @media (max-width: 768px) {
          .about {
            display: flex;
            flex-direction: column;
          }
        } 
      `}</style>
    </section>
  );
};

export default About;