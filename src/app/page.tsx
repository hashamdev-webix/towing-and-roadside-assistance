export default function DesignSystemDemo() {
  return (
    <main className="container-default section-padding">
      <header className="mb-12">
        <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mb-2">
          Design System Demo
        </p>
        <h1 className="text-5xl md:text-7xl uppercase">
          Towing &amp; Roadside Assistance
        </h1>
        <p className="mt-4 text-lg text-ink-500 max-w-2xl">
          Temporary verification page. Will be replaced with the real homepage shortly.
        </p>
      </header>

      {/* COLORS */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase mb-6">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "brand-red", hex: "#DC2626" },
            { name: "brand-red-dark", hex: "#991B1B" },
            { name: "brand-red-light", hex: "#FEE2E2" },
            { name: "brand-amber", hex: "#FBBF24" },
            { name: "ink-900", hex: "#0A0A0A" },
            { name: "ink-500", hex: "#525252" },
            { name: "ink-100", hex: "#E5E5E5" },
            { name: "surface-white", hex: "#FFFFFF" },
          ].map((c) => (
            <div key={c.name} className="rounded-lg overflow-hidden border border-ink-100 shadow-[var(--shadow-card)]">
              <div
                className="h-24"
                style={{ backgroundColor: `var(--color-${c.name})` }}
              />
              <div className="p-3 bg-surface-white">
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs text-ink-500 font-mono">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase mb-6">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-6xl uppercase">Display Heading H1</h1>
          <h2 className="text-4xl uppercase">Heading H2</h2>
          <h3 className="text-2xl uppercase">Heading H3</h3>
          <p className="text-lg">
            Body large — Inter font, used for intro paragraphs and important callouts.
          </p>
          <p className="text-base">
            Body base — standard paragraph text. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-sm text-ink-500">
            Body small — used for captions, metadata, and fine print.
          </p>
        </div>
      </section>

      {/* BUTTONS */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase tracking-wide px-6 py-3 rounded-md transition-colors">
            Call Now
          </button>
          <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase tracking-wide px-6 py-3 rounded-md transition-colors animate-pulse-red">
            Emergency (Pulse)
          </button>
          <button className="bg-ink-900 hover:bg-ink-800 text-white font-bold uppercase tracking-wide px-6 py-3 rounded-md transition-colors">
            Request a Tow
          </button>
          <button className="bg-white border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white font-bold uppercase tracking-wide px-6 py-3 rounded-md transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* CARD SHADOWS */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase mb-6">Cards &amp; Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-card p-6 rounded-lg shadow-[var(--shadow-card)]">
            <p className="font-semibold">shadow-card</p>
          </div>
          <div className="bg-surface-card p-6 rounded-lg shadow-[var(--shadow-elevated)]">
            <p className="font-semibold">shadow-elevated</p>
          </div>
          <div className="bg-brand-red text-white p-6 rounded-lg shadow-[var(--shadow-red-glow)]">
            <p className="font-semibold">shadow-red-glow</p>
          </div>
        </div>
      </section>

      <footer className="mt-20 pt-8 border-t border-ink-100">
        <p className="text-sm text-ink-500">
          If every section above renders correctly with the right colors, fonts, and shadows,
          the design system is wired up.
        </p>
      </footer>
    </main>
  );
}
