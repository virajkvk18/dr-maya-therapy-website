import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Office', href: '#office' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-secondary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-serif text-xl md:text-2xl text-primary tracking-tighter uppercase font-bold">
              Dr. Maya Reynolds
            </span>
          </div>

          {/* Desktop Navigation & Button */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] text-primary hover:text-accent transition font-semibold">
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-accent transition uppercase tracking-widest shadow-md">
              Book a Session
            </button>
          </div>

          {/* Mobile Navigation - Added "Book" Button Here */}
          <div className="md:hidden flex items-center space-x-3">
            {/* This button appears only on mobile next to the menu icon */}
            <button className="bg-primary text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-sm active:scale-95 transition">
              Book
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-1 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Menu Overlay */}
      <div className={`md:hidden bg-white border-t border-secondary/10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif text-primary hover:text-accent border-b border-secondary/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          {/* Full-width button inside the expanded menu */}
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg">
            Book a Session Now
          </button>
        </div>
      </div>
    </nav>
  );
}