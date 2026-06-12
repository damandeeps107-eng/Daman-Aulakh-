import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";
import { SERVICES } from "../data";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950/20 border-t border-b border-zinc-900">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest block">
            02 // Business Solutions
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            High-Converting Services
          </h2>
          <p className="text-zinc-500 font-sans text-sm md:text-base">
            Every digital system is custom-designed, optimized for maximum speed, and structured with clean code to scale your brand authority and capture leads.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl glass-panel relative flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Top border glowing highlight line */}
              <span className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              <div className="space-y-6">
                {/* Header: Icon & Rate */}
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-blue-400 group-hover:text-purple-400 group-hover:bg-gradient-to-br group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300">
                    <LucideIcon name={srv.iconName} size={24} />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#7c3aed]">
                      Starts from
                    </span>
                    <p className="font-display font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                      {srv.priceStart}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-4 border-t border-zinc-900">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <LucideIcon name="Check" size={14} className="text-purple-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 group-hover:bg-gradient-to-r group-hover:from-blue-600/10 group-hover:to-purple-600/10 font-sans font-semibold text-xs text-zinc-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Service <LucideIcon name="ArrowRight" size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
