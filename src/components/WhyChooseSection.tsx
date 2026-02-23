import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Hotel, Headphones, Map, Globe, Plane } from "lucide-react";

const features = [
  { icon: Car, title: "Private Chauffeur Fleet", desc: "Luxury vehicles with professional drivers" },
  { icon: Hotel, title: "5-Star Partnerships", desc: "Exclusive access to premier properties" },
  { icon: Headphones, title: "24/7 Concierge", desc: "Round-the-clock personal assistance" },
  { icon: Map, title: "Custom Itineraries", desc: "Bespoke journeys tailored to you" },
  { icon: Globe, title: "Multilingual Guides", desc: "Expert guides in your language" },
  { icon: Plane, title: "VIP Airport Services", desc: "Seamless arrivals and departures" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="luxury-section bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
            The Serendib Difference
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light">
            Why Choose <span className="italic">Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold/30 group-hover:border-gold group-hover:gold-glow transition-all duration-500">
                <feat.icon className="text-gold" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{feat.title}</h3>
              <p className="text-muted-foreground text-sm font-body font-light">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
