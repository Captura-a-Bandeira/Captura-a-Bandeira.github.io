import React from 'react';
import { useTranslation } from 'react-i18next';

import gallery1 from '../assets/imgs/2026-1.jpg';
import gallery2 from '../assets/imgs/2026-2.jpg';
import gallery3 from '../assets/imgs/2026-3.jpg';
import gallery4 from '../assets/imgs/2026-4.jpg';
import gallery5 from '../assets/imgs/2026-5.jpg';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <h2 id="gallery-title">{t('gallery.title')}</h2>

      <div className='gallery'>
        <img id='gallery1' src={gallery1} alt='Image of Captura a Bandeira 2026'/>
        <img id='gallery2' src={gallery2} alt='Image of Captura a Bandeira 2026'/>
        <img id='gallery3' src={gallery3} alt='Image of Captura a Bandeira 2026'/>
        <img id='gallery4' src={gallery4} alt='Image of Captura a Bandeira 2026'/>
        <img id='gallery5' src={gallery5} alt='Image of Captura a Bandeira 2026'/>
      </div>

      <style>{`
        #gallery1 { grid-area: gallery1 }
        #gallery2 { grid-area: gallery2 }
        #gallery3 { grid-area: gallery3 }
        #gallery4 { grid-area: gallery4 }
        #gallery5 { grid-area: gallery5 }

        .gallery {
          display: grid;
          grid-template-areas: 
            'gallery4 gallery3 gallery2'
            'gallery4 gallery3 gallery5'
            'gallery1 gallery1 gallery5';
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 10px;
          padding: 1rem 0rem;
          width: 100%;
          max-height: 90%;
        }

        .gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(100%);
        }

        .gallery img:hover {
          transition: 
            filter 0.75s ease, 
            transform 0.75s ease;
          filter: grayscale(0%);
          transform: scale(1.10);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .gallery {
            grid-template-areas: 
              'gallery1 gallery3'
              'gallery2 gallery5'
              'gallery4 gallery5';
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
          }
        }
      `}</style> 
    </section>
  );
};

export default Gallery;