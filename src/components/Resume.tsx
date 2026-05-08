"use client";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="section-pad bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          tag="// 04.resume"
          title="Resume"
          subtitle="Download or preview my latest resume."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Info + download */}
          <FadeIn delay={0.1} className="flex flex-col gap-5">
            <div className="p-6 border border-border rounded-lg bg-surface/40">
              <div className="w-10 h-10 rounded border border-neon/30 bg-neon/5 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff9d" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" />
                  <polyline points="14,2 14,8 20,8" strokeLinecap="round" />
                  <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" />
                  <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" />
                  <polyline points="10,9 9,9 8,9" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-text mb-1">Rishabh Keshari</h3>
              <p className="text-textDim text-sm mb-4">B.Tech CSE @ JNU · BS DS @ IIT Madras</p>
              <div className="space-y-2 text-sm text-textDim mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-neon/50">▸</span> Python, Java, C++, Flask, SQL
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon/50">▸</span> ML, Computer Vision, Full-Stack
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon/50">▸</span> 7 projects · 2 virtual internships
                </div>
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-neon text-bg font-mono font-bold text-sm rounded hover:bg-neon/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.4)]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                download_resume.pdf
              </a>
            </div>

            <a
              href="mailto:rishabhmyp@gmail.com"
              className="p-4 border border-border rounded-lg bg-surface/30 hover:border-neonBlue/30 transition-all duration-200 text-center font-mono text-sm text-textDim hover:text-neonBlue"
            >
              open_to_opportunities()
            </a>
          </FadeIn>

          {/* PDF Viewer */}
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="border border-border rounded-lg overflow-hidden bg-surface/40">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-mono text-xs text-textDim ml-2">resume.pdf</span>
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-textDim hover:text-neon transition-colors"
                >
                  open ↗
                </a>
              </div>
              <iframe
                src="/resume.pdf"
                className="w-full h-[640px]"
                title="Rishabh Keshari Resume"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
