import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import safariImg from "@/assets/exp-safari.jpg";
import sigiriyaImg from "@/assets/exp-sigiriya.jpg";
import teaImg from "@/assets/exp-tea.jpg";
import villaImg from "@/assets/exp-villa.jpg";
import cultureImg from "@/assets/exp-culture.jpg";

const experiences = [
  { title: "Private Yala Leopard Safari", subtitle: "Wild Encounters", image: safariImg },
  { title: "Helicopter Tour Over Sigiriya", subtitle: "Aerial Majesty", image: sigiriyaImg },
  { title: "Tea Estate Luxury Retreat", subtitle: "Highland Serenity", image: teaImg },
  { title: "Southern Coast Villa Escape", subtitle: "Coastal Bliss", image: villaImg },
  { title: "Cultural Royal Heritage Tour", subtitle: "Timeless Legacy", image: cultureImg },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
      </div>

      {/* Content */}
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

const ExperiencesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 max-w-4xl mx-auto">
          {experiences.slice(3).map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
