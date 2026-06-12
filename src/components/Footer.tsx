import LucideIcon from "./LucideIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-zinc-900 bg-[#07070a] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Left */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-white">
            DAMAN AULAKH
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </div>

        {/* Content Centered */}
        <p className="text-xs text-zinc-500 font-mono text-center md:text-left">
          &copy; {currentYear !== 2026 ? "2026" : currentYear} Daman Aulakh. All rights reserved. Premium freelance solutions.
        </p>

        {/* Scroll action right */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full border border-zinc-800 hover:border-purple-500 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer"
            aria-label="Scroll back to top of the page"
          >
            <LucideIcon name="ChevronUp" size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
