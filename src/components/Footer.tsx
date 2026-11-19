import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer>      
      <a className="note" href='mailto:capturaabandeira@proton.me'><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>capturaabandeira@proton.me</a>
      <a className="note" href='https://www.instagram.com/capturaabandeira/' target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1.5rem' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></span>@capturaabandeira</a>
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
        }

        footer a span svg {
            position: relative;
            top: 2px;
            right: 2px;
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
