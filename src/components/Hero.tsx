"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center grid-bg overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-neonBlue/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-neonPurple/5 blur-[90px] pointer-events-none" />

      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="spin-slow w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            border: "1px solid transparent",
            borderTopColor: "#00ff9d",
            borderRightColor: "#00d4ff",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs text-neon/70 mb-6 border border-neon/20 px-3 py-1.5 rounded-full bg-neon/5"
        >
          <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse-slow" />
          available for internships &amp; collaborations
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-extrabold text-6xl md:text-8xl mb-2 leading-none tracking-tight"
        >
          <span className="gradient-text">Rishabh</span>
          <br />
          <span className="text-text">Keshari</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-lg md:text-xl text-textDim mt-4 mb-8 min-h-[2rem]"
        >
          <span className="text-neon">$ </span>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Machine Learning Enthusiast",
              2000,
              "Data Science @ IIT Madras",
              2000,
              "CS Engineering @ JNU",
              2000,
              "Open Source Contributor",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            speed={50}
          />
          <span className="cursor-blink ml-1">|</span>
        </motion.div>

        {/* Bio line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-textDim text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dual-degree student at{" "}
          <span className="text-neonBlue font-medium">JNU New Delhi</span> &amp;{" "}
          <span className="text-neonPurple font-medium">IIT Madras</span>. Building
          scalable web apps and intelligent systems at the intersection of engineering
          and data science.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-neon text-bg font-mono font-bold text-sm rounded hover:bg-neon/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,255,157,0.5)]"
          >
            view_projects()
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-7 py-3 border border-neon/40 text-neon font-mono text-sm rounded hover:bg-neon/10 transition-all duration-200 flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            resume.pdf
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-border text-textDim font-mono text-sm rounded hover:border-neonBlue/40 hover:text-neonBlue transition-all duration-200"
          >
            get_in_touch()
          </a>
        </motion.div>

        {/* Social quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {[
            { href: "https://github.com/rishabh", icon: "github", label: "GitHub" },
            { href: "https://linkedin.com/in/rishabh", icon: "linkedin", label: "LinkedIn" },
            { href: "https://leetcode.com", icon: "code", label: "LeetCode" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-neon transition-colors duration-200 font-mono text-xs flex items-center gap-1.5"
            >
              <span className="text-neon/40">/</span>{s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-6 bg-gradient-to-b from-neon/60 to-transparent rounded"
        />
      </motion.div>
    </section>
  );
}
