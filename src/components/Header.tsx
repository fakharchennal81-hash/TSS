import { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block bg-navy-950 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-gray-300">Director: Mudassir Raza Khan — 0312-4950133</span>
          </div>
          <div className="flex items-center gap-2 text-gold-400">
            <span className="font-medium">A Great Way of Education</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo + School name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center ring-2 ring-gold-400 shadow-md flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-gold-400" />
              </div>
              <div className="leading-tight">
                <h1 className="font-serif text-base sm:text-lg font-bold text-navy-900">
                  The Science Scope
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Higher Secondary School & College, Multan
                </p>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-medium text-navy-800 hover:text-red-600 transition-colors rounded-md hover:bg-navy-50"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#admissions')}
                className="ml-2 px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                Apply Now
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-navy-50 hover:text-red-600 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#admissions')}
                className="block w-full text-center px-5 py-3 mt-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
