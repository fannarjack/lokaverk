import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <main className="flex-grow mx-9">
          <AboutSection />
          <InfoSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
