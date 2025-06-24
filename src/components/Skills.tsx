import React from 'react';
import { portfolioData } from '../data/portfolio';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: 'Frontend',
      skills: skills.frontend,
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      icon: '⚛️'
    },
    {
      title: 'Backend & APIs',
      skills: skills.backend,
      color: 'bg-gradient-to-r from-green-400 to-emerald-500',
      icon: '🔧'
    },
    {
      title: 'Tools & Workflow',
      skills: skills.tools,
      color: 'bg-gradient-to-r from-purple-400 to-pink-500',
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and deliver exceptional user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Semantic UI', 'Ant Design', 'Tailwind CSS', 'Dojo Framework', 'Hardware Integration', 'HIPAA Compliance', 'Atomic Architecture', 'IFrame Bridging'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;