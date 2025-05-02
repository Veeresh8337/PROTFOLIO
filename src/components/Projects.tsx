
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Secure Login System",
      description: "Multi-factor authentication system with JWT and biometric security features.",
      tags: ["Node.js", "Express", "JWT", "MongoDB"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent conversational AI for customer support with NLP capabilities.",
      tags: ["Python", "TensorFlow", "NLP", "React"],
      githubUrl: "https://github.com",
    },
    {
      title: "API Monitoring Tool",
      description: "Real-time dashboard for monitoring API performance and error tracking.",
      tags: ["Node.js", "React", "Socket.io", "Charts.js"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      title: "Stock Market Dashboard",
      description: "Financial data visualization platform with predictive analytics.",
      tags: ["React", "D3.js", "Python", "API"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-cyberpunk-darker relative">
      <div className="absolute inset-0 opacity-30 overflow-hidden matrix-bg"></div>
      
      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">{'>'} Projects<span className="cursor"></span></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
          Recent <span className="text-cyberpunk-green">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({ 
              threshold: 0.1, 
              triggerOnce: true, 
              delay: 100 * index 
            });
            
            return (
              <div 
                key={index}
                ref={ref}
                className={cn(
                  "bg-cyberpunk-dark cyberpunk-border rounded-md overflow-hidden transition-all duration-700 opacity-0 transform",
                  inView ? "opacity-100 translate-y-0" : "translate-y-12",
                  "group hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(12,255,12,0.15)] transition-all duration-300"
                )}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyberpunk-green transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-cyberpunk-green transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-cyberpunk-green transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-5">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 rounded-sm bg-cyberpunk-green/10 text-cyberpunk-green/80 border border-cyberpunk-green/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="h-1 w-full bg-gradient-to-r from-cyberpunk-green/0 via-cyberpunk-green to-cyberpunk-green/0 group-hover:from-cyberpunk-green group-hover:via-cyberpunk-blue group-hover:to-cyberpunk-green transition-all duration-1000"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
