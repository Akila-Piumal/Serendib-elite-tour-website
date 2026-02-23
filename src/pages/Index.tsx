import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TourPackagesSection from "@/components/TourPackagesSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <TourPackagesSection />
      <WhyChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <CTASection />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <ChatWidget />
    </main>
  );
};

export default Index;
