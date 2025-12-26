import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const PongalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'முகப்பு', path: '/event' },
    { name: 'சிறப்புகள்', path: '/specialities' },
    { name: 'நிகழ்ச்சிகள்', path: '/events' },
    { name: 'தொடர்பு', path: '/contact' },
  ];

  // ================= STYLES DEFINITIONS =================

  // --- DESKTOP STYLES (Rounded, Buttons, Shadow Box Active) ---
  const desktopBaseStyles = "text-lg font-medium text-gold px-4 py-2 rounded-lg transition-all duration-300 border";
  const desktopInactiveStyles = "border-transparent hover:bg-gold/10";
  const desktopActiveStyles = "bg-gold/20 border-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.5)]";

  // --- MOBILE STYLES (Rectangular, Full Width, Flat Active Box) ---
  // Base: Block, full width, rectangular (no rounded), larger text padding
  const mobileBaseStyles = "block w-full text-center text-lg font-medium px-4 py-3 transition-all duration-300 border-y border-transparent";
  // Inactive: subtle hover effect
  const mobileInactiveStyles = "text-gold/80 hover:bg-gold/10 hover:text-gold";
  // Active: Flat rectangular box, solid border color, distinct background
  const mobileActiveStyles = "bg-gold/20 border-gold text-gold font-bold";


  return (
    <>
      {/* ================= MAIN STICKY NAVBAR (DESKTOP) ================= */}
      <nav className="bg-rich-black border-b border-gold/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">

            {/* Logo Area */}
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="font-serif text-2xl font-bold tracking-wider text-gold">
                பொங்கல்
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-3">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    // Use DESKTOP specific styles
                    className={`${desktopBaseStyles} ${active ? desktopActiveStyles : desktopInactiveStyles}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gold focus:outline-none transition-transform duration-300 hover:scale-110"
                aria-label="Toggle Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SLIDING MENU ================= */}
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-60 bg-rich-black border-l border-gold/20 shadow-[-10px_0_20px_rgba(0,0,0,0.7)] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-end p-5 border-b border-gold/10">
            <button
              onClick={toggleMenu}
              className="text-gold focus:outline-none hover:scale-110 transition-transform p-0"
              aria-label="Close Menu"
            >
               <X size={28} />
            </button>
          </div>

          {/* Drawer Links Container */}
          <div className="flex flex-col py-4 overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`${mobileBaseStyles} ${active ? mobileActiveStyles : mobileInactiveStyles}`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PongalNavbar;