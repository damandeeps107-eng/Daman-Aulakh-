import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { ContactMessage } from "../types";

interface ContactProps {
  selectedService: string;
}

export default function Contact({ selectedService }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General Query");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [allMessages, setAllMessages] = useState<ContactMessage[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync chosen service from parent clicks
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      // Smoothly scroll to contact if selected
      const element = document.getElementById("contact");
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  }, [selectedService]);

  // Load old messages from localStorage for instant live proofing
  useEffect(() => {
    const saved = localStorage.getItem("DamanAulakhInquiries");
    if (saved) {
      try {
        setAllMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Local records empty.");
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("damandeeps107@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);

    // Simulate luxury dispatch
    setTimeout(() => {
      const newMsg: ContactMessage = {
        id: "msg-" + Date.now(),
        name,
        email,
        service,
        message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " (Local)",
      };

      const updated = [newMsg, ...allMessages];
      setAllMessages(updated);
      localStorage.setItem("DamanAulakhInquiries", JSON.stringify(updated));

      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setService("General Query");
    setSubmitted(false);
  };

  const serviceCategories = [
    "General Query",
    "Business Website Development",
    "E-commerce Website Development",
    "Landing Pages",
    "Website Redesign",
    "Portfolio Websites",
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest block">
            06 // Engagement
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Start Your Project
          </h2>
          <p className="text-zinc-500 text-sm">
            Ready to scale your digital presence? Fill out the brief below, or contact me directly through channels. I typically respond within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels list */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-bold text-xl text-white mb-6">
              Direct Channels
            </h3>

            {/* Email card */}
            <div className="p-6 rounded-2xl glass-panel relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <LucideIcon name="Mail" size={20} />
                </div>
                <div className="space-y-2 w-full">
                  <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                    Official Email
                  </p>
                  <p className="font-display font-semibold text-sm text-white select-all break-all">
                    damandeeps107@gmail.com
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#3b82f6] hover:text-white transition-colors cursor-pointer"
                  >
                    <LucideIcon name={copiedEmail ? "Check" : "Copy"} size={10} />
                    {copiedEmail ? "Copied" : "Copy to Clipboard"}
                  </button>
                </div>
              </div>
            </div>

            {/* Instagram card */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-panel block group hover:border-[#a855f7]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <LucideIcon name="Instagram" size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                    Follow Me on Socials
                  </p>
                  <p className="font-display font-semibold text-sm text-white group-hover:text-purple-400 transition-colors">
                    Instagram Showcase
                  </p>
                  <p className="text-xs text-zinc-500">
                    Latest design updates and UI concepts.
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp direct trigger button */}
            <a
              href="https://wa.me/911234567890?text=Hello%20Daman%2C%20I%20would%20love%20to%20discuss%20a%20website%20development%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-sm shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
            >
              <LucideIcon name="MessageCircle" size={18} className="fill-white" />
              <span>Connect via WhatsApp</span>
              <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Client-side Live Records Proofing */}
            {allMessages.length > 0 && (
              <div className="p-6 rounded-2xl glass-panel space-y-4">
                <h4 className="font-display font-bold text-xs text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Inquiries Saved ({allMessages.length})</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                </h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {allMessages.map((msg) => (
                    <div key={msg.id} className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-900 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-xs text-white truncate max-w-[120px]">{msg.name}</span>
                        <span className="font-mono text-[9px] text-zinc-600">{msg.timestamp}</span>
                      </div>
                      <p className="font-mono text-[9px] text-purple-400">{msg.service}</p>
                      <p className="text-[10px] text-zinc-500 truncate italic">"{msg.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive glass contact form */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 rounded-3xl glass-panel relative overflow-hidden">
              {/* Subtle top border bar */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-transparent"></span>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Marcus Vance"
                          className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="marcus@vance.com"
                          className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection dropdown */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block">
                        Select Requested Solution
                      </label>
                      <div className="relative">
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-purple-500 text-white rounded-xl px-4 py-3.5 text-sm outline-none appearance-none cursor-pointer"
                        >
                          {serviceCategories.map((cat, idx) => (
                            <option key={idx} value={cat} className="bg-zinc-950 text-white">
                              {cat}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                          <LucideIcon name="ChevronDown" size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block">
                        Project Brief Details *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your business goals, target pages, features needed, or deadline requirements..."
                        className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-purple-500 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full cursor-pointer py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-sans font-bold text-sm shadow-md hover:shadow-purple-500/10 transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Dispatching Scope Brief...</span>
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Send" size={14} />
                          <span>Submit Project Brief</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 space-y-8"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                      <LucideIcon name="CheckCircle" size={32} />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-2xl text-white">
                        Brief Received, {name.split(" ")[0]}!
                      </h4>
                      <p className="text-zinc-500 max-w-sm mx-auto text-sm leading-relaxed">
                        I am already analyzing your request for <span className="text-purple-400 font-semibold">{service}</span>. Check your email shortly for a confirmation or consultation link.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-900 max-w-md mx-auto text-left space-y-3 font-mono text-xs text-zinc-400">
                      <p className="text-[10px] text-[#3b82f6] uppercase border-b border-zinc-900 pb-2 mb-2 font-bold">
                        Dispatched Meta-Data
                      </p>
                      <p><span className="text-zinc-600">Client:</span> {name}</p>
                      <p><span className="text-zinc-600">Response Route:</span> {email}</p>
                      <p><span className="text-zinc-600">Target Segment:</span> {service}</p>
                      <p className="italic truncate"><span className="text-zinc-600">Brief preview:</span> "{message}"</p>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="cursor-pointer font-sans font-semibold text-xs text-zinc-400 hover:text-white px-5 py-2.5 rounded-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
