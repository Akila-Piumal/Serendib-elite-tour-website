import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ctaImg from "@/assets/cta-sunset.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden" ref={ref}>
      <img
        src={ctaImg}
        alt="Sunset over Sri Lanka"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-midnight/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-6xl text-ivory font-light mb-8"
        >
          Your Journey Begins <span className="italic">Here.</span>
        </motion.h2>
        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gold text-midnight px-10 py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold-light transition-all duration-300"
        >
          Plan My Luxury Escape
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
