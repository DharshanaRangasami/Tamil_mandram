import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';
import Specialities from './pages/Specialities';
import Events from './pages/Events';
import Contact from './pages/Contact';
import ScrollToTop from './utils/ScrollToTop';
import EventsPage from './pages/EventsPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <Router>
            <nav>
              <Navbar/>
            </nav>
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register/:id" element={<RegistrationPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path='/events' element={<EventsPage/>}/>
              <Route path='/event' element={<Events/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/specialities' element={<Specialities/>}/>
            </Routes>

        </Router>
        

      )}
    </>
  );
};

export default App;