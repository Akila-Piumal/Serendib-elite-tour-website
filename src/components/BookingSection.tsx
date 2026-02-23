import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check } from "lucide-react";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="luxury-section bg-midnight" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
              Private Consultation
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory font-light leading-tight mb-6">
              Begin Your{" "}
              <span className="italic text-gold-gradient">Private Journey</span>
            </h2>
            <p className="text-ivory/50 font-body font-light text-sm md:text-base leading-relaxed max-w-md">
              Share your vision and our luxury travel architects will craft a bespoke
              itinerary tailored exclusively to you.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
                  <Check className="text-gold" size={28} />
                </div>
                <p className="font-serif text-2xl text-ivory mb-2">Thank You</p>
                <p className="text-ivory/50 font-body text-sm">
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Travel Dates"
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    min="1"
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Travel Preferences"
                    className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your dream journey..."
                  rows={3}
                  className="w-full bg-transparent border-b border-ivory/20 text-ivory py-3 text-sm font-body placeholder:text-ivory/30 focus:border-gold focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="mt-4 bg-gold text-midnight px-10 py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold-light transition-all duration-300 flex items-center gap-3 group"
                >
                  Request Private Consultation
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
