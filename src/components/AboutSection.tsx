import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutImg from "@/assets/about-luxury.jpg";

const stats = [
  { value: 1000, suffix: "+", label: "Elite Travelers" },
  { value: 15, suffix: "+", label: "Years of Expertise" },
  { value: 50, suffix: "+", label: "Curated Experiences" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-gold-gradient font-serif text-4xl md:text-5xl font-semibold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="luxury-section bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
              The Art of Curated Travel
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light leading-tight mb-8">
              Where Every Detail{" "}
              <span className="italic">Becomes a Memory</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body font-light leading-relaxed text-sm md:text-base">
              <p>
                At Serendib Elite Journeys, we craft bespoke travel experiences
                that transcend the ordinary. Every journey is meticulously
                designed by our team of luxury travel architects.
              </p>
              <p>
                From personal concierge services and chauffeur-driven luxury
                vehicles to exclusive access experiences available nowhere else —
                we redefine what it means to explore Sri Lanka.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground text-xs tracking-widest uppercase font-body mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={aboutImg}
                alt="Luxury travel experience"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            {/* Gold accent line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-gold/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
