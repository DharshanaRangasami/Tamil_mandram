import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../redux/eventSlice';
import { motion } from 'framer-motion';

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', date: '', time: '', location: '', description: '', image: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent({ id: Date.now(), ...formData }));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-tamil-black pt-24 px-6 pb-20 flex justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-tamil-gold mb-8 text-center">Add New Event</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div><label className="block text-sm text-gray-400 mb-2">Title</label><input name="title" required onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-2">Description</label><textarea name="description" required onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-2">Image URL</label><input name="image" required onChange={handleChange} className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white" /></div>
          <button type="submit" className="w-full bg-tamil-gold text-black font-bold py-4 rounded-lg mt-4">Publish Event</button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminPage;