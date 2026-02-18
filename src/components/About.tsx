import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-me" className="section" aria-label="About me section">
      <h2>{t('about.title')}</h2>
      <div className="about">
        <div className="about-content">
          <p style={{marginBottom: '1rem'}}>{t('about.description')}</p>
          
          <p className='highlight'><span className="material-symbols-outlined">calendar_today</span>{t('about.data')}</p>
          <p className='highlight'><span className="material-symbols-outlined">schedule</span>{t('about.duration')}</p>
          <p className='highlight'><span className="material-symbols-outlined">location_on</span><a href='https://maps.app.goo.gl/ybCr2WR1uZe9Q3uL9' target='_blank'>{t('about.location')}</a></p>
          <p className='highlight'><span className="material-symbols-outlined">group</span>{t('about.teams')}</p>

          <p className="note">{t('about.teams2')}</p>
        </div>

        <aside className="prizes">
          <h3>{t('about.prizesTitle')}</h3>
          {/* <p>{t('about.prizesDescription')}</p> */}
          <p className="prize">{t('about.prize')}</p>
        </aside>
      </div>

      <style>{`
        .about {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }

        .about-content {
          flex: 3;
          display: flex;
          flex-direction: column;
        }

        .highlight:hover {
          transform: translateY(-2px);
          transition: transform 0.5s ease;
        }
        
        .note {
          font-style: italic;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        .prizes {
          flex: 1;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: var(--accent-color) 0px 4px 12px ;
          display: flex;
          flex-direction: column;
          justify-content: start;
          gap: 1rem;
        }

        .prizes:hover {
          box-shadow: var(--accent-color) 2px 8px 24px ;
          transform: translateY(-2px);
          transition: transform 0.2s ease;
        }

        .prize {
          font-size: 1.3rem;
          font-weight: bold;
          padding: 1rem;
        }

        .prizes p {
          margin: 0.5rem 0;
        }

        @media (max-width: 768px) {
          .about {
            flex-direction: column;
      }
        } 
      `}</style>
    </section>
  );
};

export default About;