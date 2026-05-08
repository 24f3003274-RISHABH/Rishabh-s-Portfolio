export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          <span className="text-neon">RK</span>_ — built with Next.js + Tailwind + Framer Motion
        </p>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Rishabh Keshari · New Delhi, India
        </p>
      </div>
    </footer>
  );
}
