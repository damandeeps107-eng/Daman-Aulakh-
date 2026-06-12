import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { PROJECTS } from "../data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Real Estate", "E-Commerce", "SaaS & Business", "Hospitality & Clinics"];

  const getFilterCategory = (category: string) => {
    if (category.toLowerCase().includes("real estate")) return "Real Estate";
    if (category.toLowerCase().includes("e-commerce")) return "E-Commerce";
    if (category.toLowerCase().includes("hospital") || category.toLowerCase().includes("restaurant")) return "Hospitality & Clinics";
    return "SaaS & Business"; // fallback/business/saas
  };

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => getFilterCategory(p.category) === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background neon orb decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest block">
              03 // Showroom
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Crafted Projects
            </h2>
            <p className="text-zinc-500 max-w-lg text-sm">
              Explore 6 high-conversion platforms featuring custom responsive layouts, interactive widgets, and seamless operation.
            </p>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-sans text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-[0_2px_15px_rgba(147,51,234,0.25)]"
                    : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-3xl glass-panel overflow-hidden relative flex flex-col justify-between"
              >
                {/* Visual Screenshot Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border-b border-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover gradient matrix overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Pill Tag wrapper */}
                  <span className="absolute top-4 left-4 font-mono text-[10px] font-semibold text-white px-3 py-1.5 rounded-full bg-[#07070a]/70 border border-white/10 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Project Details Text */}
                <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology labels metadata list */}
                  <div className="space-y-4 pt-4 border-t border-zinc-900">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="font-mono text-[9px] font-medium text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-blue-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      Inquire About Similar <LucideIcon name="ArrowUpRight" size={12} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner callout - 5k look */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-transparent border border-zinc-800/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-purple-500/5 blur-[50px] pointer-events-none"></div>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              Have a tailored project in mind?
            </h4>
            <p className="text-xs text-zinc-400 max-w-md">
              Whether you require custom backend integrations, unique visual animation stages, or bespoke lead sheets, I build specific tailored engines code-by-code.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="cursor-pointer inline-flex items-center gap-2 font-sans font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              Start Free Quote Consult
              <LucideIcon name="ArrowRight" size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
