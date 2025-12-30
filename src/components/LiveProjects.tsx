import React, { useState } from 'react';
import { ExternalLink, Code, Rocket, Filter } from 'lucide-react';
import { liveProjectsData, projectCategories } from '../data/liveProjects';

const LiveProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? liveProjectsData
    : liveProjectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="live-projects" className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="text-cyan-400 mr-3" size={40} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Live <span className="text-cyan-400">Projects</span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my currently live and deployed projects. Each application showcases
            real-world solutions built with modern technologies and best practices.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center mb-12 flex-wrap gap-3">
          <Filter className="text-cyan-400" size={20} />
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing <span className="text-cyan-400 font-semibold">{filteredProjects.length}</span>
            {' '}project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                {/* Live Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Live
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Brief Description */}
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.briefDescription}
                </p>

                {/* Full Description */}
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Code className="mr-2 text-cyan-400" size={18} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">▹</span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-gray-500 text-sm ml-4">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-cyan-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  <ExternalLink className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  Visit Live Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default LiveProjects;
