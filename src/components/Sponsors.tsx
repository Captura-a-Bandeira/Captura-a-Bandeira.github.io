import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

const Sponsors: React.FC = () => {
    const { t } = useTranslation();

    return (
      <section id="sponsors" className="section" aria-labelledby="Sponsors section">
        <h2 id="sponsors title">{t('sponsors.title')}</h2>
          <div className="sponsors">
            <div className="sponsor-item">
              <p className="subtitle">Proximamente...</p>
            </div>
            <div className="sponsor-item">
              <p className="subtitle">Proximamente...</p>
            </div>
          </div>

          <style>{`
            .sponsors {
              display: flex;
              justify-content: space-evenly;
              gap: 1rem;
              padding: 1rem 0rem;
            }

            .sponsor-item {
              border-radius: 15px; 
              border: solid 1px var(--accent-color);
              padding: 3rem 3rem;
              background: var(--bg-primary);
            }

            @media (max-width: 768px) {
              .sponsors {
                flex-direction: column;
              }
            }
          `}</style>
        </section>
    )
}

export default Sponsors;