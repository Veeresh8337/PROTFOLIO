
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyberpunk-darker border-t border-cyberpunk-green/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-xl font-bold terminal-text neon-glow mb-4">
            VH<span className="text-white opacity-70">_</span>
          </div>
          
          <p className="text-white/60 text-sm mb-4 font-mono">
            {'>'} Hack the Future. Build the Impossible.
          </p>
          
          <div className="h-px w-16 bg-cyberpunk-green/50 mx-auto my-6"></div>
          
          <p className="text-white/40 text-xs font-mono">
            © {currentYear} Veeresh Hindiholi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
