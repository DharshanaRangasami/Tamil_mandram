import React from 'react';
import { motion } from 'framer-motion';

// Components
import UpcomingEvents from '../components/UpcomingEvents';
import Footer from '../components/Footer'; 

// Images (Ensure this file exists!)
import heroImg from '../assets/tanjore_kovil.jpg'; 

const LandingPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-tamil-black flex flex-col">
      
      <div className="flex-grow px-6">
          
          {/* --- HERO SECTION --- */}
          <section className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center" id='home'>
              
              <div className="flex flex-col justify-center h-full z-10 py-10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  className="h-1 bg-tamil-gold mb-6"
                />
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
                >
                  காலம் கடந்த கலை<br />
                  <span className="text-tamil-gold">காவியமாய் ழகரம்!</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 text-lg leading-relaxed max-w-lg"
                >
                  நம் மரபின் சுவடுகளை நவீனத்தின் துணையோடு கொண்டாடி மகிழ ஓர் அரிய களம். வாருங்கள், நம் பாரம்பரியத்தை அடுத்த தலைமுறைக்கு எடுத்துச் செல்வோம்.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center z-0"
              >
                <img 
                  src={heroImg} 
                  alt="Tanjore Kovil" 
                  className="w-full h-[500px] object-contain rounded-2xl relative z-10 shadow-2xl"
                  style={{ filter: 'brightness(90%)' }} 
                />
              </motion.div>
            </div>
          </section>

          {/* --- UPCOMING EVENTS BANNER --- */}
         <section id="upcoming-events">
  <UpcomingEvents />
</section>


      </div>

      {/* --- FOOTER --- */}
     <footer id="contact">
  <Footer />
</footer>


    </div>
  );
};

export default LandingPage;