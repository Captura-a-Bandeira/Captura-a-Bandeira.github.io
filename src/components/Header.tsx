import { useTranslation } from 'react-i18next';
import logo from '../assets/imgs/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="logo">
        <a href="#hero"><img src={logo} alt="Captura a Bandeira Logo" /></a>
      </div>
      <nav>
        <a href="#about-me">{t('header.about')}</a>
        <a href="#inscriptions">{t('header.inscriptions')}</a>
        <a href="#faq">{t('header.faq')}</a>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('gl')}>GL</button>
      </div>

      <style>{`
        header {
          background: var(--bg-header);
          color: var(--text-primary);
          min-height: 4rem;
          min-width: 100%;
          padding: 0.5rem 2rem;
          position: fixed;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
        }
          
        .logo img {
          width: 100px;
          height: auto;
        }

        nav {
          display: flex;
          justify-content: space-around;
          flex: 0.35;
        }

        .language-switcher {
          display: flex;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          header nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;