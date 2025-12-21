import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Sample Data
const eventsData = [
  {
    id: 0,
    title: "கயிறு இழுத்தல்",
    category: "குழு விளையாட்டு",
    description: "இது வலிமை மற்றும் குழு ஒற்றுமைக்கான ஒரு சவாலாகும். இதில் இரு அணிகள் ஒரு கயிற்றின் எதிர் முனைகளைப் பிடித்து இழுத்து, எதிரணியை மையக் கோட்டைக் கடந்து தங்கள் பக்கம் இழுக்க முயற்சிப்பார்கள்.",
    googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform", 
    rules: ["ஒவ்வொரு அணியிலும் 8 உறுப்பினர்கள் இருக்க வேண்டும்.", "வெவ்வேறு ஆண்டு மாணவர்கள் ஒரே அணியில் இணைய அனுமதி இல்லை.", "ஒரே ஆண்டில் படிக்கும் வெவ்வேறு துறை மாணவர்கள் அணி சேரலாம்.", "முட்கள் கொண்ட காலணிகளை அணியக்கூடாது.", "கயிற்றை நேராக இழுக்க வேண்டும்; கைகால்களில் அதைச் சுற்றிக்கொள்ளக் கூடாது.", "விதிமீறலில் ஈடுபடும் அணி உடனடியாக தகுதி நீக்கம் செய்யப்படும்."],
  },
  {
    id: 1,
    title: "உறியடித்தல்",
    category: "பாரம்பரிய விளையாட்டு",
    description: "கண்களைக் கட்டிக்கொண்டு, உயரத்தில் தொங்கவிடப்பட்டிருக்கும் பானையைக் குச்சியால் அடித்து உடைக்க முயற்சிக்கும் ஒரு விறுவிறுப்பான பாரம்பரிய விளையாட்டு. போட்டியாளர் பானையை நெருங்கும்போது, மற்றவர்கள் அவர்களைத் திசைதிருப்ப முயற்சிப்பதே இந்த ஆட்டத்தின் சிறப்பம்சம்.",
    googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
    rules: ["கால அவகாசம்: ஒவ்வொரு போட்டியாளருக்கும் அதிகபட்சம் 2 நிமிடங்கள் வழங்கப்படும்.", "போட்டியாளர்கள் தங்கள் கண்களை முழுமையாகக் கட்டியிருக்க வேண்டும்.", "பானையை உடைக்க (குச்சியைச் சுழற்ற) 3 வாய்ப்புகள் மட்டுமே அளிக்கப்படும்."],
  },
  {
    id: 2,
    title: "வீரச் சிலம்பம்",
    category: "தற்காப்புக் கலை",
    description: "வேகம், துல்லியம் மற்றும் திறமையை வெளிப்படுத்தும் வகையில், மூங்கில் கம்புகளைக் கொண்டு நிகழ்த்தப்படும் பழைமையான தமிழர் தற்காப்புக் கலை செயல் விளக்கம்.",
    rules: ["இது ஒரு தனிநபர் செயல் விளக்கம் மட்டுமே.", "பாதுகாப்பு உபகரணங்களை அணிவது பரிந்துரைக்கப்படுகிறது; எனினும், அனுபவம் வாய்ந்த வல்லுநர்களுக்கு இது கட்டாயமில்லை.", "சிலம்பச் சுற்றின் நுட்பம் மற்றும் லாவகத்தில் முக்கியக் கவனம் செலுத்தப்பட வேண்டும்."],
  },
  {
    id: 3,
    title: "கிராமிய நடனம்",
    category: "நாட்டுப்புறக் கலை",
    description: "நமது மன்ற உறுப்பினர்கள் வழங்கும், தமிழ்நாட்டின் பாரம்பரிய கிராமியக் கலைவடிவங்களான  பரதநாட்டியம், கும்மியாட்டம் மற்றும் நாட்டுப்புற நடனம் எனும் சிறப்பு நிகழ்ச்சிகள். இது ஒற்றுமையையும், மகிழ்ச்சியையும் பறைசாற்றும் ஒரு கண்கவர் கலை விருந்தாக அமையும்.",
    rules: ["பாரம்பரிய உடையில், ஒத்திசைவான தாளத்துடன் கும்மியடித்து ஆடும் அற்புதக் காட்சி.", "மனதை மயக்கும் கிராமியப் பாடல்களுடன் கூடிய விறுவிறுப்பான கலை நிகழ்ச்சி.", "தமிழர் பண்பாட்டின் செழுமையைக் கொண்டாடும் ஒரு இனிய தருணம்."],
  },
];

// --- ANIMATION VARIANTS ---
const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  },
};

// ==========================================
// 1. THE UPDATED GRID CARD COMPONENT
// ==========================================
const EventItem = ({ event, onOpenModal, isFirstItem }) => {
  // Define styles consistent with the existing design (gold borders)
  const commonButtonStyles = "px-8 py-3 bg-gold text-black font-extrabold rounded-full shadow-lg shadow-gold/20 z-10 text-center inline-block mb-6";
  const interactiveStyles = "hover:bg-yellow-500 transition-all transform hover:scale-105 cursor-pointer no-underline";

  return (
    <motion.div
      variants={itemVariants}
      layoutId={`card-container-${event.id}`}
      whileHover={{ scale: 1.03, borderColor: 'rgba(212, 175, 55, 1)' }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-80 bg-rich-black/90 rounded-xl border-2 border-gold/40 overflow-hidden z-0 flex flex-col"
    >
      {/* Top Content Section */}
      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center" onClick={onOpenModal} style={{ cursor: 'pointer' }}>
        <motion.h3 layoutId={`title-${event.id}`} className="font-serif text-2xl font-bold text-gold mb-4">{event.title}</motion.h3>
        <motion.span layoutId={`cat-${event.id}`} className="px-3 py-1 text-sm border border-white text-white rounded-full uppercase tracking-wider mb-2">{event.category}</motion.span>
      </div>

      {/* --- BOTTOM ACTIONS AREA --- */}
      {/* We use mt-auto to push this section to the bottom of the card */}
      <div className="mt-auto relative pb-10"> {/* Added padding-bottom (pb-10) to make space for the corner button */}

        <div className="flex justify-center">
          {event.id <= 1 ? (
            // SCENARIO 1: First Two Items (ID 0 & 1) -> "பதிவு செய்ய" (Clickable Link)
            <a
              href={event.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              // Combines base styles + interactive hover effects
              className={`${commonButtonStyles} ${interactiveStyles}`}
            >
              பதிவு செய்ய
            </a>
          ) : (
            // SCENARIO 2: Last Two Items (ID 2 & 3) -> "பார்வைக்கு" (Static Label)
            <div
              // Uses base styles, adds cursor-default to show it's not a link
              className={`${commonButtonStyles} cursor-default opacity-90`}
            >
              பார்வைக்கு
            </div>
          )}
        </div>


        {/* --- "LEARN MORE" MOVED TO BOTTOM RIGHT CORNER --- */}
        <button
          onClick={(e) => { e.stopPropagation(); onOpenModal(); }}
          className="cursor-pointer absolute bottom-7 right-6 text-base md:text-sm text-white/80 hover:text-white/150 transition-colors flex items-center gap-1 z-20"
        >
          மேலும் அறிய <span>&rarr;</span>
        </button>

      </div>
    </motion.div>
  );
};

// ==========================================
// 2. THE EXPANDED POP-UP MODAL (Unchanged)
// ==========================================
const ExpandedCard = ({ event, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rich-black/60 cursor-default"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-container-${event.id}`}
        className="bg-rich-black w-full max-w-2xl rounded-2xl border-2 border-gold overflow-hidden relative shadow-[0_0_50px_rgba(212,175,55,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="bg-gold/10 p-8 text-center border-b border-gold/20 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gold/50 hover:text-gold transition-colors p-2">
            <X size={28} />
          </button>
          <motion.h3 layoutId={`title-${event.id}`} className="font-serif text-4xl font-bold text-gold mb-4">{event.title}</motion.h3>
          <motion.span layoutId={`cat-${event.id}`} className="px-4 py-2 text-sm border border-white text-white rounded-full uppercase tracking-wider">{event.category}</motion.span>
        </div>

        {/* Expanded Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, type: "spring", damping: 20, stiffness: 90 }
          }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
          className="p-10 bg-gradient-to-br from-rich-black to-[#1a1100] max-h-[60vh] overflow-y-auto custom-scrollbar"
        >
          <motion.div variants={contentItemVariants} className="mb-10">
            <h4 className="text-gold font-bold mb-4 uppercase text-base tracking-widest flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3 shadow-[0_0_10px_#D4AF37]"></span>
              விளக்கம்
            </h4>
            <p className="text-justify text-white/90 text-lg leading-relaxed font-light">{event.description}</p>
          </motion.div>

          <motion.div variants={contentItemVariants}>
            <h4 className="text-gold font-bold mb-4 uppercase text-base tracking-widest flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3 shadow-[0_0_10px_#D4AF37]"></span>
              விதிமுறைகள்
            </h4>
            <ul className="text-justify text-white/90 list-disc list-outside ml-6 space-y-3">
              {event.rules.map((rule, index) => (
                <li key={index} className="pl-2 text-base font-light">{rule}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


// ==========================================
// MAIN COMPONENT
// ==========================================
const Events = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedEvent = selectedId !== null ? eventsData.find(e => e.id === selectedId) : null;

  return (
    <div className="py-16 relative z-10 px-4 min-h-screen">
      <div className="max-w-md md:max-w-6xl mx-auto w-full">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl font-extrabold mb-8 text-center text-gold drop-shadow-md"
        >
          கலைகளின் சங்கமம்
        </motion.h1>

        <br/><br/><br/>

        {/* The Grid Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-0"
        >
          {eventsData.map((event, index) => (
            <EventItem
              key={event.id}
              event={event}
              // Pass the modal opener function
              onOpenModal={() => setSelectedId(event.id)}
              // Determine if this is the first item based on index
              isFirstItem={index === 0}
            />
          ))}
        </motion.div>

        <br /><br />

        {/* Important Note section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          {/* <p className="text-center text-white text-lg max-w-3xl leading-relaxed p-4 bg-black border border-gold/80 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <span className="font-bold text-gold block mb-1 sm:inline sm:mb-0">
              சிறப்புக் குறிப்பு:
            </span>{" "}
            உறியடித்தல் மற்றும் சிலம்பம் ஆகிய நிகழ்வுகளுக்கு, விழா நடைபெறும் இடத்திலேயே{" "}
            <span className="font-semibold text-gold">
              நேரடிப் பதிவு
            </span>{" "}
            செய்துகொள்ளலாம்.
          </p> */}
        </motion.div>

      </div>

      <AnimatePresence>
        {selectedId !== null && selectedEvent && (
          <ExpandedCard
            event={selectedEvent}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;