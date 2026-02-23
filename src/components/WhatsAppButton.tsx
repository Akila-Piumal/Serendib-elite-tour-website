import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "94773923485";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I'd like to enquire about your tours.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppButton = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const startGlow = () => {
      setAnimate(true);
      timer = setTimeout(() => setAnimate(false), 6000);
    };

    // Initial glow
    timer = setTimeout(() => setAnimate(false), 6000);

    const handleScroll = () => {
      if (window.scrollY < 100 && !animate) {
        startGlow();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={animate ? { animation: "glow-pulse 2s ease-in-out infinite" } : undefined}
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
};

export { WHATSAPP_URL };
export default WhatsAppButton;