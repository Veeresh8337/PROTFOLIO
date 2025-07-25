import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-cyberpunk-darker/80 backdrop-blur-md shadow-lg shadow-cyberpunk-green/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4">
        <a
          href="#hero"
          className="text-xl sm:text-2xl font-bold terminal-text neon-glow"
        >
          VH<span className="text-white opacity-70">_</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="terminal-text opacity-80 hover:opacity-100 hover:neon-glow relative font-medium text-xs sm:text-sm px-1 py-2 transition-all duration-200 hover:before:w-full before:absolute before:h-[2px] before:w-0 before:bottom-1 before:left-0 before:bg-cyberpunk-green/70 before:transition-all"
                >
                  {"> "}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden terminal-text p-2 sm:p-3 cyberpunk-border rounded text-sm sm:text-base"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-cyberpunk-darker/95 backdrop-blur-md border-t border-cyberpunk-green/30 py-3 sm:py-4 px-2 sm:px-4">
          <ul className="flex flex-col space-y-2 sm:space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="terminal-text block py-2 px-3 sm:px-4 hover:bg-cyberpunk-green/10 rounded transition-colors text-sm sm:text-base"
                >
                  {"> "}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
