import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import villaImg from "@/assets/exp-villa.jpg";
import trainImg from "@/assets/gallery-train.jpg";
import safariImg from "@/assets/exp-safari.jpg";
import diningImg from "@/assets/gallery-dining.jpg";
import teaImg from "@/assets/exp-tea.jpg";
import heroImg from "@/assets/hero-coastline.jpg";

const images = [
  { src: villaImg, alt: "Private luxury villa", span: "col-span-2 row-span-2" },
  { src: trainImg, alt: "Train through tea hills", span: "" },
  { src: diningImg, alt: "Luxury beachside dining", span: "" },
  { src: safariImg, alt: "Safari adventure", span: "" },
  { src: teaImg, alt: "Tea estate retreat", span: "" },
  { src: heroImg, alt: "Sunset coastline", span: "col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="luxury-section bg-midnight" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
              Visual Journey
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory font-light">
              Luxury <span className="italic">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative overflow-hidden cursor-pointer group ${img.span}`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/30 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-midnight/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-ivory/70 hover:text-ivory transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Gallery full view"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
