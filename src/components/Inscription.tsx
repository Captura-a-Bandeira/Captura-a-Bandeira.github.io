import React from 'react';
import { useTranslation } from 'react-i18next';

const Inscriptions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="inscriptions" className="section" aria-labelledby="inscriptions-title">
      <h2 id="inscriptions-title">{t('inscriptions.title')}</h2>
      <p className="inscriptions-soon">{t('inscriptions.soon')}</p>

      <h3>{t('inscriptions.rulesTitle')}</h3>
      <ol className="inscriptions-rules">
        <li>{t('inscriptions.rule1')}</li>
        <li>{t('inscriptions.rule2')}</li>
        <li>{t('inscriptions.rule3')}</li>
      </ol>

      <style>{`
        .inscriptions-soon {
          font-size: 1.3rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .inscriptions-rules {
          padding-left: 1.5rem;
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.5em;
        }

        .inscriptions-rules li {
          padding: 0.3rem 0;
        }

        .inscriptions-rules li::marker {
          color: var(--accent-color);
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default Inscriptions;
