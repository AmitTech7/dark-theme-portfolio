import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_70%)]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AK</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            {personal.name}
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-400 mb-4">
          {personal.title}
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personal.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;