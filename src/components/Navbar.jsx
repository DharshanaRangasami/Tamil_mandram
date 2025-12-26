import React from "react";
import { Link, useLocation } from "react-router-dom";
import PongalNavbar from "./PongalNavbar";

const Navbar = () => {
  const location = useLocation();
  const isEventsPage = location.pathname === "/events";

  return (
    <>
      {isEventsPage ?
        (
        <PongalNavbar />
      ):(
        <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-tamil-gold font-bold text-xl tracking-tighter cursor-pointer"
          >
            ழகரம் <span className="text-white">தமிழ் மன்றம்</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex gap-8 text-sm text-gray-300 items-center font-medium">
            <Link to="/" className="hover:text-tamil-gold transition-colors">
              முகப்பு
            </Link>

            <Link to="/events" className="hover:text-tamil-gold transition-colors">
              நிகழ்வுகள்
            </Link>

            <Link
              to="/contact"
              className="hover:text-tamil-gold transition-colors"
            >
              தொடர்புக்கு
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
