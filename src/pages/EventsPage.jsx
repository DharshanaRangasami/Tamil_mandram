import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

import pongalImage from "../assets/pongal-line.png";
import kolamImage from "../assets/kolam-line.png";
import Footer from "../components/Footer";

/* =========================================
   CONSTANTS
========================================= */

const PONGAL_FORM_LINK = "https://docs.google.com/forms/u/0/";
const KOLAM_FORM_LINK = "https://docs.google.com/forms/u/0/";

const hideScrollbarStyle = `
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;

/* =========================================
   EVENTS DATA
========================================= */

const eventsData = [
  {
    id: 0,
    title: "கயிறு இழுத்தல்",
    category: "குழு விளையாட்டு",
    description:
      "இது வலிமை மற்றும் குழு ஒற்றுமைக்கான ஒரு சவாலாகும்.",
    googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
    rules: [
      "ஒவ்வொரு அணியிலும் 8 உறுப்பினர்கள் இருக்க வேண்டும்.",
      "வெவ்வேறு ஆண்டு மாணவர்கள் ஒரே அணியில் இணைய அனுமதி இல்லை.",
    ],
  },
  {
    id: 1,
    title: "உறியடித்தல்",
    category: "பாரம்பரிய விளையாட்டு",
    description:
      "கண்களைக் கட்டிக்கொண்டு பானையை உடைக்கும் பாரம்பரிய விளையாட்டு.",
    googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
    rules: [
      "ஒவ்வொரு போட்டியாளருக்கும் 2 நிமிடம்.",
      "3 வாய்ப்புகள் மட்டுமே.",
    ],
  },
  {
    id: 2,
    title: "வீரச் சிலம்பம்",
    category: "தற்காப்புக் கலை",
    description:
      "தமிழர் பாரம்பரிய தற்காப்புக் கலை.",
    rules: ["தனிநபர் நிகழ்ச்சி"],
  },
  {
    id: 3,
    title: "கிராமிய நடனம்",
    category: "நாட்டுப்புறக் கலை",
    description:
      "தமிழர் பண்பாட்டின் செழுமையை வெளிப்படுத்தும் நடனம்.",
    rules: ["குழு நிகழ்ச்சி"],
  },
];

/* =========================================
   ANIMATIONS
========================================= */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* =========================================
   REGISTRATION CARD
========================================= */

const RegistrationCard = ({ title, imageSrc, link, description }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className="block rounded-2xl p-[3px] bg-gradient-to-br from-gold/50 via-gold/20 to-gold/50"
  >
    <div className="bg-[#0a0a0a] rounded-xl overflow-hidden flex flex-col">
      <div className="h-56 sm:h-64 md:h-72 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 sm:p-8 text-center flex flex-col flex-grow">
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-4">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-white/80 mb-6 flex-grow">
          {description}
        </p>

        <span className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-black font-bold rounded-full mx-auto">
          பதிவிற்கு <ArrowRight size={18} />
        </span>
      </div>
    </div>
  </motion.a>
);

/* =========================================
   EVENT CAROUSEL ITEM
========================================= */

const EventCarouselItem = ({ event, onOpenModal }) => (
  <div className="w-[90%] sm:w-[80%] md:w-[70%] max-w-sm sm:max-w-md mx-auto
                  p-6 sm:p-8 bg-[#0a0a0a] border border-gold/60 rounded-2xl flex flex-col min-h-[320px]">
    <h3 className="text-xl sm:text-2xl text-gold font-bold text-center mb-4">
      {event.title}
    </h3>

    <span className="mx-auto mb-6 px-4 py-1 text-sm border border-white/30 text-white/70 rounded-full">
      {event.category}
    </span>

    <div className="mt-auto text-center space-y-4">
      {event.googleFormUrl ? (
        <a
          href={event.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gold text-black font-bold rounded-full"
        >
          பதிவு செய்ய
        </a>
      ) : (
        <div className="inline-block px-6 py-3 bg-gold text-black font-bold rounded-full opacity-80">
          பார்வைக்கு
        </div>
      )}

      <button
        onClick={onOpenModal}
        className="block mx-auto text-sm text-white/80 hover:text-white"
      >
        மேலும் அறிய →
      </button>
    </div>
  </div>
);

/* =========================================
   MODAL
========================================= */

const ExpandedCard = ({ event, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-[#0a0a0a]
                 border border-gold rounded-2xl p-6 sm:p-8 md:p-10"
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-gold">
        <X size={24} />
      </button>

      <h3 className="font-serif text-2xl sm:text-3xl text-gold mb-4">
        {event.title}
      </h3>

      <p className="text-white/90 mb-6">{event.description}</p>

      <ul className="list-disc ml-6 text-white/80 space-y-2">
        {event.rules?.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

/* =========================================
   MAIN PAGE
========================================= */

const EventsPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <style>{hideScrollbarStyle}</style>

      {/* HEADER */}
      <header className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="font-serif text-3xl sm:text-4xl mt-10 md:text-5xl lg:text-6xl text-gold mb-4">
          தமிழர் திருநாள் கொண்டாட்டம்
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90">
          மரபோடு ஒருங்கிணைந்து மகிழ்வை பொங்குவோம்
        </p>
      </header>

      {/* REGISTRATION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto mb-24"
      >
        <RegistrationCard
          title="தித்திக்கும் பொங்கல்"
          imageSrc={pongalImage}
          link={PONGAL_FORM_LINK}
          description="பொங்கல் தயாரிப்பு போட்டி"
        />
        <RegistrationCard
          title="சித்திரக் கோலம்"
          imageSrc={kolamImage}
          link={KOLAM_FORM_LINK}
          description="கோலம் போட்டி"
        />
      </motion.div>

      {/* CAROUSEL */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl text-gold mb-10">
          போட்டிகள்
        </h2>

        <div className="relative">
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
          >
            {eventsData.map((event) => (
              <div key={event.id} className="min-w-full flex justify-center">
                <EventCarouselItem
                  event={event}
                  onOpenModal={() => setSelectedId(event.id)}
                />
              </div>
            ))}
          </motion.div>

          <button
            onClick={() =>
              setActiveIndex((i) => (i - 1 + eventsData.length) % eventsData.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gold"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => setActiveIndex((i) => (i + 1) % eventsData.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gold"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {selectedId !== null && (
          <ExpandedCard
            event={eventsData.find((e) => e.id === selectedId)}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default EventsPage;
