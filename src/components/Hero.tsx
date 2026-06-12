import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function Hero() {
  const scrollToSection = (id: string) => {
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Absolute Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-blue-600/10 blur-[100px] md:blur-[150px] animate-glow pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 translate-y-1/2 translate-x-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-purple-600/10 blur-[100px] md:blur-[140px] animate-glow pointer-events-none" style={{ animationDelay: "-4s" }}></div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Available for Hire Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md mb-8 shadow-lg"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Available for Q3 2026 Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
        >
          I Build{" "}
          <span className="text-gradient">Modern Websites</span>{" "}
          That Grow Businesses
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg sm:text-xl text-zinc-400 max-w-2xl mb-12 sm:leading-relaxed"
        >
          Freelance Web Developer helping businesses create fast, responsive and high-converting websites.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("portfolio")}
            className="cursor-pointer w-full sm:w-auto font-sans font-semibold text-white px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(147,51,234,0.3)] hover:shadow-[0_4px_25px_rgba(147,51,234,0.5)] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            View Projects
            <LucideIcon name="FolderGit" size={18} className="group-hover:translate-y-[-1px] transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer w-full sm:w-auto font-sans font-semibold text-zinc-300 hover:text-white px-8 py-4 rounded-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Contact Me
            <LucideIcon name="MessageSquareShare" size={18} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Real-time trust points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-zinc-900 pt-10 w-full"
        >
          <div>
            <div className="font-display font-bold text-3xl md:text-4xl text-white">100%</div>
            <div className="font-mono text-xs text-zinc-500 uppercase mt-1">Delivery Success Rate</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl md:text-4xl text-white">40+</div>
            <div className="font-mono text-xs text-zinc-500 uppercase mt-1">Premium Sites Deployed</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl md:text-4xl text-white">2.8x</div>
            <div className="font-mono text-xs text-zinc-500 uppercase mt-1">Avg Conversion Growth</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl md:text-4xl text-white">&lt; 1.5s</div>
            <div className="font-mono text-xs text-zinc-500 uppercase mt-1">Average Load Speed</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 animate-bounce pointer-events-none">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <LucideIcon name="ChevronDown" size={14} />
      </div>
    </section>
  );
}
