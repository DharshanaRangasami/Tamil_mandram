import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react'; // Removed Mail import

// Updated ContactItem: Removed email prop and display div
const ContactItem = ({ name, role, phone }) => (
  <div className="mb-6">
    <h4 className="text-white font-bold text-lg">{name}</h4>
    <p className="text-tamil-gold text-sm font-medium uppercase tracking-wider mb-2">{role}</p>
    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
      <Phone size={14} className="text-tamil-gold" /> 
      <span>{phone}</span>
    </div>
  </div>
);

const Footer = () => {
  // Helper function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Address */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-tamil-gold">ழகரம் தமிழ் மன்றம்</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              தமிழால் உரமாவோம்!<br />தமிழ் மூலம் உயர்வாவோம்!
            </p>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={20} className="text-tamil-gold shrink-0 mt-1" />
              <p>மகாராஜா கருத்தரங்கக்கூடம்,<br/>கொங்கு பொறியியல் கல்லூரி,<br/>பெருந்துறை - 638060.</p>
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-8 border-l-4 border-tamil-gold pl-4">மன்ற ஒருங்கிணைப்பாளர்கள்</h3>
            <ContactItem name="முனைவர். இரா.மௌலீசுவரப்பிரபு" role="மன்ற ஒருங்கிணைப்பாளர்" phone="+91 98765 43210" />
            <ContactItem name="முனைவர். ஆ.சீ.பெரியசாமி மணிகண்டன்" role="மன்ற ஒருங்கிணைப்பாளர்" phone="+91 98765 43211" />
          </div>

          {/* Student Representatives */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-8 border-l-4 border-tamil-gold pl-4">மன்ற<br/>உறுப்பினர்கள்</h3>
            <ContactItem name="பகலவன் க ச" role="செயலாளர்" phone="+91 91591 32429" />
            <ContactItem name="கனிகா கு" role="பொருளாளர்" phone="+91 97889 86926" />
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1">
             <h3 className="text-white font-bold text-xl mb-8 border-l-4 border-tamil-gold pl-4">விரைவு இணைப்புகள்</h3>
             <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  {/* ADDED onClick handler to scroll to top */}
                  <Link 
                    to="/" 
                    onClick={scrollToTop} 
                    className="hover:text-tamil-gold transition-colors"
                  >
                    முகப்பு
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-tamil-gold transition-colors">நிகழ்வுகள்</Link>
                </li>
                <li>
                  <a href="#contact" className="hover:text-tamil-gold transition-colors">தொடர்புக்கு</a>
                </li>
             </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Zhagaram Tamil Mandram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;