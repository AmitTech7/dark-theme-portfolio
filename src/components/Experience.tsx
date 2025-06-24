import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {job.position}
                        </h3>
                        <h4 className="text-cyan-400 font-medium">
                          {job.company}
                        </h4>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-2" />
                        {job.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-medium mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start text-gray-300 text-sm"
                          >
                            <CheckCircle2 
                              size={16} 
                              className="text-green-400 mr-3 mt-0.5 flex-shrink-0" 
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
            <span className="text-gray-300 mr-2">Looking for new opportunities</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;