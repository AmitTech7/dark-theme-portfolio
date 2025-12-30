import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import LiveProjects from "./components/LiveProjects";

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </>
);

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/live-projects" element={<LiveProjects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {currentYear} Amit Kumar. Built with React, TypeScript, and
                Tailwind CSS.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Designed with ❤️ for innovation and excellence
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
