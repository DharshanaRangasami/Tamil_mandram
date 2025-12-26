import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const RegistrationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const events = useSelector((state) => state.events.events);
  const event = events.find(e => e.id === Number(id));
  const [submitted, setSubmitted] = useState(false);

  if (!event) return <div className="text-white p-10">Event not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-black">
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-tamil-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-5 z-10"
      >
        <div className="md:col-span-2 bg-tamil-dark/80 p-8 flex flex-col justify-between border-r border-white/5">
          <div>
            <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 text-sm transition-colors">
               <ArrowLeft size={16} /> Back
            </button>
            <h1 className="text-2xl font-bold text-tamil-gold mb-2">{event.title}</h1>
            <p className="text-sm text-gray-300 mb-4">{event.date} • {event.time}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{event.description}</p>
          </div>
        </div>
        <div className="md:col-span-3 p-8 md:p-12 bg-black/40">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-bold text-white mb-6">Secure your spot</h2>
              <div className="space-y-1">
                <label className="text-xs text-tamil-gold ml-1">Full Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tamil-gold transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-tamil-gold ml-1">Email</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tamil-gold transition-colors" />
              </div>
              <button type="submit" className="w-full bg-tamil-gold text-black font-bold py-3.5 rounded-lg mt-6 hover:bg-white hover:scale-[1.02] transition-all duration-300">
                Confirm Registration
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <CheckCircle className="text-tamil-gold w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-white">Registered!</h3>
              <button onClick={() => navigate('/')} className="mt-6 text-white text-sm hover:text-tamil-gold underline">Return Home</button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;