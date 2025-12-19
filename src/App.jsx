import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminPage from './pages/AdminPage';
import EventsPage from './pages/EventsPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <Router>
            <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-tamil-gold font-bold text-xl tracking-tighter cursor-pointer">
                  ழகரம் <span className="text-white">தமிழ் மன்றம்</span>
                </Link>
                
                {/* Navigation Items - ADMIN LINK REMOVED */} 
                <div className="flex gap-8 text-sm text-gray-300 items-center font-medium">
                    <Link to="/" className="hover:text-tamil-gold transition-colors">முகப்பு</Link>
                    <Link to="/events" className="hover:text-tamil-gold transition-colors">நிகழ்வுகள்</Link>
                    <a href="#contact" className="hover:text-tamil-gold transition-colors cursor-pointer">தொடர்புக்கு</a>
                </div>
            </nav>

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register/:id" element={<RegistrationPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/events" element={<EventsPage />} />
            </Routes>
        </Router>
      )}
    </>
  );
};

export default App;