import React from 'react';
import { motion } from 'framer-motion';

const Specialities = () => {
  // Animation Variants for cleaner code
  const containerStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element animating in
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } // Smooth easing
    },
  };

  return (
    <div className="max-w-4xl mx-auto py-10 relative z-10 px-4">
      {/* Main Card Container with animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-rich-black/90 p-8 mt-10 md:p-12 rounded-xl border border-gold/70 shadow-[0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-sm"
      >
        
        {/* Main Heading Animated */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-gold drop-shadow-sm"
        >
          தைப்பொங்கல் திருநாளின் மகத்துவம்
        </motion.h1>
        
        {/* Content container holding staggered sections */}
        <motion.div 
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="space-y-12 leading-relaxed text-lg"
        >
          {/* Section 1 */}
          <motion.section variants={fadeInUp}>
            <h2 className="font-serif text-2xl text-gold-light mb-4 flex items-center">
              அறுவடைத் திருவிழா
            </h2>
            <p className="text-justify text-white/90 font-light">
              தைப்பொங்கல் என்பது உலகம் முழுவதிலும் உள்ள தமிழர்களால் நான்கு நாட்கள் கொண்டாடப்படும் மிகச்சிறந்த அறுவடைத் திருவிழாவாகும். இது கதிரவன் (சூரிய பகவான்), இயற்கை அன்னை மற்றும் உழவுக்கு உதவும் கால்நடைகளுக்கு, செழிப்பான விளைச்சலைத் தந்தமைக்காக நன்றி தெரிவிக்கும் நன்னாள். 'பொங்கல்' என்ற சொல்லுக்கு 'பொங்கி வழிதல்' என்று பொருள். புது அறுவடை அரிசியுடன் பால், வெல்லம் சேர்த்துப் பாரம்பரியமாகப் பொங்கலிட்டு மகிழ்வதைக் குறிக்கிறது.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeInUp}>
            <h2 className="font-serif text-2xl text-gold-light mb-4 flex items-center">
              நான்கு நாள் கொண்டாட்டம்
            </h2>
            <ul className="list-none space-y-4 ml-4">
              <li className="text-justify text-white/90 font-light">
                <strong className="text-gold font-bold block mb-1">போகிப் பண்டிகை:</strong> 
                பொங்கலுக்கு முந்தைய நாள். 'பழையன கழிதலும், புதியன புகுதலும்' என்ற நோக்கில், பழைய பொருட்களை நீக்கி, புதிய தொடக்கத்தைக் கொண்டாடும் நாள்.
              </li>
              <li className="text-justify text-white/90 font-light">
                <strong className="text-gold font-bold block mb-1">சூரியன் பொங்கல்:</strong> 
                இதுவே முதன்மைத் திருநாள். அலங்கரிக்கப்பட்ட புதுப்பானையில் வீட்டு முற்றத்தில் பொங்கலிட்டு, கதிரவனுக்குப் படையலிட்டு நன்றி செலுத்தும் நாள்.
              </li>
              <li className="text-justify text-white/90 font-light">
                <strong className="text-gold font-bold block mb-1">மாட்டுப் பொங்கல்:</strong> 
                விவசாயத்தில் முக்கியப் பங்காற்றும் கால்நடைகளைப் (மாடுகளைப்) போற்றி, அவற்றிற்கு நன்றி செலுத்தி வழிபடும் நாள்.
              </li>
              <li className="text-justify text-white/90 font-light">
                <strong className="text-gold font-bold block mb-1">காணும் பொங்கல்:</strong> 
                நிறைவு நாளான இன்று, குடும்பத்தினர் மற்றும் உறவினர்களுடன் ஒன்றுகூடி, சுற்றுலா சென்று மகிழும் நாள்.
              </li>
            </ul>
          </motion.section>

           {/* Section 3 */}
           <motion.section variants={fadeInUp}>
            <h2 className="font-serif text-2xl text-gold-light mb-4 flex items-center">
               பொங்கலின் சிறப்பு
            </h2>
            <p className="text-justify text-white/90 font-light">
              பொங்கல் என்பது வெறும் அறுவடைத் திருவிழா மட்டுமல்ல. இது இருளை வென்று ஒளி பிறப்பதையும், சூரியன் வடக்கு நோக்கிப் பயணிக்கும் 'உத்ராயண' காலத்தின் தொடக்கத்தையும் குறிக்கிறது. இது வளம், நன்றியுணர்வு மற்றும் நமது பண்பாட்டு மரபின் உன்னதக் கொண்டாட்டமாகும்.
            </p>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Specialities;