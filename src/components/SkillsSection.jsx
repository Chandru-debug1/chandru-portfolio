import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Tools
  { name: "Python", level: 90, category: "technical" },
  { name: "SQL", level: 85, category: "technical" },
  { name: "Advanced Excel", level: 90, category: "technical" },
  { name: "Docker", level: 70, category: "technical" },
  { name: "LangChain", level: 80, category: "technical" },

  // Data Visualization & BI
  { name: "Power BI", level: 85, category: "analytics" },
  { name: "Tableau", level: 80, category: "analytics" },
  { name: "Storytelling with Data", level: 85, category: "analytics" },
  { name: "Seaborn", level: 80, category: "analytics" },

  // Machine Learning & AI
  { name: "Machine Learning", level: 85, category: "ai" },
  { name: "Deep Learning", level: 80, category: "ai" },
  { name: "Natural Language Processing", level: 85, category: "ai" },
  { name: "Generative AI", level: 80, category: "ai" },
  { name: "Transformers", level: 80, category: "ai" },

  // Libraries & Frameworks
  { name: "TensorFlow", level: 75, category: "libraries" },
  { name: "Scikit-learn", level: 85, category: "libraries" },

  // Soft Skills
  { name: "Communication", level: 90, category: "soft" },
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Analytical Thinking", level: 88, category: "soft" },
  { name: "Team Collaboration", level: 85, category: "soft" },
  { name: "Presentation & Stakeholder Communication", level: 85, category: "soft" },
];

const categories = ["all", "technical", "analytics", "ai", "libraries", "soft"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
