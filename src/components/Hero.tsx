import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters
    const chars = "01010010111001010110VEERESHHINDIHOLI10101010101";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Store y position for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Draw the matrix effect
    const draw = () => {
      ctx.fillStyle = "rgba(10, 15, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0CFF0C";
      ctx.font = `${fontSize}px 'JetBrains Mono'`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // When the character has moved below the screen, start again from the top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        // Increment y coordinate for next character
        drops[i]++;
      }
    };

    const matrixInterval = setInterval(draw, 35);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4"
    >
      {/* Matrix background canvas */}
      <canvas
        ref={matrixCanvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl px-4 custom-cursor">
        <div className="glitch-text" data-text="VEERESH HINDIHOLI">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-glitch font-bold text-white mb-2 tracking-wider">
            VEERESH HINDIHOLI
          </h1>
        </div>
        <div className="h-12 sm:h-16 my-4 sm:my-6">
          <TypeAnimation
            className="TypingAnimation text-base sm:text-xl md:text-2xl font-mono mb-6 sm:mb-8"
            sequence={[
              "Hack the Future.",
              1000,
              "Build the Impossible.",
              1000,
              "Hack the Future. Build the Impossible.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <a
          href="#projects"
          className="inline-block mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-cyberpunk-green text-cyberpunk-green hover:bg-cyberpunk-green/10 transition-all duration-300 rounded font-mono group text-sm sm:text-base"
          aria-label="View my work section"
        >
          <span className="flex items-center">
            <span className="mr-2">&gt;</span>
            <span>VIEW MY WORK</span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
              _
            </span>
          </span>
        </a>
      </div>

      <div
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-cyberpunk-green animate-bounce"
        aria-label="Scroll Down Indicator"
      >
        <span className="text-xs sm:text-sm font-mono">Scroll Down</span>
        <div className="w-4 sm:w-5 h-6 sm:h-8 border-2 border-cyberpunk-green rounded-full mx-auto mt-1 sm:mt-2 flex justify-center">
          <div className="w-1 h-1 bg-cyberpunk-green rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
