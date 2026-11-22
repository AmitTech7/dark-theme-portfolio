'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Hire Me', href: '/hire' },
  { name: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `transition-colors duration-200 font-medium ${
      isActive(href) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
    }`;

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            aria-label="Amit Kumar - home"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            AK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.name}
              </Link>
            ))}
            <Link
              href="/live-projects"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
            >
              <Rocket className="mr-2" size={18} />
              Live Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${linkClass(item.href)} text-left`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/live-projects"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <Rocket className="mr-2" size={18} />
                Live Projects
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
