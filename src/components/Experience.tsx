"use client";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Cybersecurity Analyst (Virtual)",
    org: "TCS — Tata Consultancy Services",
    via: "Forage",
    period: "Nov 2025 – Apr 2026",
    duration: "6 months",
    color: "neonBlue",
    points: [
      "Completed IAM-focused simulation collaborating with a virtual Cybersecurity Consulting team",
      "Applied Identity and Access Management principles and best practices to design enterprise solutions",
      "Developed documentation and presentations on complex technical concepts",
      "Gained exposure to user lifecycle management, access control, compliance, and digital transformation",
    ],
    tags: ["IAM", "Cybersecurity", "Security Architecture", "Documentation"],
  },
  {
    role: "Data Labeling Analyst (Virtual)",
    org: "Forage Academy",
    via: "Forage",
    period: "Oct 2025 – Nov 2025",
    duration: "2 months",
    color: "neon",
    points: [
      "Classified customer support messages for intent, sentiment, and PII using structured schemas",
      "Handled ambiguous edge cases with written rationales ensuring labeling consistency",
      "Reviewed peer labeling work, flagged inconsistencies, and suggested guideline improvements",
      "Gained hands-on experience in human-AI collaboration for ML operations",
    ],
    tags: ["Data Labeling", "NLP", "Human-AI Collaboration", "Privacy / PII"],
  },
];

const certifications = [
  { name: "E-SUMMIT '25", issuer: "IIT Madras", color: "neonPurple" },
  { name: "Intro to Generative AI", issuer: "Google Cloud", color: "neonBlue" },
  { name: "Forage Data Labeling Simulation", issuer: "Forage Academy", color: "neon" },
  { name: "Digital Marketing Workshop", issuer: "Online", color: "neonPurple" },
  { name: "AI Impact Summit Buildathon", issuer: "Summit 2025", color: "neonBlue" },
];

const colorAccent: Record<string, string> = {
  neon: "border-neon/30 before:bg-neon",
  neonBlue: "border-neonBlue/30 before:bg-neonBlue",
  neonPurple: "border-neonPurple/30 before:bg-neonPurple",
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

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// 03.experience"
          title="Experience"
          subtitle="Virtual programs, simulations, certifications, and hackathons."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience cards: 2/3 width */}
          <div className="md:col-span-2 space-y-6">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className={`relative p-6 border rounded-lg bg-surface/40 transition-all duration-300 hover:bg-surface/60 ${colorAccent[exp.color]}`}
                >
                  {/* Left color bar */}
                  <div className={`absolute left-0 top-6 bottom-6 w-0.5 ${colorText[exp.color].replace("text-", "bg-")} rounded-r`} />

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3 pl-4">
                    <div>
                      <h3 className={`font-display font-bold text-lg ${colorText[exp.color]}`}>{exp.role}</h3>
                      <p className="text-text font-medium">{exp.org}</p>
                      <p className="text-textDim text-sm">via {exp.via}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-textDim">{exp.period}</p>
                      <p className="font-mono text-xs text-muted">{exp.duration}</p>
                    </div>
                  </div>

                  <ul className="pl-4 space-y-1.5 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-textDim text-sm flex gap-2">
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${colorText[exp.color].replace("text-", "bg-")}`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="pl-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className={`text-[11px] font-mono px-2 py-0.5 rounded border ${colorTag[exp.color]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications: 1/3 */}
          <div>
            <FadeIn delay={0.2}>
              <h3 className="font-mono text-xs text-textDim uppercase tracking-widest mb-6">
                $ certs --list
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-4 border border-border rounded-lg bg-surface/30 hover:border-neon/20 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorText[cert.color].replace("text-", "bg-")}`} />
                      <div>
                        <p className="text-text text-sm font-medium group-hover:text-neon transition-colors">
                          {cert.name}
                        </p>
                        <p className="text-textDim text-xs mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Platforms */}
              <div className="mt-8">
                <h3 className="font-mono text-xs text-textDim uppercase tracking-widest mb-4">
                  $ platforms
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "LeetCode", href: "https://leetcode.com" },
                    { name: "CodeChef", href: "https://codechef.com" },
                    { name: "Codolio", href: "https://codolio.com" },
                    { name: "Unstop", href: "https://unstop.com/in/rishabh" },
                  ].map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded text-center font-mono text-xs text-textDim hover:text-neon hover:border-neon/30 transition-all duration-200"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
