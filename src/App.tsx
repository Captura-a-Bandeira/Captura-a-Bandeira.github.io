import React from 'react';
import './styles/styles.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Inscriptions from './components/Inscription';
import FAQ from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Inscriptions />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
