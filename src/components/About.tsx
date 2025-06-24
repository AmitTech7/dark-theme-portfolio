import React from 'react';
import { MapPin, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About me"
                className="rounded-2xl shadow-2xl w-full object-cover h-96 lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Building Digital Experiences
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personal.bio}
              </p>
            </div>

            <div className="flex items-center text-gray-300 mb-6">
              <MapPin className="mr-2 text-cyan-400" size={20} />
              <span>{personal.location}</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Resume.pdf"
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