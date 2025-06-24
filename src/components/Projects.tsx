import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              filter === 'all' 
                ? 'bg-cyan-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
            }`}
          >
            <Filter className="inline mr-2" size={16} />
            All
          </button>
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === tag 
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links - Show on Hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;