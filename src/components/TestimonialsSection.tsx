import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Charlotte Ashworth",
    country: "United Kingdom",
    quote: "An extraordinary journey that exceeded every expectation. The attention to detail was impeccable — from the private villa to the curated cultural experiences.",
  },
  {
    name: "James Mitchell",
    country: "United States",
    quote: "Serendib Elite made Sri Lanka feel like a personal paradise. Every moment was thoughtfully orchestrated, yet completely natural and immersive.",
  },
  {
    name: "Fatima Al-Rashid",
    country: "United Arab Emirates",
    quote: "The level of luxury and exclusivity was beyond compare. From helicopter tours to private beach dinners — a once-in-a-lifetime experience.",
  },
  {
    name: "Oliver Brennan",
    country: "Australia",
    quote: "We've traveled the world with the finest agencies, and Serendib Elite stands among the very best. Their local expertise is unmatched.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="luxury-section bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
            Client Voices
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light mb-16">
            Global <span className="italic">Acclaim</span>
          </h2>
        </motion.div>

        <div className="min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={16} />
                ))}
              </div>

              <blockquote className="font-serif text-xl md:text-2xl text-foreground font-light italic leading-relaxed max-w-2xl mb-8">
                "{t.quote}"
              </blockquote>

              <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center text-ivory font-serif text-lg mb-3">
                {t.name[0]}
              </div>
              <p className="font-body text-sm text-foreground tracking-wide">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">
                {t.country}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-gold w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
