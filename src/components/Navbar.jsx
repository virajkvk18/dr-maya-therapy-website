import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Make sure lucide-react is installed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Office', href: '#office' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-serif text-xl md:text-2xl text-primary tracking-tighter uppercase font-bold">
              Dr. Maya Reynolds
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest text-primary hover:text-accent transition font-medium">
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-secondary px-6 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition uppercase tracking-tighter">
              Book a Session
            </button>
          </div>

          {/* Mobile Right Side (Button + Hamburger) */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="bg-primary text-secondary px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter">
              Book
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Menu Overlay */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 pt-2 pb-6 space-y-2 bg-white border-t border-secondary/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-primary hover:text-accent border-b border-secondary/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <button className="w-full bg-primary text-secondary py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}