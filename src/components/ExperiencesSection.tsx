import { motion, useInView, AnimatePresence  } from "framer-motion";
import { useRef, useState  } from "react";
import { ArrowRight, X, MapPin, Clock, Star } from "lucide-react";
import safariImg from "@/assets/exp-safari.jpg";
import sigiriyaImg from "@/assets/exp-sigiriya.jpg";
import teaImg from "@/assets/exp-tea.jpg";
import villaImg from "@/assets/exp-villa.jpg";
import cultureImg from "@/assets/exp-culture.jpg";

const experiences = [
  {
    title: "Private Yala Leopard Safari",
    subtitle: "Wild Encounters",
    image: safariImg,
    location: "Yala National Park",
    duration: "Full Day",
    rating: 4.9,
    description: "Embark on an exclusive private safari through Sri Lanka's premier wildlife sanctuary. Track elusive leopards, sloth bears, and exotic birdlife with an expert naturalist guide in a luxury 4x4 vehicle.",
    highlights: ["Private jeep with expert tracker", "Sunrise & sunset game drives", "Gourmet bush picnic", "Photography assistance"],
  },
  {
    title: "Helicopter Tour Over Sigiriya",
    subtitle: "Aerial Majesty",
    image: sigiriyaImg,
    location: "Sigiriya Rock Fortress",
    duration: "2 Hours",
    rating: 5.0,
    description: "Soar above the ancient Sigiriya Rock Fortress and the lush cultural triangle from a private helicopter. Witness breathtaking aerial views of UNESCO heritage sites and pristine jungle canopy.",
    highlights: ["Private helicopter charter", "Aerial views of Sigiriya & Pidurangala", "Champagne on landing", "Professional aerial photography"],
  },
  {
    title: "Tea Estate Luxury Retreat",
    subtitle: "Highland Serenity",
    image: teaImg,
    location: "Nuwara Eliya Highlands",
    duration: "2 Days",
    rating: 4.8,
    description: "Retreat to an exclusive colonial-era tea estate nestled in misty highlands. Experience private tea tastings, guided plantation walks, and serene mountain views from your luxury bungalow.",
    highlights: ["Private estate bungalow", "Master tea tasting session", "Guided plantation walk", "Farm-to-table dining"],
  },
  {
    title: "Southern Coast Villa Escape",
    subtitle: "Coastal Bliss",
    image: villaImg,
    location: "Southern Coastline",
    duration: "3 Days",
    rating: 4.9,
    description: "Escape to a stunning oceanfront private villa along Sri Lanka's southern coast. Enjoy pristine beaches, whale watching excursions, and world-class dining in complete seclusion.",
    highlights: ["Private beachfront villa", "Whale watching excursion", "Surf or snorkel sessions", "Private chef experience"],
  },
  {
    title: "Cultural Royal Heritage Tour",
    subtitle: "Timeless Legacy",
    image: cultureImg,
    location: "Kandy & Ancient Cities",
    duration: "3 Days",
    rating: 4.7,
    description: "Journey through centuries of royal heritage visiting ancient kingdoms, sacred temples, and vibrant cultural performances. Experience private access to UNESCO sites with historian guides.",
    highlights: ["Private historian guide", "Temple of the Tooth visit", "Traditional dance performance", "Royal cuisine dinner"],
  },
];

const ExperienceCard = ({ exp, index, onSelect }: { exp: typeof experiences[0]; index: number; onSelect: () => void }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={onSelect}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-2">
          {exp.subtitle}
        </p>
        <h3 className="font-serif text-xl md:text-2xl text-ivory font-light mb-4">
          {exp.title}
        </h3>
        <div className="flex items-center gap-2 text-gold/70 group-hover:text-gold transition-colors text-xs tracking-[0.2em] uppercase font-body">
          <span>Discover</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceModal = ({ exp, onClose }: { exp: typeof experiences[0]; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl border border-border"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-midnight/60 backdrop-blur-sm text-ivory flex items-center justify-center hover:bg-midnight/80 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Hero image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg">
          <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-1">{exp.subtitle}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light">{exp.title}</h3>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm font-body text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent" /> {exp.location}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent" /> {exp.duration}</span>
            <span className="flex items-center gap-1.5"><Star size={14} className="text-accent fill-accent" /> {exp.rating}</span>
          </div>

          <p className="font-body text-foreground/80 leading-relaxed">{exp.description}</p>

          {/* Highlights */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-3">Experience Highlights</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {exp.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-body text-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href="#booking"
            onClick={onClose}
            className="inline-block border border-accent/50 text-accent px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperiencesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experiences" className="luxury-section bg-midnight" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
            Signature Collection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory font-light">
            Curated <span className="italic">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {experiences.slice(0, 3).map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} onSelect={() => setSelected(exp)} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 max-w-4xl mx-auto">
          {experiences.slice(3).map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i + 3} onSelect={() => setSelected(exp)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ExperienceModal exp={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ExperiencesSection;
