import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Tools />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', background: 'var(--bg-secondary)' }}>
        <p>© {new Date().getFullYear()} Manju | Data Analyst Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
