import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HealthBrand Studio — Healthcare Digital Branding" },
      {
        name: "description",
        content:
          "Boutique healthcare branding for doctors, clinics, hospitals and health brands. You bring the expertise. We turn it into a digital brand.",
      },
      { property: "og:title", content: "HealthBrand Studio — Healthcare Digital Branding" },
      {
        property: "og:description",
        content: "Building digital brands for a healthier tomorrow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const audiences = ["Doctors", "Clinics", "Hospitals", "Healthcare brands"];

const services = [
  {
    code: "S/01",
    title: "Healthcare social media management",
    body: "A calm, consistent presence — planned monthly, published with intent.",
  },
  {
    code: "S/02",
    title: "Doctor personal branding",
    body: "Voice, visual identity, and positioning for the individual specialist.",
  },
  {
    code: "S/03",
    title: "Healthcare content creation",
    body: "Original writing and imagery that educates without overselling.",
  },
  {
    code: "S/04",
    title: "Video production & editing",
    body: "Short-form and long-form, shot and edited in-house.",
  },
  {
    code: "S/05",
    title: "Clinic & hospital branding",
    body: "Identity systems that scale from reception to referral.",
  },
  {
    code: "S/06",
    title: "Digital marketing & advertising",
    body: "Targeted campaigns measured by the outcomes that matter.",
  },
];

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "We understand your practice, services, audience, goals and existing digital presence.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "We determine positioning, content direction and digital communication strategy.",
  },
  {
    n: "03",
    title: "Content planning",
    body: "We turn professional expertise into structured content topics and campaigns.",
  },
  {
    n: "04",
    title: "Creation",
    body: "Our creative team develops designs, reels, videos and digital assets.",
  },
  {
    n: "05",
    title: "Review",
    body: "Healthcare professionals review relevant content before publication when required.",
  },
  {
    n: "06",
    title: "Management",
    body: "Approved content is scheduled, published and managed consistently.",
  },
  {
    n: "07",
    title: "Improvement",
    body: "We review performance and continuously improve the strategy.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased relative overflow-x-clip">
      {/* ambient frosted layers */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-32 -left-24 size-[520px] rounded-full bg-accent-soft/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 size-[560px] rounded-full bg-mint/40 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 size-[480px] rounded-full bg-paper-deep/70 blur-[100px]" />
      </div>

      <header className="sticky top-0 z-40 glass">
        <div className="max-w-[1320px] mx-auto px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-medium tracking-tight">HealthBrand</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Studio
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-body text-[13px] text-ink-soft">
            <a href="#insight" className="hover:text-ink transition-colors">
              Insight
            </a>
            <a href="#work" className="hover:text-ink transition-colors">
              Work
            </a>
            <a href="#process" className="hover:text-ink transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.15em] border border-ink/20 px-4 py-2 rounded-full hover:bg-ink hover:text-paper transition-colors"
          >
            Book a consultation
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative max-w-[1320px] mx-auto px-8 pt-20 pb-28">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-3 mb-10 rise">
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  Healthcare digital branding agency
                </span>
              </div>
              <h1
                className="font-display font-light leading-[0.95] tracking-tight text-balance rise rise-1"
                style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
              >
                Building digital
                <br />
                <span className="italic font-normal">brands</span> for a
                <br />
                healthier tomorrow.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-line rise rise-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft mb-4">
                Built for
              </p>
              <ul className="space-y-3">
                {audiences.map((a, i) => (
                  <li key={a} className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-accent w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-lg">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Insight */}
        <section id="insight" className="relative">
          <div className="max-w-[1320px] mx-auto px-8 py-24">
            <div className="glass rounded-3xl p-12 md:p-16 grid grid-cols-12 gap-10">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  The insight
                </p>
                <p className="font-display text-6xl font-light mt-4 text-accent">01</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-display font-light text-4xl md:text-5xl leading-[1.1] tracking-tight text-balance">
                  Offline reputation, <span className="italic">online</span> opportunity.
                </h2>
                <div className="mt-8 grid grid-cols-12 gap-8">
                  <p className="col-span-12 md:col-span-6 font-body text-[15px] leading-relaxed text-ink-soft">
                    Many healthcare professionals have spent years building expertise and standing
                    within their community. Their digital presence simply hasn't caught up to the
                    same level of professionalism — content is inconsistent, the personal brand is
                    undeveloped, clinic identity varies from one channel to the next.
                  </p>
                  <p className="col-span-12 md:col-span-6 font-body text-[15px] leading-relaxed text-ink-soft">
                    We treat that as an opportunity rather than a shortcoming: translating existing
                    professional credibility into digital credibility. The outcome is a presence
                    that earns trust the way a practice does — through clarity, precision, and
                    restraint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bridge statement */}
        <section className="max-w-[1320px] mx-auto px-8 py-24">
          <div className="grid grid-cols-12 gap-8 items-baseline">
            <div className="col-span-12 lg:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Our role
              </span>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <p
                className="font-display font-light leading-[1.05] tracking-tight text-balance"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.75rem)" }}
              >
                You bring the <span className="italic">expertise</span>. We turn it into a{" "}
                <span className="italic text-accent">digital brand</span>.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft mt-10">
                Healthcare expertise → Strategy → Creative communication → Digital presence
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="max-w-[1320px] mx-auto px-8 py-16">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-3xl font-light tracking-tight">What we create</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Six disciplines
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line/60 border border-line/60 rounded-2xl overflow-hidden">
            {services.map((s) => (
              <div key={s.code} className="bg-paper/70 p-8">
                <p className="font-mono text-[10px] text-accent mb-4">{s.code}</p>
                <h3 className="font-display text-2xl font-light mb-2">{s.title}</h3>
                <p className="font-body text-sm text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transformation flow */}
        <section id="work" className="max-w-[1320px] mx-auto px-8 py-24">
          <div className="grid grid-cols-12 gap-8 mb-14 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Show, don't claim
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 tracking-tight leading-tight text-balance">
                One insight becomes a full <span className="italic">digital presence</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="font-body text-[15px] text-ink-soft leading-relaxed">
                From a single conversation to a coherent brand ecosystem — each stage informed by
                the last.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Stage 1 — Interview */}
            <div className="col-span-12 md:col-span-3 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
                  Stage 01
                </span>
                <span className="font-mono text-[10px] text-accent">Interview</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-full bg-accent/20" />
                  <div className="h-1.5 rounded-full bg-ink/10 flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="ml-10 h-1.5 rounded-full bg-ink/10 flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-7 rounded-full bg-accent/30" />
                  <div className="h-1.5 rounded-full bg-ink/10 flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="ml-10 h-1.5 rounded-full bg-ink/15 flex-1" />
                  <div className="ml-10 h-1.5 rounded-full bg-ink/10 w-1/3" />
                </div>
              </div>
            </div>

            {/* Stage 2 — Reel */}
            <div className="col-span-12 md:col-span-3 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
                  Stage 02
                </span>
                <span className="font-mono text-[10px] text-accent">Reel</span>
              </div>
              <div className="mx-auto w-32 rounded-[22px] border border-ink/15 bg-paper-deep/60 p-1.5">
                <div className="rounded-[18px] bg-ink overflow-hidden">
                  <div className="aspect-[9/16] relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-ink" />
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                      <div className="size-5 rounded-full bg-paper/20" />
                      <div className="font-mono text-[8px] text-paper/70 uppercase tracking-widest">
                        0:42
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="h-1.5 rounded-full bg-paper/30 mb-2" />
                      <div className="h-1.5 rounded-full bg-paper/20 w-2/3" />
                      <div className="h-1.5 rounded-full bg-paper/10 w-1/2 mt-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 — Carousel */}
            <div className="col-span-12 md:col-span-3 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
                  Stage 03
                </span>
                <span className="font-mono text-[10px] text-accent">Carousel</span>
              </div>
              <div className="space-y-2">
                <div className="aspect-[4/3] rounded-lg bg-ink/90 p-3 relative">
                  <div className="font-display text-paper text-lg italic leading-tight">
                    Three
                    <br />
                    myths about
                    <br />
                    heart health
                  </div>
                  <div className="absolute bottom-2 right-2 font-mono text-[9px] text-paper/60">
                    1 / 5
                  </div>
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 aspect-square rounded-md bg-ink/15" />
                  ))}
                </div>
              </div>
            </div>

            {/* Stage 4 — Awareness */}
            <div className="col-span-12 md:col-span-3 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
                  Stage 04
                </span>
                <span className="font-mono text-[10px] text-accent">Awareness</span>
              </div>
              <div className="rounded-xl bg-paper-deep/70 border border-line/60 overflow-hidden">
                <div className="flex items-center gap-2 p-3 border-b border-line/50">
                  <div className="size-7 rounded-full bg-accent/40" />
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-ink/20 w-1/2" />
                    <div className="h-1.5 rounded-full bg-ink/10 w-1/3 mt-1" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-display text-base leading-snug mb-3">
                    Caring for your skin starts with <span className="italic">patience</span>.
                  </div>
                  <div className="aspect-[4/3] rounded-md bg-accent/15" />
                  <div className="flex gap-4 mt-3">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="size-4 rounded-full bg-ink/10" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected concepts */}
        <section className="max-w-[1320px] mx-auto px-8 py-16">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-display text-4xl font-light tracking-tight">Selected concepts</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              All work shown is illustrative
            </span>
          </div>

          <div className="grid grid-cols-12 gap-5">
            {/* Concept 01 — Pediatrician */}
            <div className="col-span-12 md:col-span-7 group">
              <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="grid grid-cols-5">
                  <div className="col-span-3 h-full min-h-[360px] bg-mint relative p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/60">
                        Concept project
                      </span>
                      <span className="font-mono text-[9px] text-ink/40">01</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-ink/50 mb-2">
                        Personal brand — pediatrics
                      </div>
                      <div className="font-display text-3xl font-light leading-tight">
                        Pediatrician
                        <br />
                        <span className="italic text-accent">Dr. Amara Osei</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 h-full min-h-[360px] bg-paper-deep/60 p-6 flex flex-col justify-between">
                    <div className="size-12 rounded-full bg-accent/20" />
                    <div>
                      <div className="font-mono text-[10px] text-ink-soft mb-3">
                        Educational reel · child-health carousel · feed design
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 rounded-full bg-ink/15 w-full" />
                        <div className="h-1.5 rounded-full bg-ink/15 w-4/5" />
                        <div className="h-1.5 rounded-full bg-ink/15 w-3/5" />
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="size-6 rounded-full bg-accent/40" />
                        <div className="size-6 rounded-full bg-ink/20" />
                        <div className="size-6 rounded-full bg-paper-deep border border-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept 02 — Dermatology */}
            <div className="col-span-12 md:col-span-5 group">
              <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col h-full min-h-[360px]">
                  <div className="flex-1 bg-sand p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/60">
                        Concept project
                      </span>
                      <span className="font-mono text-[9px] text-ink/40">02</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-ink/50 mb-2">
                        Brand identity · patient education campaign
                      </div>
                      <div className="font-display text-3xl font-light leading-tight">
                        Lumen <span className="italic">Dermatology</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-24 bg-ink/95 p-5 flex items-center justify-between">
                    <div className="flex gap-3">
                      <div className="size-8 rounded-full bg-accent/50" />
                      <div className="size-8 rounded-full bg-accent-soft/50" />
                      <div className="size-8 rounded-full bg-paper/40" />
                    </div>
                    <div className="flex-1 ml-4 space-y-2">
                      <div className="h-1.5 rounded-full bg-paper/30 w-full" />
                      <div className="h-1.5 rounded-full bg-paper/20 w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept 03 — Dental */}
            <div className="col-span-12 md:col-span-5 group">
              <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col h-full min-h-[320px]">
                  <div className="flex-1 bg-paper-deep/70 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/60">
                        Concept project
                      </span>
                      <span className="font-mono text-[9px] text-ink/40">03</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-ink/50 mb-2">
                        Clinic branding · awareness content system
                      </div>
                      <div className="font-display text-3xl font-light leading-tight">
                        Aria <span className="italic text-accent">Dental</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 bg-accent/10 p-4 grid grid-cols-4 gap-2 items-center">
                    <div className="aspect-square rounded-md bg-accent/20" />
                    <div className="aspect-square rounded-md bg-ink/10" />
                    <div className="aspect-square rounded-md bg-accent-soft/30" />
                    <div className="aspect-square rounded-md bg-ink/5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Concept 04 — Cardiology */}
            <div className="col-span-12 md:col-span-7 group">
              <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="grid grid-cols-5 h-full min-h-[320px]">
                  <div className="col-span-2 h-full bg-ink/95 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-paper/60">
                        Concept project
                      </span>
                      <span className="font-mono text-[9px] text-paper/40">04</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-paper/50 mb-2">
                        Cardiology specialist
                      </div>
                      <div className="font-display text-3xl font-light leading-tight text-paper">
                        Hartwell <span className="italic text-accent-soft">Cardiology</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 h-full bg-paper-deep/60 p-6 flex flex-col justify-between">
                    <div className="font-mono text-[10px] text-ink-soft mb-2">
                      Typography sample
                    </div>
                    <div>
                      <div className="font-display text-5xl font-light leading-none">Aa</div>
                      <div className="font-body text-sm text-ink-soft mt-3 leading-relaxed">
                        Doctor personal branding and educational content, paced for clinical
                        clarity.
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="size-5 rounded-full bg-accent" />
                      <div className="size-5 rounded-full bg-accent/70" />
                      <div className="size-5 rounded-full bg-ink/80" />
                      <div className="size-5 rounded-full bg-ink/40" />
                      <div className="size-5 rounded-full bg-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="max-w-[1320px] mx-auto px-8 py-24">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                The process
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 tracking-tight leading-tight">
                Seven steps,
                <br />
                <span className="italic">one brand</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8 lg:border-l lg:border-line">
              <p className="font-body text-[15px] text-ink-soft leading-relaxed max-w-xl">
                Each engagement follows the same disciplined sequence. Nothing is skipped, nothing
                is rushed — the sequence is what makes the outcome feel inevitable.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft mt-8">
                Creative communication backed by professional expertise
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-2">
            <ol className="divide-y divide-line/50">
              {process.map((step) => (
                <li key={step.n} className="grid grid-cols-12 gap-6 p-6 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-display text-3xl font-light text-accent">
                    {step.n}
                  </span>
                  <h3 className="col-span-10 md:col-span-3 font-display text-xl font-light">
                    {step.title}
                  </h3>
                  <p className="col-span-12 md:col-span-8 font-body text-sm text-ink-soft leading-relaxed">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="relative max-w-[1320px] mx-auto px-8 py-24">
          <div className="glass-deep rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-accent/15 blur-[80px]" />
            <div className="relative grid grid-cols-12 gap-8 items-end">
              <div className="col-span-12 lg:col-span-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  Begin
                </span>
                <h2
                  className="font-display font-light leading-[1.02] tracking-tight mt-6 text-balance"
                  style={{ fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)" }}
                >
                  Start a <span className="italic">conversation</span>.
                </h2>
                <p className="font-body text-[15px] text-ink-soft leading-relaxed mt-8 max-w-md">
                  A 30-minute consultation. We'll listen, ask the right questions, and tell you
                  honestly whether we're the right fit.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-line flex flex-col gap-3">
                <a
                  href="mailto:studio@healthbrand.co"
                  className="block bg-ink text-paper rounded-full px-6 py-4 text-center font-body text-sm tracking-tight hover:bg-accent transition-colors"
                >
                  Start a conversation
                </a>
                <a
                  href="mailto:studio@healthbrand.co?subject=Consultation"
                  className="block border border-ink/20 rounded-full px-6 py-4 text-center font-body text-sm tracking-tight hover:border-ink transition-colors"
                >
                  Book a consultation
                </a>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft mt-2">
                  studio@healthbrand.co
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/60 mt-8">
        <div className="max-w-[1320px] mx-auto px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-base font-medium">HealthBrand</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Studio
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
            All concept work shown is illustrative
          </p>
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
            © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
