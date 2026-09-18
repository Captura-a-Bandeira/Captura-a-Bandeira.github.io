import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer>      
      <a className="note" href='mailto:capturaabandeira@proton.me'><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>capturaabandeira@proton.me</a>
      <p className="note">© {new Date().getFullYear()} Captura a Bandeira. {t('footer.rights')}</p>

      <style>{`
        footer {
          text-align: center;
          padding: 3rem 10rem 1rem;
          position: static;
          bottom: 0;
          width: 100%;
        }

        footer a span {
          vertical-align: bottom;
          padding-right: 0.2rem;
          margin-bottom: -0.1rem;
        }

        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem;
          }
      `}</style>
    </footer>
  );
};

export default Footer;
