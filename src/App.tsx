import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  const handleSelectService = (serviceTitle: string) => {
    // Set selected service state
    setSelectedService(serviceTitle);
    
    // Slight reset so clicking multiple times continues triggering scroll effect in useEffect
    setTimeout(() => {
      setSelectedService("");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#07070a] text-zinc-100 overflow-hidden">
      {/* Universal Ambient Backlights for premium high-end agency look */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[30%] left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute bottom-[20%] right-10 w-[500px] h-[500px] bg-pink-500/5 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Header bar */}
      <Header />

      {/* Primary Layout sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Portfolio />
        <WhyChooseMe />
        <Testimonials />
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer bar */}
      <Footer />
    </div>
  );
}
