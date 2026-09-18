import { useTranslation } from 'react-i18next';
import logoHero from '../assets/imgs/logo_horizontal.svg';
import bgSantiago from '../assets/imgs/foto_mapa_santiago.png'

const Header = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className='section' aria-label="Hero Section">
      <div className="logo">
        <img src={logoHero} alt="Captura a Bandeira Logo" />
      </div>
      <h1>{t('hero.title')}</h1>
      <p className='subtitle'>{t('hero.subtitle')}</p>

      <div className="action-buttons">
        <button onClick={() => (window.location.hash = 'about-me')} className="button-secondary">{t('hero.moreInfo')}</button>
      </div>

      <style>{`
        #hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100dvh - var(--header-height)); 
          overflow: hidden;
          background: linear-gradient(rgba(0,0,0,0.5), var(--bg-primary)), url(${bgSantiago});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        #hero .logo {
          animation: fadeInUp 3s ease-out;
          width: 75%;
        }

        #hero img {
          width: 100%;
          height: 100%;
        }

        .action-buttons {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          margin-top: 2rem;
        }

        .action-buttons button {
          font-size: 1.1rem;
          padding: 0.8rem 1.2rem;
        }

        .btn-inscription {
          animation: pulse 3s infinite;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) { 
          .action-buttons {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;