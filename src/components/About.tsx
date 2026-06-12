import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function About() {
  const targetSectors = [
    {
      title: "Real Estate Portals",
      desc: "Immersive high-end property galleries and search listings that capture premium buyers.",
      iconName: "Home",
      color: "from-blue-500/20 to-indigo-500/10",
      iconColor: "text-blue-400",
    },
    {
      title: "E-Commerce Engines",
      desc: "Conversion-optimized digital flagships featuring seamless Stripe checkouts.",
      iconName: "ShoppingBag",
      color: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
    },
    {
      title: "Construction & Corporate",
      desc: "Robust architectural galleries and portfolio RFQ systems for local contractors.",
      iconName: "Hammer",
      color: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-400",
    },
    {
      title: "Fine Dining & Restaurants",
      desc: "Mouth-watering digital menu catalogs alongside responsive table reservation widgets.",
      iconName: "Utensils",
      color: "from-red-500/20 to-rose-500/10",
      iconColor: "text-rose-400",
    },
    {
      title: "Hospitals & Medical Clinics",
      desc: "Secure clinical portals for doctor directories, service listings, and booking queries.",
      iconName: "HeartPulse",
      color: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
    },
    {
      title: "B2B Business SaaS",
      desc: "Highly interactive pricing matrices, client intake hubs, and functional telemetry displays.",
      iconName: "Briefcase",
      color: "from-cyan-500/20 to-blue-500/10",
      iconColor: "text-cyan-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Bio column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold text-purple-400 uppercase tracking-widest block">
                01 // Biography
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Hey, I'm Daman Aulakh
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 leading-relaxed text-base">
              <p>
                I am an independent freelance web developer specializing in building high-end, responsive, and performance-focused corporate websites that turn digital traffic into actual business growth.
              </p>
              <p>
                Unlike massive agencies with heavy administrative overhead, I work with you directly. Every single layout, spacing rule, database schema, and animation has my singular attention. I design websites that don't just look visually breathtaking, but also deliver top-tier speed metrics and intuitive UI/UX design.
              </p>
              <p>
                My ultimate priority is to build premium, modern web applications customized for high-growth sectors, ensuring your business outperforms competitors.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#07070a]"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Client"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#07070a]"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Client"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-[#07070a]"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Client"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-zinc-500 font-mono">
                Trusted by founders worldwide
              </p>
            </div>
          </div>

          {/* Right Industries Bento Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h3 className="font-display font-medium text-lg text-zinc-300">
                Primary Specialty Verticals
              </h3>
              <p className="text-sm text-zinc-500">
                I specialize in engineering customized digital frameworks for high-performing business categories:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targetSectors.map((sector, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl glass-panel hover:bg-zinc-950/70 hover:border-purple-500/20 transition-all duration-300 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${sector.color} shrink-0`}>
                    <LucideIcon name={sector.iconName} className={`${sector.iconColor}`} size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-display font-semibold text-white text-sm">
                      {sector.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
