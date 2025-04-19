import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <main className="flex-grow"></main>
        <Footer />
      </div>
    </>
  );
}
