import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className='section' aria-label="Hero Section">
      <h1>{t('hero.title')}</h1>
      <p className='subtitle'>{t('hero.subtitle1')}</p>
      <p className='subtitle'>{t('hero.subtitle2')}</p>

      <div className="info">
        <p><span className="material-symbols-outlined">calendar_today</span>{t('hero.date')}</p>
        <p><span className="material-symbols-outlined">location_on</span>{t('hero.location')}</p>
      </div>

      <button onClick={() => (window.location.hash = 'inscriptions')} className="btn-inscription">{t('hero.inscribe')}</button>
        

      <style>{`
        #hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100dvh; 
        }

        .info {
          display: flex;
          flex-direction: row;
          padding: 1rem 0 0 0;
          gap: 2rem;
        }

        .btn-inscription {
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Header;