"use client";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-orange-400">CTDOCS</span>
        </h1>
        <p className="text-black/70 dark:text-white/70">
          A complete hub for documentation, guides, and setup instructions — all
          in one place.
        </p>
      </div>
    </main>
  );
}
