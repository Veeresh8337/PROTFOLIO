import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, TrendingUp, Star, Sparkles } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  stats: {
    stars: number;
    trend: "up" | "down" | "stable";
    complexity: number; // 1-10
  };
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Secure Login System",
      description:
        "Multi-factor authentication system with JWT and biometric security features. Implements advanced encryption and session management.",
      tags: ["Node.js", "Express", "JWT", "MongoDB"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      stats: { stars: 42, trend: "up", complexity: 7 },
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "Intelligent conversational AI for customer support with NLP capabilities and seamless integration with various platforms.",
      tags: ["Python", "TensorFlow", "NLP", "React"],
      githubUrl: "https://github.com",
      stats: { stars: 78, trend: "up", complexity: 8 },
    },
    {
      title: "API Monitoring Tool",
      description:
        "Real-time dashboard for monitoring API performance and error tracking with customizable alerts and detailed analytics.",
      tags: ["Node.js", "React", "Socket.io", "Charts.js"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      stats: { stars: 36, trend: "stable", complexity: 6 },
    },
    {
      title: "Stock Market Dashboard",
      description:
        "Financial data visualization platform with predictive analytics showcasing real-time market trends and automated trading signals.",
      tags: ["React", "D3.js", "Python", "API"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      stats: { stars: 53, trend: "up", complexity: 9 },
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 sm:py-16 md:py-20 lg:py-32 bg-cyberpunk-darker relative"
    >
      <div className="absolute inset-0 opacity-30 overflow-hidden matrix-bg"></div>

      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">
          {">"} Projects<span className="cursor"></span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 text-white">
          Recent <span className="text-cyberpunk-green">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100 * index,
            });

            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                ref={ref}
                className={cn(
                  "opacity-0 transform transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "translate-y-12"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className={cn(
                    "h-full bg-cyberpunk-dark cyberpunk-border rounded-md overflow-hidden transition-all duration-300",
                    "relative z-10 group hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(12,255,12,0.15)]"
                  )}
                >
                  {/* Glowing edge animation */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[-1] bg-gradient-to-r from-cyberpunk-green/40 via-cyberpunk-blue/30 to-cyberpunk-green/40 rounded-md opacity-0",
                      "group-hover:opacity-60 transition-opacity duration-700",
                      "blur-xl"
                    )}
                  />

                  <CardContent className="p-0">
                    {/* Project stats bar */}
                    <div className="px-5 py-2 flex items-center justify-between bg-cyberpunk-darker/50 border-b border-cyberpunk-green/30">
                      <div className="flex items-center space-x-2 text-xs text-cyberpunk-green/80">
                        <span className="flex items-center">
                          <Star size={12} className="mr-1" />
                          {project.stats.stars}
                        </span>
                        <span>|</span>
                        <span className="flex items-center">
                          {project.stats.trend === "up" ? (
                            <TrendingUp
                              size={12}
                              className="text-green-400 mr-1"
                            />
                          ) : (
                            <span className="inline-block w-3 h-3 bg-yellow-500/30 rounded-full mr-1"></span>
                          )}
                          {project.stats.trend === "up" ? "+4.2%" : "0%"}
                        </span>
                      </div>
                      <div className="font-mono text-xs text-white/50">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <span
                            key={i}
                            className={cn(
                              "inline-block w-1 h-2 mx-[1px]",
                              i < project.stats.complexity
                                ? "bg-cyberpunk-green/70"
                                : "bg-gray-700/30"
                            )}
                          ></span>
                        ))}
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyberpunk-green transition-colors flex items-center">
                          {isHovered && (
                            <Sparkles
                              size={16}
                              className="mr-2 text-cyberpunk-green animate-pulse"
                            />
                          )}
                          {project.title}
                        </h3>

                        <div className="flex space-x-3">
                          <HoverCard>
                            <HoverCardTrigger>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-cyberpunk-green transition-colors transform hover:scale-110"
                                tabIndex={0}
                                aria-label={project.title + " GitHub link"}
                              >
                                <Github size={18} />
                              </a>
                            </HoverCardTrigger>
                            <HoverCardContent className="bg-cyberpunk-darker border-cyberpunk-green/50 text-cyberpunk-green w-auto text-xs py-1 px-2">
                              View Code
                            </HoverCardContent>
                          </HoverCard>

                          {project.demoUrl && (
                            <HoverCard>
                              <HoverCardTrigger>
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/80 hover:text-cyberpunk-green transition-colors transform hover:scale-110"
                                  tabIndex={0}
                                  aria-label={project.title + " Live Demo link"}
                                >
                                  <ExternalLink size={18} />
                                </a>
                              </HoverCardTrigger>
                              <HoverCardContent className="bg-cyberpunk-darker border-cyberpunk-green/50 text-cyberpunk-green w-auto text-xs py-1 px-2">
                                Live Demo
                              </HoverCardContent>
                            </HoverCard>
                          )}
                        </div>
                      </div>

                      <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm bg-cyberpunk-green/10 text-cyberpunk-green/80 border border-cyberpunk-green/30 group-hover:animate-pulse transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress bar animation at bottom */}
                    <div
                      className="h-0.5 bg-gradient-to-r from-transparent via-cyberpunk-green to-transparent group-hover:opacity-100 opacity-30 transition-opacity"
                      style={{
                        backgroundSize: "200% 100%",
                        animation: isHovered
                          ? "gradient-slide 2s ease infinite"
                          : "none",
                      }}
                    ></div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
