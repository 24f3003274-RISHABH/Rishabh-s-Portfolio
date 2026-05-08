"use client";
import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-16">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-neon/60">{tag}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-neon/20 to-transparent" />
      </div>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-textDim max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </FadeIn>
  );
}
