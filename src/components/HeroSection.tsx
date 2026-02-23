import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-coastline.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sri Lanka coastline at sunrise"
          className="w-full h-full object-cover animate-slow-zoom"
          loading="eager"
        />
        <div className="absolute inset-0 bg-midnight/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold tracking-[0.35em] uppercase text-xs md:text-sm font-body mb-6"
        >
          Luxury Travel Experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-tight max-w-5xl"
        >
          Experience Sri Lanka,{" "}
          <span className="italic text-gold-gradient">Redefined.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-ivory/70 text-base md:text-lg font-body font-light mt-6 max-w-xl tracking-wide"
        >
          Private journeys. Timeless luxury. Unforgettable moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#experiences"
            className="border border-gold/60 text-gold px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold/10 transition-all duration-300"
          >
            Explore Private Tours
          </a>
          <a
            href="#booking"
            className="bg-gold text-midnight px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold-light transition-all duration-300"
          >
            Plan Your Journey
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/40 text-[10px] tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <ChevronDown className="text-gold/60 animate-scroll-hint" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
