import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest block">
            05 // Client Voice
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Don't take my word for it. Here is how partners have grown their digital conversions and operations by collaborating with me.
          </p>
        </div>

        {/* Testimonials Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-panel relative flex flex-col justify-between hover:border-purple-500/20 hover:bg-zinc-950/30 transition-all duration-300"
            >
              {/* Backquote glass mark */}
              <div className="absolute bottom-6 right-8 text-zinc-900 opacity-20 pointer-events-none">
                <LucideIcon name="Quote" size={80} />
              </div>

              {/* Review Text */}
              <div className="space-y-6 relative z-10">
                {/* 5 stars score */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i}>
                      <LucideIcon name="Star" size={14} className="fill-amber-400 text-amber-500" />
                    </span>
                  ))}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{test.content}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-900 relative z-10">
                <img
                  src={test.avatarUrl}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                />
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-white text-sm">
                    {test.name}
                  </h4>
                  <p className="text-[11px] text-zinc-500">
                    {test.role}, <span className="text-zinc-400 font-medium">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
