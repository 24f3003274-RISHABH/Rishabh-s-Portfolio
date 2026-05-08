"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    name: "Email",
    value: "rishabhmyp@gmail.com",
    href: "mailto:rishabhmyp@gmail.com",
    color: "neon",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/rishabh-keshari",
    href: "https://linkedin.com/in/rishabh-keshari-664053318",
    color: "neonBlue",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "github.com/rishabh",
    href: "https://github.com/rishabh",
    color: "neonPurple",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const colorBorder: Record<string, string> = {
  neon: "hover:border-neon/50",
  neonBlue: "hover:border-neonBlue/50",
  neonPurple: "hover:border-neonPurple/50",
};

const colorText: Record<string, string> = {
  neon: "text-neon",
  neonBlue: "text-neonBlue",
  neonPurple: "text-neonPurple",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:rishabhmyp@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// 05.contact"
          title="Get In Touch"
          subtitle="Open to internships, projects, and collaborations. Let's build something interesting."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: message + social links */}
          <FadeIn delay={0.1}>
            <div className="space-y-4 mb-10">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 border border-border rounded-lg bg-surface/40 transition-all duration-200 group ${colorBorder[s.color]}`}
                >
                  <div className={`${colorText[s.color]} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-textDim">{s.name}</p>
                    <p className={`text-sm font-medium ${colorText[s.color]}`}>{s.value}</p>
                  </div>
                  <svg
                    className="ml-auto text-textDim opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Quick availability */}
            <div className="p-4 border border-neon/20 rounded-lg bg-neon/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-neon rounded-full animate-pulse-slow" />
                <span className="font-mono text-xs text-neon">status: available</span>
              </div>
              <p className="text-textDim text-sm">
                Currently seeking internships in ML, Full-Stack, or Data Science roles. Based in New Delhi, India.
              </p>
            </div>
          </FadeIn>

          {/* Right: contact form */}
          <FadeIn delay={0.2}>
            <div className="p-6 border border-border rounded-lg bg-surface/40 relative">
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-neon" />
              <div className="absolute top-0 left-0 w-0.5 h-8 bg-neon" />

              <p className="font-mono text-xs text-textDim mb-6">$ send_message --to=rishabh</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-xs text-textDim block mb-1.5">name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="your_name"
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 font-mono text-sm text-text placeholder-muted focus:outline-none focus:border-neon/50 focus:bg-surface/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-textDim block mb-1.5">email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 font-mono text-sm text-text placeholder-muted focus:outline-none focus:border-neon/50 focus:bg-surface/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-textDim block mb-1.5">message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Let's collaborate on..."
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 font-mono text-sm text-text placeholder-muted focus:outline-none focus:border-neon/50 focus:bg-surface/50 transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 font-mono font-bold text-sm rounded transition-all duration-300 ${
                    sent
                      ? "bg-neonBlue/20 border border-neonBlue/40 text-neonBlue"
                      : "bg-neon text-bg hover:bg-neon/90 hover:shadow-[0_0_20px_rgba(0,255,157,0.4)]"
                  }`}
                >
                  {sent ? "✓ message_sent!" : "send_message()"}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
