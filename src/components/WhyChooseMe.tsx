import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";
import { ADVANTAGES } from "../data";

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden bg-zinc-950/20 border-t border-b border-zinc-900">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest block">
            04 // Core Principles
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Why Partner with Me?
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            I combine commercial business thinking with cutting-edge front-end engineering. You are not buying template-fills; you are investing in a functional business asset.
          </p>
        </div>

        {/* Benefits Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between hover:bg-zinc-950/50 transition-all duration-300"
            >
              {/* Radial gradient glow in top right on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              
              <div className="space-y-6">
                {/* Header: Icon & Metric */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-blue-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-300 shrink-0">
                    <LucideIcon name={adv.iconName} size={22} />
                  </div>
                  {adv.metric && (
                    <span className="font-mono text-[10px] font-semibold text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                      {adv.metric}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>

              {/* Decorative design highlight line */}
              <div className="pt-6 mt-6 border-t border-zinc-900/40 flex items-center gap-1.5 text-[10px] font-mono text-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>00 // {adv.title.toUpperCase()} SECURED</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
