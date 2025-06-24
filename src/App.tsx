import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Amit Kumar. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed with ❤️ for innovation and excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;