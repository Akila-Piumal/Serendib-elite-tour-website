import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TourPackagesSection from "@/components/TourPackagesSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const TourPackages = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <TourPackagesSection showAll />
      </div>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
};

export default TourPackages;