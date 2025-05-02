
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Backend Development",
      description: "Scalable and secure server-side solutions with modern architecture patterns.",
      icon: "🔌"
    },
    {
      title: "API Integration",
      description: "Seamless integration of third-party services and custom API development.",
      icon: "🔄"
    },
    {
      title: "AI Tool Integration",
      description: "Implementation of AI capabilities into existing applications and workflows.",
      icon: "🤖"
    },
    {
      title: "Full-Stack Project Development",
      description: "End-to-end development from concept to deployment with modern tech stack.",
      icon: "🚀"
    },
    {
      title: "Hackathon Mentoring",
      description: "Strategic guidance and technical mentorship for hackathon teams.",
      icon: "👨‍💻"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-cyberpunk-dark relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(12,255,12,0.15),rgba(26,31,44,0)_50%)]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">{'>'} Services<span className="cursor"></span></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
          What I <span className="text-cyberpunk-green">Offer</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const { ref, inView } = useInView({ 
              threshold: 0.1, 
              triggerOnce: true,
              delay: index * 100
            });
            
            return (
              <div
                key={index}
                ref={ref}
                className={cn(
                  "bg-cyberpunk-darker p-6 rounded-md cyberpunk-border transition-all duration-500 opacity-0",
                  inView ? "opacity-100 translate-y-0" : "translate-y-8",
                  "hover:bg-cyberpunk-green/5 group hover:-translate-y-2 transition-all duration-300"
                )}
              >
                <div className="text-3xl mb-4 group-hover:animate-pulse">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyberpunk-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 h-1 w-0 bg-cyberpunk-green group-hover:w-full transition-all duration-300 opacity-70"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
