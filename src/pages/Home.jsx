import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

import pongalImage from '../assets/pongal-line.png';
import kolamImage from '../assets/kolam-line.png';


// ==========================================
// 1. DATA, CONSTANTS & STYLES
// ==========================================

const PONGAL_FORM_LINK = "https://docs.google.com/forms/u/0/";
const KOLAM_FORM_LINK = "https://docs.google.com/forms/u/0/";

// --- CUSTOM CSS FOR EVENTS CAROUSEL ---
const hideScrollbarStyle = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Events Data
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
  }
];


// ==========================================
// 2. ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

const imageFadeUpVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }
  },
};

// For modal content elements
const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};


// ==========================================
// 3. SUB-COMPONENT: Registration Card (EXACTLY AS PROVIDED)
// ==========================================
const RegistrationCard = ({ title, imageSrc, link, description }) => (
  // Outer container is a clickable animating link
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    // Hover Lift Effect on the whole card
    whileHover={{
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px -5px rgba(212,175,55,0.4), 0 0 15px rgba(212,175,55,0.2)",
    }}
    className="group relative h-full cursor-pointer block rounded-2xl p-[3px] bg-gradient-to-br from-gold/50 via-gold/20 to-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-shadow duration-300"
  >

    {/* Inner main container (Dark background card) */}
    <div className="relative h-full bg-[#0a0a0a] rounded-xl overflow-hidden flex flex-col">

      {/* Decorative corner glows */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      {/* Image Section */}
      <div className="h-72 relative overflow-hidden border-b border-gold/20 z-10 bg-black bg-opacity-100">
        <motion.img
          variants={imageFadeUpVariants}
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover relative z-10"
        />
        {/* Gradient for title readability */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20"></div>
        <h2 className="absolute bottom-6 left-0 right-0 text-center px-4 z-30 font-serif text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">{title}</h2>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col items-center flex-grow relative z-10 text-center">
        <div className="flex items-center gap-3 mb-6 opacity-60">
          <div className="h-px w-6 bg-gold"></div>
          <div className="w-1.5 h-1.5 rotate-45 border border-gold"></div>
          <div className="h-px w-6 bg-gold"></div>
        </div>

        <p className="text-white/90 mb-10 leading-relaxed font-light text-lg flex-grow">
          {description}
        </p>

        <motion.span
          // 1. Define the continuous pulse animation
          animate={{
            scale: [1, 1.05, 1], // Gently scale up and down
            // Pulse the golden shadow glow
            boxShadow: [
              "0 0 0px rgba(212,175,55,0)",
              "0 0 20px rgba(212,175,55,0.8)",
              "0 0 0px rgba(212,175,55,0)"
            ]
          }}
          // 2. Define smooth infinite looping transition
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          // 3. Removed conflicting CSS shadow classes, Framer handles it now
          className="mt-auto inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-rich-black font-extrabold uppercase tracking-wider rounded-full"
        >
          பதிவிற்கு <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.span>
      </div>
    </div>
  </motion.a>
);


// ==========================================
// 4. SUB-COMPONENT: Event Swipe Item (New for Carousel)
// ==========================================
const EventCarouselItem = ({ event, onOpenModal, isFirstItem }) => {
  // Define common base styles for consistency between the two button types
  const commonButtonStyles = "px-8 py-3 bg-gold text-black font-extrabold rounded-full shadow-lg shadow-gold/20 z-10 text-center inline-block";
  // Interactive styles for the clickable link version
  const interactiveStyles = "hover:bg-yellow-500 transition-all transform hover:scale-105 cursor-pointer no-underline";

  return (
    <div className="relative w-[75%] md:max-w-md mx-auto p-8 bg-[#0a0a0a] border border-gold/70 rounded-2xl flex flex-col min-h-[350px]">

      {/* Card Content */}
      <div className="flex-grow">
        <h3 className="text-3xl font-bold text-gold mt-9 mb-4 text-center">{event.title}</h3>
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full border border-white/30 text-white/70 text-sm">
            {event.category}
          </span>
        </div>
        {/* <p className="text-white/80 text-center leading-relaxed line-clamp-4 mb-8">
          {event.description}
        </p> */}
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

        <button
          onClick={onOpenModal} // Keeps existing functionality to open the modal
          className="cursor-pointer absolute bottom-0 right-0 text-sm text-white/80 hover:text-white/150 border-b border-transparent transition-colors pb-1 z-20 flex items-center gap-1"
        >
          மேலும் அறிய <span>&rarr;</span>
        </button>

      </div>
    </div>
  );
};

// ==========================================
// 5. SUB-COMPONENT: Expanded Modal Card (New for Events)
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
          <motion.span layoutId={`cat-${event.id}`} className="px-3 py-1 text-sm border border-white text-white rounded-full uppercase tracking-wider mb-2">{event.category}</motion.span>
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
// 6. MAIN INTEGRATED HOME COMPONENT
// ==========================================
const Home = () => {
  // State for Events modal logic
  const [selectedId, setSelectedId] = useState(null);
  const selectedEvent = selectedId !== null ? eventsData.find(e => e.id === selectedId) : null;

  // NEW: State for Carousel Index
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  // NEW: Carousel Navigation Handlers
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % eventsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + eventsData.length) % eventsData.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4 relative z-10">
      {/* Inject custom CSS for hiding scrollbars on the events carousel */}
      <style>{hideScrollbarStyle}</style>

      <header className="text-center mb-16 relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold mb-6 text-gold drop-shadow-sm"
        >
          தமிழர் திருநாள் கொண்டாட்டம்
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 mx-auto font-light"
        >
          மண் மணம் கமழும் தமிழர் திருநாளில், மரபோடு ஒருங்கிணைந்து மகிழ்வை பொங்குவோம்
          !!
        </motion.p>

        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 opacity-70"></div>
      </header>

      {/* Original Grid Container with original RegistrationCards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full max-w-6xl relative z-10 mb-32"
      >
        {/* Pongal Card */}
        <RegistrationCard
          title="தித்திக்கும் பொங்கல்"
          imageSrc={pongalImage}
          description="பொங்கும் மகிழ்ச்சியை, சுவைமிகு பொங்கலாய் படைத்திடுவோம் வாரீர் !"
          link={PONGAL_FORM_LINK}
        />

        {/* Kolam Card */}
        <RegistrationCard
          title="சித்திரக் கோலம்"
          imageSrc={kolamImage}
          description="உங்கள் விரல் அசைவில் விரியும் வண்ணக் கோலங்கள் படைத்திட வாரீர் !"
          link={KOLAM_FORM_LINK}
        />
      </motion.div>

      {/* ==========================
          SECTION SEPARATOR
      ========================== */}
      <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gold/100 to-transparent mb-24 opacity-90"></div>


      {/* ==========================
        NEW EVENTS CAROUSEL SECTION (Bottom Section)
      ========================== */}
      {/* Wrapper constrained to match top section width for alignment */}
      <div className="w-full lg:max-w-2xl mx-auto px-4 relative z-10 pb-20">
        {/* Events Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-extrabold mb-12 text-center text-gold drop-shadow-md"
        >
          போட்டிகள்
        </motion.h2>

        {/* --- CAROUSEL CONTAINER --- */}
        <div className="relative flex items-center justify-center group/carousel">

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 z-20 p-3 rounded-full bg-black/50 border border-gold/70 text-gold hover:bg-gold/20 hover:border-gold transition-all md:opacity-0 md:group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={25} />
          </button>

          {/* The Sliding Track Viewport */}
          <div className="w-full overflow-hidden py-8">
            {/* The Track that moves */}
            <motion.div
              className="flex"
              // Animate x position based on active index to slide by 100% of the container width
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {eventsData.map((event, index) => (
                // Wrapper to ensure each item takes full width of the viewport
                <div key={event.id} className="min-w-full flex justify-center">
                  <EventCarouselItem
                    event={event}
                    onOpenModal={() => setSelectedId(event.id)}
                    isFirstItem={index === 0}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 z-20 p-3 rounded-full bg-black/50 border border-gold/70 text-gold hover:bg-gold/20 hover:border-gold transition-all md:opacity-0 md:group-hover/carousel:opacity-100"
          >
            <ChevronRight size={25} />
          </button>
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="flex justify-center gap-3 mt-6">
          {eventsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-gold' : 'w-3 bg-gold/30 hover:bg-gold/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Important Note section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center mb-16 px-4 sm:px-6 lg:px-8"
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

      {/* Pop-up Overlay for Events */}
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

export default Home;