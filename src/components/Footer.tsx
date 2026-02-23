import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight border-t border-ivory/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            <a href="#" className="font-serif text-2xl tracking-wider text-ivory">
              <span className="text-gold-gradient font-semibold">Serendib</span>{" "}
              <span className="font-light">Elite</span>
            </a>
            <p className="text-ivory/40 text-sm font-body font-light mt-4 leading-relaxed max-w-xs">
              Crafting extraordinary journeys through the pearl of the Indian Ocean since 2009.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              {["Experiences", "About", "Gallery", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-ivory/50 hover:text-gold text-sm font-body transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-4">Contact</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-ivory/50 text-sm font-body">
                <MapPin size={14} className="text-gold" />
                Colombo 03, Sri Lanka
              </div>
              <div className="flex items-center gap-3 text-ivory/50 text-sm font-body">
                <Mail size={14} className="text-gold" />
                concierge@serendibelite.com
              </div>
              <div className="flex items-center gap-3 text-ivory/50 text-sm font-body">
                <Phone size={14} className="text-gold" />
                +94 11 234 5678
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-ivory/15 flex items-center justify-center hover:border-gold hover:text-gold text-ivory/40 transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 text-center">
          <p className="text-ivory/30 text-xs font-body tracking-wider">
            © 2025 Serendib Elite Journeys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
