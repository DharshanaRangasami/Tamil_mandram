import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-rich-black">
      {/* --- Decorative Background Elements --- */}
      {/* These sit at z-0. Content sits at z-10. */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        {/* Top Left Sugarcane/Pot fake placement */}
        {/* <img 
          src="https://images.unsplash.com/photo-1610383779679-28219c8625c6?q=80&w=1974&auto=format&fit=crop" 
          alt="decorative element"
          className="absolute -top-20 -left-20 w-96 h-96 object-cover rounded-full opacity-30 blur-sm md:opacity-50 md:blur-0"
        /> */}
         {/* Bottom Right decorative element */}
         <img 
          src="https://images.unsplash.com/photo-1582099468649-196863da51a1?q=80&w=2070&auto=format&fit=crop" 
          alt="decorative element"
          className="absolute bottom-0 right-0 w-[500px] h-[500px] object-cover opacity-20 md:opacity-40"
        />
        {/* A subtle golden gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-rich-black"></div>
      </div>

      {/* --- Main Content --- */}
      {/* z-10 ensures text is above images */}
      <Navbar className="relative z-20" />
      <main className="flex-grow relative z-10 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer className="relative z-20" />
    </div>
  );
};

export default Layout;