import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: "⦿" },
    { name: "Node.js", icon: "⦿" },
    { name: "Python", icon: "⦿" },
    { name: "Spring Boot", icon: "⦿" },
    { name: "MongoDB", icon: "⦿" },
    { name: "MySQL", icon: "⦿" },
    { name: "React", icon: "⦿" },
    { name: "Git", icon: "⦿" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const terminalRef = useRef<HTMLDivElement>(null);
  const skillsAppeared = useRef<boolean>(false);

  useEffect(() => {
    if (inView && terminalRef.current && !skillsAppeared.current) {
      const terminal = terminalRef.current;

      // Simulate terminal typing
      let typedContent = "";
      const finalContent = `> show skills.json\n{\n  "skills": [\n`;
      const typingSpeed = 50;

      const typeText = (index: number) => {
        if (index < finalContent.length) {
          typedContent += finalContent.charAt(index);
          terminal.innerHTML = `${typedContent}<span class="cursor"></span>`;
          setTimeout(() => typeText(index + 1), typingSpeed);
        } else {
          // When finished typing intro, display skills
          skillsAppeared.current = true;
          displaySkills();
        }
      };

      const displaySkills = () => {
        const skillElements = document.querySelectorAll(".skill-tag");
        skillElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.remove("opacity-0");
            el.classList.add("opacity-100");

            // Add final closing brackets after all skills shown
            if (index === skillElements.length - 1) {
              setTimeout(() => {
                const closingText = document.getElementById("terminal-closing");
                if (closingText) {
                  closingText.classList.remove("hidden");
                }
              }, 500);
            }
          }, index * 200);
        });
      };

      typeText(0);
    }
  }, [inView]);

  return (
    <section
      id="about"
      className="bg-cyberpunk-darker relative py-10 sm:py-16 md:py-20 lg:py-32"
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="terminal-text text-xl mb-2">
            {">"} About<span className="cursor"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 text-white">
            Who am <span className="text-cyberpunk-green">I</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 mt-8 sm:mt-12">
            <div className="terminal-text text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4">
              <p>
                {"> "} I'm a backend developer and national-level hackathon
                winner, passionate about solving real-world problems using code.
              </p>
              <p>
                {"> "} From crafting APIs to building full-stack systems, I aim
                to build products that scale.
              </p>
              <p className="text-white/70 mt-6">
                {"> "} <span className="text-cyberpunk-blue">function</span>{" "}
                <span className="text-cyberpunk-purple">findMeOn</span>() {"{"}{" "}
                <br />
                &nbsp;&nbsp;return ['GitHub', 'LinkedIn', 'Twitter']
                <br />
                {"}"};
              </p>
            </div>

            <div
              ref={ref}
              className="bg-cyberpunk-dark p-4 rounded-md cyberpunk-border"
            >
              <div
                ref={terminalRef}
                className="terminal-text text-sm mb-4"
              ></div>
              {/* Skills Heading for clarity and professionalism */}
              <h3 className="text-lg font-semibold text-cyberpunk-green mb-2 mt-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2" aria-label="Skills List">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-tag opacity-0 transition-opacity duration-500 py-1.5 px-2 sm:py-2 sm:px-3 rounded-md bg-cyberpunk-green/10 border border-cyberpunk-green/40 text-cyberpunk-green text-xs sm:text-sm md:text-base hover:bg-cyberpunk-green/20 hover:scale-105 focus:bg-cyberpunk-green/20 focus:scale-105 outline-none cursor-pointer"
                    tabIndex={0}
                    aria-label={skill.name + " skill"}
                  >
                    <span className="mr-2" aria-hidden="true">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
              <div
                id="terminal-closing"
                className="terminal-text text-sm mt-4 hidden"
              >
                {"  ]\n}\n> _"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
