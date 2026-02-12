import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="section" aria-label="FAQ section">
        <h2>{t('faq.title')}</h2>
        <details>
            <summary>{t('faq.q1')}</summary>
            <p>{t('faq.a1')}</p>   
        </details>

        <details>
            <summary>{t('faq.q2')}</summary>
            <p>{t('faq.a2')}</p>   
        </details>

        <details>
            <summary>{t('faq.q3')}</summary>
            <p>{t('faq.a3')}</p>   
        </details>

        <details>
            <summary>{t('faq.q4')}</summary>
            <p>{t('faq.a4')}</p>   
        </details>

        <details>
            <summary>{t('faq.questions')}</summary>
            <p>{t('faq.contact')} <strong><a href='mailto:capturaabandeira@proton.me'>capturaabandeira@proton.me</a></strong></p>   
        </details>

        <style>{`

        `}</style>
    </section>
  );
};

export default FAQ;