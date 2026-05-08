"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: "01",
    title: "LinkedIn Post Generator",
    description:
      "GenAI-powered tool that generates professional LinkedIn posts from topics, keywords, or voice inputs. Uses Claude/OpenAI API with tone customization and post formatting.",
    tags: ["GenAI", "Python", "LLM API", "React", "NLP"],
    color: "neon",
    github: "https://github.com/rishabh",
    live: null,
    featured: true,
  },
  {
    id: "02",
    title: "Age Detection — OpenCV",
    description:
      "Real-time age estimation from webcam or image input using OpenCV deep neural networks. Classifies age ranges with bounding boxes and confidence scores.",
    tags: ["OpenCV", "Python", "DNN", "Computer Vision", "Deep Learning"],
    color: "neonBlue",
    github: "https://github.com/rishabh",
    live: null,
    featured: true,
  },
  {
    id: "03",
    title: "Copy-Move Forgery Detection",
    description:
      "Detects image manipulation via copy-move attacks using keypoint matching (SIFT/ORB) and feature clustering. Highlights forged regions with visual overlays.",
    tags: ["Python", "OpenCV", "SIFT", "Image Forensics", "ML"],
    color: "neonPurple",
    github: "https://github.com/rishabh",
    live: null,
    featured: true,
  },
  {
    id: "04",
    title: "VocalInk",
    description:
      "Speech-to-text note-taking web app powered by OpenAI's Whisper API. Supports multiple languages, live transcription, and markdown export.",
    tags: ["Whisper API", "Flask", "JavaScript", "Audio Processing"],
    color: "neon",
    github: "https://github.com/rishabh",
    live: null,
  },
  {
    id: "05",
    title: "JNU Health Management System",
    description:
      "Full-stack hospital management system for JNU campus. Patient records, appointment scheduling, doctor dashboard, and prescription management.",
    tags: ["Python", "Flask", "MySQL", "HTML/CSS", "Bootstrap"],
    color: "neonBlue",
    github: "https://github.com/rishabh",
    live: null,
  },
  {
    id: "06",
    title: "Movie Recommender System",
    description:
      "Content-based filtering engine using TF-IDF vectorization and cosine similarity on TMDb dataset. Clean Streamlit UI with poster fetching.",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit", "NLP"],
    color: "neonPurple",
    github: "https://github.com/rishabh",
    live: null,
  },
  {
    id: "07",
    title: "Face Recognition System",
    description:
      "Real-time facial recognition using OpenCV and face_recognition library. Supports multi-face detection, identity tagging, and attendance logging.",
    tags: ["Python", "OpenCV", "face_recognition", "NumPy"],
    color: "neon",
    github: "https://github.com/rishabh",
    live: null,
  },
  {
    id: "08",
    title: "Weather Prediction",
    description:
      "ML-based weather forecasting model trained on historical datasets. Predicts temperature, precipitation, and conditions using regression models.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    color: "neonBlue",
    github: "https://github.com/rishabh",
    live: null,
  },
];

const colorBorder: Record<string, string> = {
  neon: "hover:border-neon/50 hover:shadow-[0_0_30px_rgba(0,255,157,0.1)]",
  neonBlue: "hover:border-neonBlue/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]",
  neonPurple: "hover:border-neonPurple/50 hover:shadow-[0_0_30px_rgba(155,89,255,0.1)]",
};

const colorText: Record<string, string> = {
  neon: "text-neon",
  neonBlue: "text-neonBlue",
  neonPurple: "text-neonPurple",
};

const colorTag: Record<string, string> = {
  neon: "bg-neon/5 border-neon/20 text-neon",
  neonBlue: "bg-neonBlue/5 border-neonBlue/20 text-neonBlue",
  neonPurple: "bg-neonPurple/5 border-neonPurple/20 text-neonPurple",
};

function ProjectCard({ project, delay }: { project: (typeof projects)[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-6 border border-border rounded-lg bg-surface/40 transition-all duration-300 cursor-default ${colorBorder[project.color]} ${project.featured ? "ring-1 ring-inset ring-white/5" : ""}`}
    >
      {project.featured && (
        <div className={`absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded-full border ${colorTag[project.color]}`}>
          featured
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <span className={`font-mono text-2xl font-bold opacity-30 ${colorText[project.color]}`}>
          {project.id}
        </span>
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textDim hover:text-neon transition-colors"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textDim hover:text-neonBlue transition-colors"
              aria-label="Live demo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className={`font-display font-bold text-lg mb-2 text-text group-hover:${colorText[project.color]} transition-colors duration-200`}>
        {project.title}
      </h3>
      <p className="text-textDim text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className={`text-[11px] font-mono px-2 py-0.5 rounded border ${colorTag[project.color]}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// 02.projects"
          title="Projects"
          subtitle="Things I've built — from GenAI experiments to computer vision and full-stack apps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.06} />
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <a
            href="https://github.com/rishabh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-textDim hover:text-neon transition-colors border border-border hover:border-neon/30 px-6 py-3 rounded"
          >
            view_all_on_github()
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
