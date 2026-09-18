import React from 'react';
import './styles/styles.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Gallery />
        {/*<Inscriptions />*/}
        {/*<Sponsors />*/}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
