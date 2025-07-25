import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Trophy, Star, Award, Sparkles } from "lucide-react";

interface Achievement {
  title: string;
  emoji?: string;
  icon?: React.ElementType;
  image?: string;
  description?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Esperanza 2.0 Coding Event – 1st Place Winner",
      image: "/images/veeresh1.jpg",
      description:
        "Achieved 1st place at Esperanza 2.0, hosted by KLE BCA Mahalingpur. This milestone highlights my drive for innovation, technical mastery, and a passion for building impactful solutions.",
    },
    {
      title: "Colossus 2024 Coding Event – Champion",
      image: "/images/veeresh2.jpg",
      description:
        "Crowned Champion at Colossus 2024, KLE BCA College Nipani. This win reflects my dedication to excellence, creative problem-solving, and effective teamwork.",
    },
    {
      title: "KLE BCA Gokak 24-Hour Hackathon – Runner-Up",
      image: "/images/veeresh3.jpg",
      description:
        "Secured 2nd place in the 24-hour Hackathon at KLE BCA Gokak. Collaborated with a high-performing team to deliver innovative solutions in aptitude, communication, and tech upskilling.",
    },
    {
      title:
        "Odyssey National Level Hackathon – 1st Prize (Jain Engineering College, Belagavi)",
      image: "/images/veeresh4.jpg",
      description:
        "Awarded 1st Prize at Odyssey National Level Hackathon, Jain Engineering College, Belagavi (April 2025). Represented #klebcagokak with Sujal Bhagavan, Darshan Jarale, and Praveen Sadalagi, delivering real-world impact.",
    },
    {
      title:
        "CODEFIESTA 5.0 National Hackathon – Consolation Prize (SKSV M. Angadi College)",
      image: "/images/veeresh5.jpg",
      description:
        "Earned the Consolation Prize at CODEFIESTA 5.0, a 24-hour National Hackathon at SKSV M. Angadi College of Engineering & Technology, Lakshmeshwar (April 2025). Our team stood out among 63 teams, solving real-world challenges with creativity and resilience.",
    },
  ];

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={cn(
        "py-10 sm:py-16 md:py-20 lg:py-32 bg-cyberpunk-dark relative",
        sectionInView ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(12,255,12,0.1)_0,rgba(26,31,44,0)_50%)]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="terminal-text text-xl mb-2">
          {">"} Achievements<span className="cursor"></span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 text-white">
          Hackathon <span className="text-cyberpunk-green">Wins</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline center line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyberpunk-green/5 via-cyberpunk-green to-cyberpunk-green/5"></div>
          {/* Achievement items */}

          {achievements.map((achievement, index) => {
            const isLeft = index % 2 === 0;
            // Each card animates individually as it comes into view
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={cn(
                  "mb-6 sm:mb-10 relative flex flex-col sm:flex-row transition-all duration-2000 ease-out",
                  inView
                    ? "opacity-100 translate-y-0 " +
                        (isLeft ? "-translate-x-0" : "translate-x-0")
                    : "opacity-0 " +
                        (isLeft ? "-translate-x-24" : "translate-x-24")
                )}
              >
                <div
                  className={cn(
                    "w-full sm:w-1/2 flex flex-col justify-center",
                    isLeft
                      ? "pr-2 sm:pr-8 md:pr-12 text-right order-1"
                      : "pl-2 sm:pl-8 md:pl-12 text-left order-3"
                  )}
                >
                  <div
                    className="bg-cyberpunk-darker/80 p-4 rounded cyberpunk-border backdrop-blur-sm hover:bg-cyberpunk-green/10 transition-all duration-300 hover:-translate-y-2 group focus-within:ring-2 focus-within:ring-cyberpunk-green focus:outline-none cursor-pointer"
                    tabIndex={0}
                    aria-label={achievement.title + " achievement card"}
                  >
                    {achievement.image && (
                      <img
                        src={achievement.image}
                        alt={achievement.title + " photo"}
                        title={achievement.title}
                        className={cn(
                          "w-full max-w-xs mx-auto mb-3 rounded shadow-lg border border-cyberpunk-green/30 group-hover:scale-105 group-hover:shadow-cyberpunk-green/30 transition-transform duration-500",
                          "sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl",
                          achievement.image === "/images/veeresh1.jpg"
                            ? "h-40 object-cover object-top"
                            : ""
                        )}
                        tabIndex={0}
                      />
                    )}
                    <div className="flex items-center mb-2 gap-2 text-2xl flex-wrap justify-center sm:justify-start">
                      {achievement.icon && (
                        <achievement.icon
                          className={cn(
                            "text-cyberpunk-green transition-all duration-500 group-hover:animate-bounce group-focus:animate-bounce",
                            isLeft ? "ml-auto" : ""
                          )}
                          size={22}
                          tabIndex={0}
                          title="Achievement Icon"
                          aria-label="Achievement Icon"
                        />
                      )}
                      {achievement.emoji && (
                        <span
                          className="text-xl group-hover:text-cyberpunk-green transition-colors"
                          tabIndex={0}
                          title="Achievement Emoji"
                        >
                          {achievement.emoji}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyberpunk-green transition-colors duration-300 break-words">
                      {achievement.title}
                    </h3>
                    {achievement.description && (
                      <div className="text-sm text-white/90 mt-2 mb-1 break-words">
                        {achievement.description}
                      </div>
                    )}
                    {!achievement.description && (
                      <div
                        className={cn(
                          "text-sm text-white/50 font-mono mt-2 group-hover:text-cyberpunk-green/70 transition-colors flex items-center gap-1",
                          isLeft ? "justify-end" : ""
                        )}
                      >
                        {"> "}
                        <span className="inline-block animate-pulse">
                          Winner
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for timeline balance */}
                <div className="w-0 order-2"></div>

                {/* Right side or empty space */}
                <div
                  className={cn("w-1/2", isLeft ? "order-3" : "order-1")}
                ></div>

                {/* Timeline node */}
                <div className="absolute left-1/2 top-5 transform -translate-x-1/2 w-5 h-5 bg-cyberpunk-dark border-2 border-cyberpunk-green rounded-full shadow-[0_0_8px_#0CFF0C] group-hover:scale-125 transition-transform"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
