import React from 'react';
import { MapPin, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { personal, stats, aiDevelopment, strengths, education } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Building Scalable Enterprise Products
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personal.bio}
              </p>
            </div>

            <div className="flex items-center text-gray-300 mb-6">
              <MapPin className="mr-2 text-cyan-400" size={20} />
              <span>{personal.location}</span>
            </div>
            <p className="text-gray-300">
              Open to full-time roles, working remotely or on-site across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Agentic AI */}
            <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/50">
              <h4 className="text-white font-semibold mb-2">Agentic AI &amp; AI-Assisted Development</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {aiDevelopment.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-600">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{aiDevelopment.summary}</p>
            </div>

            {/* Strengths & Education */}
            <ul className="grid sm:grid-cols-2 gap-2 text-gray-300 text-sm">
              {strengths.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm">
              <span className="text-white font-medium">Education:</span> {education.degree}, {education.institute}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
              >
                <ExternalLink className="mr-2" size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;