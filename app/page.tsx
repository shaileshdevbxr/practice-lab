
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-8">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Frontend Practice Lab
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--foreground)]/70">
          A collection of hands-on UI components and interactive features built
          with React, TypeScript, and Tailwind CSS.
        </p>

        {/* Description */}
        <div className="bg-[var(--background-secondary)]/20 p-6 rounded-xl text-left space-y-4">
          <h2 className="text-2xl font-semibold">What you'll find here:</h2>

          <ul className="space-y-2 list-disc list-inside text-[var(--foreground)]/80">
            <li>Drag and Drop interfaces</li>
            <li>Reusable UI components</li>
            <li>State management patterns</li>
            <li>Modern frontend techniques</li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">

          <Link
            href="/drag-drop"
            className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            Open Drag & Drop Project
          </Link>

          <Link
            href="/"
            className="px-6 py-3 rounded-lg border border-[var(--foreground)]/20 hover:bg-[var(--background-secondary)]/30 transition"
          >
            Explore More (Coming Soon)
          </Link>

        </div>

        {/* Footer Note */}
        <p className="text-sm text-[var(--foreground)]/50">
          Built for learning, experimenting, and mastering frontend development.
        </p>

      </div>
    </div>
  );
}