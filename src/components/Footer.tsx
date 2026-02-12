import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer>
      <a href='mailto:capturaabandeira@proton.me'><span className="material-symbols-outlined">mail</span>capturaabandeira@proton.me</a>
      <p>© {new Date().getFullYear()} Captura a Bandeira. {t('footer.rights')}</p>

      <style>{`
        footer {
          text-align: center;
          padding: 3rem 0 1rem;
          position: static;
          bottom: 0;
          width: 100%;
        }

        footer a {
          font-size: 0.8rem;
        }

        footer a span {
          vertical-align: bottom;
          padding-right: 0.2rem;
          margin-bottom: -0.1rem;
        }

        footer p {
          font-size: 0.8rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
