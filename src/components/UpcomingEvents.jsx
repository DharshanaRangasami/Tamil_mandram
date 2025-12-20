import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pongalImg from '../assets/pongal.png'; 
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const { events } = useSelector((state) => state.events);
  const navigate = useNavigate();

  // Safety checks to prevent crashes
  const safeEvents = Array.isArray(events) ? events : [];
  const pongalEvent = safeEvents.find(e => e.title && e.title.toLowerCase().includes('pongal')) || safeEvents[0];

  if (!pongalEvent) return null;

  return (
    <section className="max-w-7xl mx-auto mb-24 mt-24">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-tamil-gold">நிகழ்வுகள்</h2>
        <div className="h-[1px] bg-white/10 flex-1"></div>
      </div>

      {/* Wide Banner Card */}
      <div 
        onClick={() => navigate('/events')}
        className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-tamil-gold/30 cursor-pointer group shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:shadow-[0_0_60px_rgba(212,175,55,0.25)] transition-all duration-500"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-black">
            <img 
              src={pongalImg} 
              alt="Pongal Vizha" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
            />
        </div>
        
        {/* Dark Overlay (No Gradient) */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
            <span className="text-tamil-gold text-s font-bold tracking-[0.2em] uppercase mb-6">
                கொண்டாட வாரீர்!
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-normal drop-shadow-2xl leading-loose">
                {pongalEvent.title}
            </h1>
            
            {/* REGISTER BUTTON */}
            {/* Added intense gold glow on hover/active instead of white bg */}
            {/* <button className="px-10 py-4 bg-tamil-gold text-black font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_40px_rgba(212,175,55,0.9),0_0_80px_rgba(212,175,55,0.4)] active:shadow-[0_0_50px_rgba(212,175,55,1)] ">
                பதிவிற்கு
            </button> */}

            <button className="relative overflow-hidden px-10 py-4 bg-tamil-gold text-black font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_40px_rgba(212,175,55,0.9),0_0_80px_rgba(212,175,55,0.4)] active:shadow-[0_0_50px_rgba(212,175,55,1)]">
  
  {/* 1. The Text (Ensure z-index keeps it on top) */}
  <span className="relative z-10">
    பதிவிற்கு
  </span>

  {/* 2. The Shining Line Element (Animated automatically) */}
  <motion.div
    // Basic styling to create the slanted gradient line
    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 z-0"
    
    // Start position: Off-screen to the left
    initial={{ x: "-150%" }}
    
    // End position: Off-screen to the right
    animate={{ x: "150%" }}
    
    // The animation loop settings
    transition={{
      duration: 2,           // Takes 2 seconds to cross
      ease: "easeInOut",     // Smooth start and end
      repeat: Infinity,      // Loops forever
      repeatType: "loop",
      repeatDelay: 0.5         // Waits 1 second before starting the next shine
    }}
  />

</button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;