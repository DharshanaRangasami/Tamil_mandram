import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png'; 

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
      onAnimationComplete={onComplete}
    >
      {/* Main Container */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* 1. SINGLE SPINNING RING */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-tamil-gold animate-spin" />
        
        {/* 2. Background Glow */}
        <div className="absolute w-32 h-32 bg-tamil-gold/10 blur-2xl rounded-full" />

        {/* 3. THE LOGO */}
        <motion.img
          src={logoImg}
          alt="Tamil Club Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-32 h-32 object-contain relative z-10 drop-shadow-2xl"
        />
      </div>

      {/* Loading Bar */}
      <div className="mt-12 h-1 w-32 bg-gray-900 rounded-full overflow-hidden">
        <motion.div 
            className="h-full bg-tamil-gold"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;