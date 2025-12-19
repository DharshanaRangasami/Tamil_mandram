import { createSlice } from '@reduxjs/toolkit';

const loadEvents = () => {
  try {
    const saved = localStorage.getItem('tamilEvents_v6');
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    return null;
  }
};

const defaultEvents = [
  {
    id: 1,
    title: "தமிழர் திருநாள் கொண்டாட்டம் ",
    date: "Jan 10, 2026",
    time: "9:00 AM",
    description: "Join us for the traditional harvest festival celebration.",
    image: "", 
  }
];

const initialState = {
  events: loadEvents() || defaultEvents,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
      localStorage.setItem('tamilEvents_v6', JSON.stringify(state.events));
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload);
      localStorage.setItem('tamilEvents_v6', JSON.stringify(state.events));
    }
  }
});

export const { addEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;