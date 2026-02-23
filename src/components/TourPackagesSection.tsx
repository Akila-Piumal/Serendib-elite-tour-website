import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, Star, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import coastalImg from "@/assets/tour-coastal.jpg";
import heritageImg from "@/assets/tour-heritage.jpg";
import wellnessImg from "@/assets/tour-wellness.jpg";
import wildlifeImg from "@/assets/tour-wildlife.jpg";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    title: "The Grand Coastal Odyssey",
    tagline: "Sea · Sand · Serenity",
    days: 10,
    image: coastalImg,
    rating: 5,
    highlights: [
      "Private beach villa in Tangalle",
      "Whale watching in Mirissa",
      "Galle Fort sunset stroll",
      "Catamaran sailing experience",
      "Seafood tasting with private chef",
    ],
    itinerary: [
      { day: "Day 1–2", desc: "Arrive Colombo — Private transfer to Negombo beach resort" },
      { day: "Day 3–4", desc: "Bentota — River safari & water sports at a luxury villa" },
      { day: "Day 5–6", desc: "Galle — Heritage walk, boutique stays & coastal dining" },
      { day: "Day 7–8", desc: "Mirissa — Whale watching & secluded beach retreat" },
      { day: "Day 9–10", desc: "Tangalle — Private beach villa & sunset departure" },
    ],
    price: "From $4,800",
  },
  {
    title: "Royal Heritage Expedition",
    tagline: "History · Culture · Wonder",
    days: 8,
    image: heritageImg,
    rating: 5,
    highlights: [
      "Sigiriya helicopter flyover",
      "Private Temple of the Tooth visit",
      "Royal Kandyan dance performance",
      "Ancient city guided exploration",
      "Traditional cooking masterclass",
    ],
    itinerary: [
      { day: "Day 1–2", desc: "Colombo — City highlights & National Museum private tour" },
      { day: "Day 3–4", desc: "Kandy — Temple of the Tooth & tea country scenic drive" },
      { day: "Day 5–6", desc: "Sigiriya — Rock fortress climb & Polonnaruwa ruins" },
      { day: "Day 7–8", desc: "Anuradhapura — Sacred city & return to Colombo" },
    ],
    price: "From $3,900",
  },
  {
    title: "Wellness & Renewal Retreat",
    tagline: "Mind · Body · Spirit",
    days: 7,
    image: wellnessImg,
    rating: 5,
    highlights: [
      "Ayurvedic spa immersion",
      "Yoga at sunrise over tea hills",
      "Meditation with Buddhist monks",
      "Organic farm-to-table dining",
      "Hot springs & nature bathing",
    ],
    itinerary: [
      { day: "Day 1–2", desc: "Arrive — Wellness assessment & Ayurvedic consultation" },
      { day: "Day 3–4", desc: "Ella — Tea plantation yoga & waterfall meditation" },
      { day: "Day 5–6", desc: "Nuwara Eliya — Highland spa retreat & nature walks" },
      { day: "Day 7", desc: "Departure — Final treatment & renewal ceremony" },
    ],
    price: "From $3,200",
  },
  {
    title: "Wild Sri Lanka Safari",
    tagline: "Wildlife · Adventure · Thrill",
    days: 9,
    image: wildlifeImg,
    rating: 5,
    highlights: [
      "Leopard tracking in Yala",
      "Elephant gathering at Minneriya",
      "Birdwatching in Bundala",
      "Overnight jungle glamping",
      "Marine turtle conservation visit",
    ],
    itinerary: [
      { day: "Day 1–2", desc: "Colombo — Briefing & transfer to Wilpattu National Park" },
      { day: "Day 3–4", desc: "Minneriya — The great elephant gathering experience" },
      { day: "Day 5–6", desc: "Yala — Private leopard safari & jungle glamping" },
      { day: "Day 7–8", desc: "Bundala — Wetland birdwatching & coastal wildlife" },
      { day: "Day 9", desc: "Turtle sanctuary visit & scenic return to Colombo" },
    ],
    price: "From $5,200",
  },
];

const TourCard = ({ tour, index }: { tour: typeof tours[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
    >
      <div className="grid md:grid-cols-2 gap-0 bg-midnight/50 border border-ivory/5 overflow-hidden">
        {/* Image */}
        <div className={`relative overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
          <div className="aspect-[16/10] md:aspect-auto md:h-full">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
          </div>
          {/* Duration badge */}
          <div className="absolute top-5 left-5 bg-midnight/70 backdrop-blur-sm border border-gold/30 px-4 py-2 flex items-center gap-2">
            <Calendar size={13} className="text-gold" />
            <span className="text-ivory text-xs tracking-widest font-body uppercase">
              {tour.days} Days
            </span>
          </div>
          {/* Price badge */}
          <div className="absolute bottom-5 left-5">
            <span className="text-gold font-serif text-2xl">{tour.price}</span>
            <span className="text-ivory/40 text-xs font-body ml-2">per person</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-3">
            {tour.tagline}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light mb-4">
            {tour.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: tour.rating }).map((_, i) => (
              <Star key={i} size={12} className="fill-gold text-gold" />
            ))}
            <span className="text-ivory/30 text-xs font-body ml-2">Exclusive</span>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5 mb-6">
            {tour.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3">
                <MapPin size={12} className="text-gold mt-0.5 shrink-0" />
                <span className="text-ivory/60 text-sm font-body font-light">{h}</span>
              </div>
            ))}
          </div>

          {/* Expandable itinerary */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-gold/70 hover:text-gold text-xs tracking-[0.2em] uppercase font-body transition-colors mb-6"
          >
            <span>{expanded ? "Hide Itinerary" : "View Itinerary"}</span>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pb-6 border-l border-gold/20 ml-1">
              {tour.itinerary.map((item) => (
                <div key={item.day} className="pl-5 relative">
                  <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-gold/60" />
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body">
                    {item.day}
                  </p>
                  <p className="text-ivory/50 text-sm font-body font-light mt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <a
            href="#booking"
            className="inline-flex items-center gap-2 border border-gold/40 text-gold px-7 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-midnight transition-all duration-300 w-fit group/btn"
          >
            <span>Enquire Now</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TourPackagesSection = ({ showAll = false }: { showAll?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const displayedTours = showAll ? tours : tours.slice(0, 2);

  return (
    <section id="packages" className="luxury-section bg-midnight" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
            Curated Journeys
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory font-light">
            Signature <span className="italic">Tour Packages</span>
          </h2>
          <p className="text-ivory/40 font-body font-light text-sm md:text-base mt-4 max-w-xl mx-auto">
            Each journey is meticulously crafted to deliver extraordinary moments across the island's most exclusive destinations.
          </p>
        </motion.div>

        <div className="space-y-8">
          {displayedTours.map((tour, i) => (
            <TourCard key={tour.title} tour={tour} index={i} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate("/tour-packages")}
              className="inline-flex items-center gap-3 border border-gold/40 text-gold px-10 py-4 text-xs tracking-[0.25em] uppercase font-body hover:bg-gold hover:text-midnight transition-all duration-300 group"
            >
              <span>View All Packages</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TourPackagesSection;