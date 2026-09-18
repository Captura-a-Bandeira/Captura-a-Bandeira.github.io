import { useTranslation } from 'react-i18next';
import logo from '../assets/imgs/logo_simple.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Captura a Bandeira Logo" />
      </div>
      <nav>
        <a href="#about-me">{t('header.about')}</a>
        <a href="#gallery">{t('header.gallery')}</a>
        <a href="#faq">{t('header.faq')}</a>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('gl')}>GL</button>
      </div>

      <style>{`
        header {
          background: var(--bg-primary);
          color: var(--text-primary);
          height: var(--header-height);
          min-width: 100%;
          padding: 0.5rem 2rem;
          top: 0;
          z-index: 100;
          display: flex;
          border-bottom: 1px solid var(--highlight-border);
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
        }
          
        .logo img {
          width: 48px;
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