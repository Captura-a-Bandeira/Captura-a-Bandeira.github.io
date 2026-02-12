import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <footer>
      <div className="footer-content">
        <p><strong>Financiado por:</strong> Vicerreitoría de Estudantes e Cultura da USC</p>
        <p><strong>Colaboración con:</strong> Aula Proferional ETSE</p>
      </div>
      
      <a href='mailto:capturaabandeira@proton.me'><span className="material-symbols-outlined">mail</span>capturaabandeira@proton.me</a>
      <p>© {new Date().getFullYear()} Captura a Bandeira. {t('footer.rights')}</p>

      <style>{`
        footer {
          text-align: center;
          padding: 3rem 10rem 1rem;
          position: static;
          bottom: 0;
          width: 100%;
        }

        .footer-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
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

        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem;
          }
      `}</style>
    </footer>
  );
};

export default Footer;
