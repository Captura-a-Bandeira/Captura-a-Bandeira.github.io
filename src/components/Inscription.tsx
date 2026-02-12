import React from 'react';
import { useTranslation } from 'react-i18next';

const Inscriptions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="inscriptions" className="section" aria-label="Inscriptions section">
      <div className="header">
        <h2>{t('inscriptions.title')}</h2>
        <button onClick={() => window.open('https://form.jotform.com/capturaabandeira/inscricion', '_blank')}>{t('inscriptions.form')}</button>
      </div>

      <p>{t('inscriptions.inscribe')}</p>

      <style>{`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default Inscriptions;