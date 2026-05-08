"use client";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Python", color: "neon" },
  { name: "Java", color: "blue" },
  { name: "C++", color: "purple" },
  { name: "JavaScript", color: "neon" },
  { name: "Flask", color: "blue" },
  { name: "Next.js", color: "purple" },
  { name: "SQL / MySQL", color: "neon" },
  { name: "Machine Learning", color: "blue" },
  { name: "OpenCV", color: "purple" },
  { name: "React", color: "neon" },
  { name: "TensorFlow", color: "blue" },
  { name: "Data Analysis", color: "purple" },
  { name: "Full Stack Dev", color: "neon" },
  { name: "DSA", color: "blue" },
  { name: "Git / GitHub", color: "purple" },
  { name: "Whisper API", color: "neon" },
];

const timeline = [
  {
    year: "2021",
    title: "High School",
    institution: "Class X",
    score: "92.83%",
    color: "neon",
  },
  {
    year: "2023",
    title: "Intermediate",
    institution: "Class XII",
    score: "93.20%",
    color: "neonBlue",
  },
  {
    year: "2024 – 2028",
    title: "B.Tech CSE",
    institution: "Jawaharlal Nehru University, New Delhi",
    score: "In Progress",
    color: "neonPurple",
  },
  {
    year: "2024 – 2028",
    title: "BS Data Science",
    institution: "IIT Madras",
    score: "In Progress",
    color: "neon",
  },
];

const colorMap: Record<string, string> = {
  neon: "text-neon border-neon/30 bg-neon/5",
  blue: "text-neonBlue border-neonBlue/30 bg-neonBlue/5",
  purple: "text-neonPurple border-neonPurple/30 bg-neonPurple/5",
};

const dotColorMap: Record<string, string> = {
  neon: "bg-neon shadow-[0_0_8px_#00ff9d]",
  neonBlue: "bg-neonBlue shadow-[0_0_8px_#00d4ff]",
  neonPurple: "bg-neonPurple shadow-[0_0_8px_#9b59ff]",
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// 01.about"
          title="About Me"
          subtitle="Dual-degree student building at the intersection of software engineering and data intelligence."
        />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: bio + skills */}
          <div>
            <FadeIn delay={0.1}>
              <div className="relative p-6 border border-border rounded-lg bg-surface/50 mb-8">
                <div className="absolute top-0 left-0 w-16 h-0.5 bg-neon" />
                <div className="absolute top-0 left-0 w-0.5 h-10 bg-neon" />
                <p className="text-textDim leading-relaxed mb-4">
                  I&apos;m Rishabh, a 21-year-old CS &amp; Data Science student studying simultaneously at{" "}
                  <span className="text-neonPurple font-medium">JNU New Delhi</span> and{" "}
                  <span className="text-neon font-medium">IIT Madras</span>.
                </p>
                <p className="text-textDim leading-relaxed">
                  I specialize in building full-stack web applications, experimenting with machine
                  learning models, and exploring computer vision. When I&apos;m not coding, I&apos;m
                  competing on CodeChef, solving LeetCode, or contributing to hackathons.
                </p>
                <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-neonBlue" />
                <div className="absolute bottom-0 right-0 w-0.5 h-10 bg-neonBlue" />
              </div>
            </FadeIn>

            {/* Skills grid */}
            <FadeIn delay={0.2}>
              <h3 className="font-mono text-xs text-textDim uppercase tracking-widest mb-4">
                $ skills --list
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-mono px-3 py-1.5 rounded border transition-all duration-200 hover:scale-105 cursor-default ${colorMap[skill.color]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: education timeline */}
          <div>
            <FadeIn delay={0.15}>
              <h3 className="font-mono text-xs text-textDim uppercase tracking-widest mb-8">
                $ education --timeline
              </h3>
              <div className="relative pl-8">
                {/* Vertical line */}
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-neon/40 via-neonBlue/20 to-transparent" />

                {timeline.map((item, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.1} className="relative mb-8 last:mb-0">
                    {/* Dot */}
                    <div className={`absolute -left-5.5 top-1.5 w-3 h-3 rounded-full ${dotColorMap[item.color]}`} />

                    <div className="p-4 border border-border rounded-lg bg-surface/30 hover:border-neon/30 transition-all duration-300 hover:bg-surface/60 group">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <span className="font-mono text-xs text-neon/60">{item.year}</span>
                        <span className="font-mono text-xs px-2 py-0.5 rounded border border-border text-textDim">
                          {item.score}
                        </span>
                      </div>
                      <h4 className="font-display font-semibold text-text text-base group-hover:text-neon transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-textDim text-sm mt-0.5">{item.institution}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
