import React from "react";
import { Phone, MapPin } from "lucide-react";

/* =========================
   CONTACT ITEM
========================= */
const ContactItem = ({ name, role, phone }) => (
  <div className="mb-3 sm:mb-5">
    <h4 className="text-white font-semibold text-sm sm:text-base mb-0.5">
      {name}
    </h4>

    <p className="text-yellow-600 text-[10px] sm:text-xs font-medium uppercase tracking-wide mb-1">
      {role}
    </p>

    <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
      <Phone size={13} className="text-yellow-600 shrink-0" />
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="hover:text-yellow-600 transition-colors"
      >
        {phone}
      </a>
    </div>
  </div>
);

/* =========================
   FOOTER
========================= */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-black border-t border-white/10
                 pt-8 sm:pt-12 md:pt-16
                 pb-6 sm:pb-8
                 mt-10 sm:mt-14 md:mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                     gap-6 sm:gap-8 lg:gap-12
                     mb-10 sm:mb-14"
        >

          {/* BRAND */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-5">
              <span className="text-yellow-600">ழகரம் தமிழ் மன்றம்</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base
                          leading-snug sm:leading-relaxed
                          mb-3 sm:mb-5">
              தமிழால் உரமாவோம்!<br />
              தமிழ் மூலம் உயர்வாவோம்!
            </p>

            <div className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
              <MapPin size={16} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="leading-snug sm:leading-relaxed">
                மகாராஜா கருத்தரங்கக்கூடம்,<br />
                கொங்கு பொறியியல் கல்லூரி,<br />
                பெருந்துறை - 638060.
              </p>
            </div>
          </div>

          {/* FACULTY */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg
                           mb-3 sm:mb-6
                           border-l-4 border-yellow-600 pl-3">
              மன்ற ஒருங்கிணைப்பாளர்கள்
            </h3>

            <ContactItem
              name="முனைவர். இரா.மௌலீசுவரப்பிரபு"
              role="மன்ற ஒருங்கிணைப்பாளர்"
              phone="+91 98765 43210"
            />
            <ContactItem
              name="முனைவர். ஆ.சீ.பெரியசாமி மணிகண்டன்"
              role="மன்ற ஒருங்கிணைப்பாளர்"
              phone="+91 98765 43211"
            />
          </div>

          {/* STUDENTS */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg
                           mb-3 sm:mb-6
                           border-l-4 border-yellow-600 pl-3">
              மன்ற உறுப்பினர்கள்
            </h3>

            <ContactItem
              name="பகலவன் க ச"
              role="செயலாளர்"
              phone="+91 91591 32429"
            />
            <ContactItem
              name="கனிகா கு"
              role="பொருளாளர்"
              phone="+91 97889 86926"
            />
          </div>

          {/* QUICK LINKS */}
         
        </div>

        {/* COPYRIGHT */}
        <div
          className="border-t border-white/10 pt-4 sm:pt-6
                     flex flex-col sm:flex-row
                     gap-2 sm:gap-4
                     text-xs sm:text-sm text-gray-500"
        >
          <p className="text-center sm:text-left">
            © 2025 Zhagaram Tamil Mandram
          </p>
          <p className="text-center sm:text-right text-gray-600">
            தமிழ் வாழ்க! தமிழர் வாழ்க!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
