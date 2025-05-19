import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-multiply"></div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="fade-in text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hello, I'm <span className="text-primary">Pavani Veerla</span>
          </h1>
          
          <h2 className="fade-in animate-delay-100 text-xl md:text-2xl mb-8 text-foreground/80 max-w-3xl">
            A passionate full-stack developer dedicated to creating elegant, user-centric digital experiences that solve real-world problems.
          </h2>
          
          <div className="fade-in animate-delay-200 flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in animate-delay-300">
        <a
          href="#about"
          className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="animate-bounce-slow" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;