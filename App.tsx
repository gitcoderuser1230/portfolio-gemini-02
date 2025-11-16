
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <About />
            <Academics />
          </>
        );
    }
  };

  return (
    <div className="relative">
      <CustomCursor />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;
