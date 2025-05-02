
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Achievement {
  title: string;
  emoji: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    { title: "KLE BCA Gokak Hackathon", emoji: "🏆" },
    { title: "Nippani Hackathon", emoji: "🥇" },
    { title: "Mahingpur Hackathon", emoji: "🏅" },
    { title: "GIT GDG Hackathon, Belagavi", emoji: "🥇" },
    { title: "Jain BCA Hackathon", emoji: "🏆" },
    { title: "Jain Engineering College Hackathon", emoji: "🥇" },
    { title: "AITM Belagavi Hackathon", emoji: "🏆" },
    { title: "Lakshmidevi College Tech Fest", emoji: "🥇" },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-cyberpunk-dark relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(12,255,12,0.1)_0,rgba(26,31,44,0)_50%)]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">{'>'} Achievements<span className="cursor"></span></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
          Hackathon <span className="text-cyberpunk-green">Wins</span>
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline center line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyberpunk-green/5 via-cyberpunk-green to-cyberpunk-green/5"></div>
          
          {/* Achievement items */}
          {achievements.map((achievement, index) => {
            const { ref, inView } = useInView({ 
              threshold: 0.2, 
              triggerOnce: true, 
              delay: 100 
            });
            
            return (
              <div 
                key={index} 
                ref={ref}
                className={cn(
                  "mb-10 relative opacity-0 transition-all duration-1000",
                  inView ? "opacity-100 translate-y-0" : index % 2 === 0 ? "translate-x-8" : "-translate-x-8",
                  "flex"
                )}
              >
                <div 
                  className={cn(
                    "w-1/2 pr-8 md:pr-12",
                    index % 2 !== 0 ? "order-1 text-left" : "order-2 text-right"
                  )}
                >
                  <div className="bg-cyberpunk-darker/80 p-4 rounded cyberpunk-border backdrop-blur-sm hover:bg-cyberpunk-darker transition-all duration-300 hover:-translate-y-1 group">
                    <div className="text-2xl mb-2 group-hover:text-cyberpunk-green transition-colors">{achievement.emoji}</div>
                    <h3 className="text-lg font-medium text-white">{achievement.title}</h3>
                    <div className="text-sm text-white/50 font-mono mt-2 group-hover:text-cyberpunk-green/70 transition-colors">{'> '} Winner</div>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyberpunk-dark border-2 border-cyberpunk-green rounded-full shadow-[0_0_8px_#0CFF0C]"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
