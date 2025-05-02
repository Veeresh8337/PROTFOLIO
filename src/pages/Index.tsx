
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

const KeyboardSoundEffect = () => {
  useEffect(() => {
    const keyboardSound = new Audio('/keyboard-click.mp3');
    keyboardSound.volume = 0.2;

    const handleButtonClick = () => {
      keyboardSound.currentTime = 0;
      keyboardSound.play().catch(err => console.error("Audio play failed:", err));
    };
    
    const buttons = document.querySelectorAll('button, a');
    
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
    
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, []);
  
  return null;
};

const Index = () => {
  return (
    <div className="custom-cursor">
      <CursorEffect />
      <KeyboardSoundEffect />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
