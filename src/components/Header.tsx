import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "portfolio" },
    { label: "Why Choose Me", id: "why-me" },
    { label: "Testimonials", id: "testimonials" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#07070a]/80 backdrop-blur-md border-b border-white/5 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 cursor-pointer text-left"
        >
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
            DAMAN AULAKH
          </span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse-slow"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-sans text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative py-1 cursor-pointer group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer font-sans text-sm font-semibold text-white px-5 py-2.5 rounded-full border border-zinc-700 hover:border-purple-500 bg-zinc-900/50 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300 relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <LucideIcon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#07070a]/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left font-display text-lg font-medium text-zinc-300 hover:text-white py-2 flex justify-between items-center group cursor-pointer"
                >
                  {item.label}
                  <LucideIcon
                    name="ArrowRight"
                    size={16}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-purple-400"
                  />
                </button>
              ))}
              <hr className="border-white/5" />
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-center font-sans font-semibold text-white py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer"
              >
                Let's Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
