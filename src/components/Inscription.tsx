import React from 'react';
import { useTranslation } from 'react-i18next';

const Inscriptions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="inscriptions" className="section" aria-label="Inscriptions section">
      <div className="header">
        <h2>{t('inscriptions.title')}</h2>
        <p className="mobile">{t('inscriptions.inscribe')}</p>
        <button onClick={() => window.open('https://form.jotform.com/capturaabandeira/inscricion', '_blank')}>{t('inscriptions.form')}</button>
      </div>

      <p className="desktop">{t('inscriptions.inscribe')}</p>

      <style>{`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .header {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
          }

          .header button {
            margin: 0.3rem;
            align-self: center;
            width: 100%;
          }

          .desktop {
            display: none;
          }

          .mobile {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default Inscriptions;