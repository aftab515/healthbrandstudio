import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import reelDoctor from "@/assets/reel-doctor.jpg";
import dentalClinic from "@/assets/dental-clinic.jpg";
import logoAsset from "@/assets/healthbrand-mark.png.asset.json";

const WA_NUMBER = "923007920009";
const WA_DISPLAY = "+92 300 792 0009";
const EMAIL = "healthbrandofficial@gmail.com";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = wa(
  "Hello HealthBrand Studio, I'd like to discuss digital branding for my healthcare practice.",
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HealthBrand Studio — Healthcare Digital Branding Agency, Faisalabad" },
      {
        name: "description",
        content:
          "Healthcare digital branding and social media for doctors, clinics, hospitals and healthcare brands. Based in Faisalabad, Pakistan.",
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

const audiences = [
  {
    t: "Doctors & Specialists",
    b: "Personal branding and educational content that communicates professional expertise.",
  },
  { t: "Clinics", b: "Build a consistent and trustworthy digital identity across platforms." },
  {
    t: "Hospitals",
    b: "Professional digital communication and branding solutions for healthcare institutions.",
  },
  {
    t: "Healthcare Brands",
    b: "Strategic branding, content and digital marketing for businesses operating within healthcare.",
  },
];

const specialties = [
  "Pediatricians",
  "Gynecologists",
  "Cardiologists",
  "Dermatologists",
  "Dentists",
  "Physiotherapists",
  "Psychologists",
  "Medicine Specialists",
  "Skin & Hair Clinics",
];

const services = [
  {
    n: "01",
    t: "Healthcare Social Media Management",
    i: [
      "Social media strategy",
      "Monthly content planning",
      "Professional post design",
      "Publishing and scheduling",
      "Reels strategy",
      "Engagement management",
      "Performance reporting",
    ],
  },
  {
    n: "02",
    t: "Doctor Personal Branding",
    i: [
      "Personal brand strategy",
      "Content positioning",
      "Educational content",
      "Professional profile development",
      "Thought-leadership content",
      "Digital authority building",
    ],
  },
  {
    n: "03",
    t: "Healthcare Content Creation",
    i: [
      "Educational posts",
      "Social media carousels",
      "Patient-awareness content",
      "Reels",
      "Healthcare campaigns",
      "Infographics",
      "Content writing",
    ],
  },
  {
    n: "04",
    t: "Video Production & Editing",
    i: [
      "Doctor interviews",
      "Educational videos",
      "Clinic introduction videos",
      "Reels",
      "Awareness videos",
      "Professional editing",
      "Captions and subtitles",
    ],
  },
  {
    n: "05",
    t: "Clinic & Hospital Brand Identity",
    i: [
      "Logo and visual identity",
      "Color systems",
      "Typography",
      "Brand guidelines",
      "Social media identity",
      "Marketing collateral",
      "Digital communication materials",
    ],
  },
  {
    n: "06",
    t: "Digital Marketing & Advertising",
    i: [
      "Meta advertising",
      "Facebook & Instagram campaigns",
      "Campaign strategy",
      "Audience research",
      "Ad creative development",
      "Campaign optimization",
      "Performance tracking",
    ],
  },
];

const process = [
  ["Discovery", "We understand your practice, services, audience, goals and existing digital presence."],
  ["Strategy", "We determine positioning, content direction and digital communication strategy."],
  ["Content planning", "We turn professional expertise into structured content topics and campaigns."],
  ["Creation", "Our creative team develops designs, reels, videos and digital assets."],
  ["Review", "Healthcare professionals review relevant content before publication when required."],
  ["Management", "Approved content is scheduled, published and managed consistently."],
  ["Improvement", "We review performance and continuously improve the strategy."],
];

const Label = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span
    className={`font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft ${className}`}
  >
    {children}
  </span>
);

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[34px] bg-ink p-[7px] shadow-[0_30px_60px_-25px_color-mix(in_oklab,var(--ink)_55%,transparent)] ${className}`}
    >
      <div className="relative rounded-[28px] overflow-hidden bg-paper aspect-[9/19]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-ink z-20" />
        {children}
      </div>
    </div>
  );
}

function ReelScreen({ title, caption, time, progress }: { title: string; caption: string; time: string; progress: string }) {
  return (
    <div className="absolute inset-0">
      <img src={reelDoctor} alt="Pediatrician explaining child fever to camera" width={768} height={1344} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/85" />
      <div className="absolute top-8 left-3 right-3 flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-paper/90">Reel</span>
        <span className="font-mono text-[8px] text-paper/80">{time}</span>
      </div>
      <div className="absolute top-14 left-3 right-3">
        <p className="font-display text-paper text-[15px] leading-tight">{title}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-11 rounded-full bg-paper/25 backdrop-blur flex items-center justify-center">
          <div className="ml-1 border-y-[7px] border-y-transparent border-l-[11px] border-l-paper" />
        </div>
      </div>
      <div className="absolute bottom-4 left-3 right-3">
        <p className="text-center font-body text-[10px] leading-snug text-paper bg-ink/60 rounded-md px-2 py-1.5 mb-3">
          {caption}
        </p>
        <div className="h-[3px] rounded-full bg-paper/30 overflow-hidden">
          <div className="h-full bg-gold" style={{ width: progress }} />
        </div>
        <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.2em] text-paper/70">
          HealthBrand · Educational series
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased overflow-x-clip">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 mb-6 sm:mb-8 rise">
              <span className="h-px w-7 shrink-0 bg-gold" />
              <Label className="leading-relaxed">HealthBrand Studio · Healthcare Digital Branding Agency</Label>
            </div>
            <h1 className="font-display text-[2.65rem] font-light leading-[0.98] tracking-tight text-balance rise rise-1 sm:text-6xl lg:text-7xl xl:text-[6.25rem]">
              Building digital brands for a <span className="italic text-emerald">healthier</span> tomorrow.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft rise rise-2 sm:mt-8 sm:text-[17px]">
              We help doctors, clinics, hospitals and healthcare brands turn their expertise into
              professional content, powerful digital identities and meaningful online experiences.
            </p>
            <div className="mt-8 grid gap-3 rise rise-2 sm:mt-10 sm:flex sm:flex-wrap">
              <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="bg-emerald text-paper rounded-full px-6 py-4 text-center text-sm font-medium hover:bg-emerald-deep transition-colors sm:px-7">
                Start a Conversation
              </a>
              <a href="#services" className="border border-ink/20 rounded-full px-6 py-4 text-center text-sm hover:border-ink transition-colors sm:px-7">
                Explore Our Services
              </a>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-soft sm:mt-10 sm:text-[11px] sm:tracking-[0.18em]">
              Healthcare-Focused <span className="text-gold">•</span> Strategy-Led <span className="text-gold">•</span> Creatively Driven
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="absolute inset-x-2 inset-y-8 rounded-[32px] bg-mint sm:inset-x-8 sm:rounded-[40px]" />
            <div className="relative flex items-end gap-3 py-8 sm:gap-5 sm:py-10">
              <Phone className="w-[190px] rotate-[-3deg] sm:w-[210px]">
                <ReelScreen title="Child fever: when should parents seek medical advice?" caption="“Most fevers are the body's natural response — but some signs mean you should call your doctor.”" time="0:38 / 1:12" progress="52%" />
              </Phone>
              <div className="hidden sm:block w-[170px] mb-10 rotate-[2deg] rounded-2xl bg-card border border-line p-3 shadow-xl">
                <div className="aspect-[4/5] rounded-xl bg-emerald p-4 flex flex-col justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-gold">Carousel · 1/5</span>
                  <p className="font-display text-paper text-lg leading-tight">Child fever: what parents should know</p>
                </div>
                <div className="flex gap-1 justify-center mt-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className={`size-1.5 rounded-full ${i === 0 ? "bg-emerald" : "bg-line"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="border-y border-line bg-card/50">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <Label>Who we help</Label>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight tracking-tight">
                Built exclusively for <span className="italic">healthcare</span>.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
                Healthcare communication requires more than good design. It requires understanding
                expertise, credibility and trust.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="divide-y divide-line border-y border-line">
                {audiences.map((a, i) => (
                  <div key={a.t} className="grid grid-cols-12 gap-4 py-7">
                    <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-gold pt-2">0{i + 1}</span>
                    <h3 className="col-span-10 md:col-span-4 font-display text-2xl font-light">{a.t}</h3>
                    <p className="col-span-12 md:col-span-7 text-[15px] text-ink-soft leading-relaxed">{a.b}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {specialties.map((s) => (
                  <span key={s} className="text-[13px] text-ink-soft">{s}</span>
                ))}
                <span className="text-[13px] text-ink-soft italic">and other medical specialists</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 lg:py-28">
          <div className="max-w-3xl mb-12 md:mb-16">
            <Label>Services</Label>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight tracking-tight text-balance">
              Everything your healthcare brand needs to <span className="italic">stand out digitally</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((s) => (
              <div key={s.n} className="border-t border-ink/80 pt-6">
                <p className="font-mono text-[11px] text-gold mb-3">{s.n}</p>
                <h3 className="font-display text-2xl font-light leading-snug mb-5">{s.t}</h3>
                <ul className="space-y-2">
                  {s.i.map((x) => (
                    <li key={x} className="flex gap-3 text-[14px] text-ink-soft">
                      <span className="mt-2 size-1 rounded-full bg-emerald shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-16 text-[13px] text-ink-soft max-w-2xl">
            We focus on communication quality and consistency. We do not promise patients,
            appointments, leads, revenue or medical outcomes.
          </p>
        </section>

        {/* Workflow */}
        <section id="workflow" className="bg-emerald-deep text-paper">
           <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 lg:py-28">
             <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
              <div className="col-span-12 lg:col-span-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Example Content Workflow</span>
                 <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-4 leading-[1.05] tracking-tight text-balance">
                  One insight becomes a full <span className="italic">digital presence</span>.
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-5 text-[15px] leading-relaxed text-paper/70">
                One conversation with a healthcare professional can become an entire ecosystem of
                meaningful digital content. Below, a pediatric example shows how.
              </p>
            </div>

            {/* Original insight */}
             <div className="grid grid-cols-12 gap-8 mb-16 md:mb-20">
               <div className="col-span-12 lg:col-span-5 rounded-2xl bg-paper text-ink p-5 sm:p-8 rotate-[-0.6deg] shadow-2xl">
                 <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-line pb-4 mb-6">
                  <Label>Content planning session · notes</Label>
                  <span className="font-mono text-[10px] text-gold">Pediatrics</span>
                </div>
                <Label>Original expert insight</Label>
                <p className="font-display text-3xl font-light leading-tight mt-3">
                  “When should parents be concerned about a child's fever?”
                </p>
                <ul className="mt-6 space-y-2 text-[13px] text-ink-soft">
                  <li>— Parents ask this in almost every consultation</li>
                  <li>— Explain monitoring vs. when to contact the doctor</li>
                  <li>— Keep it general; no individual advice</li>
                  <li>— Doctor to review final scripts before publishing</li>
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-7 flex flex-wrap items-center gap-3 content-center">
                {["Doctor's Expertise", "Content Strategy", "Video", "Carousel", "Stories", "Professional Digital Presence"].map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className={`rounded-full px-5 py-2.5 text-[13px] border ${i === arr.length - 1 ? "bg-gold text-ink border-gold" : "border-paper/25"}`}>{s}</span>
                    {i < arr.length - 1 && <span className="text-gold">→</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* 01 Expert video */}
              <Asset n="01" t="Expert Video" className="col-span-12 md:col-span-6 lg:col-span-4">
                <Phone className="w-[220px] mx-auto">
                  <ReelScreen title="Child Fever: When Should Parents Seek Medical Advice?" caption="“Watch how your child is behaving, not only the number on the thermometer.”" time="0:21 / 1:12" progress="30%" />
                </Phone>
              </Asset>

              {/* 02 Carousel */}
              <Asset n="02" t="Educational Carousel" className="col-span-12 md:col-span-6 lg:col-span-8">
                <EduCarousel
                  slides={[
                    <Slide dark k="1/4" title="Child Fever: What Parents Should Know" />,
                    <Slide k="2/4" title="When to Monitor" body="Rest, fluids and comfort. Note temperature and how your child is eating, sleeping and playing." />,
                    <Slide k="3/4" title="When to Contact Your Doctor" body="If you're worried, if the fever persists, or if your child seems unusually unwell — call your doctor." />,
                    <Slide k="4/4" title="Questions Parents Commonly Ask" body="Save this post and bring your questions to your next consultation." />,
                  ]}
                />
                <p className="mt-4 text-[12px] text-paper/60">General education only — not a substitute for individual medical advice.</p>
              </Asset>

              {/* 03 Post */}
              <Asset n="03" t="Educational Post" className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="rounded-xl bg-paper text-ink overflow-hidden">
                  <div className="flex items-center gap-2 p-3 border-b border-line">
                    <span className="size-7 rounded-full bg-emerald" />
                    <span className="text-[12px] font-medium">pediatric.specialist</span>
                  </div>
                  <div className="aspect-square bg-sand p-6 flex flex-col justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald">Child health</span>
                    <p className="font-display text-3xl font-light leading-tight">Understanding fever in <span className="italic text-emerald">children</span></p>
                    <span className="h-px w-12 bg-gold" />
                  </div>
                  <p className="p-3 text-[12px] text-ink-soft leading-snug">Educational content designed to make professional knowledge easier to understand.</p>
                </div>
              </Asset>

              {/* 04 Stories */}
              <Asset n="04" t="Instagram Stories" className="col-span-12 md:col-span-6 lg:col-span-5">
                 <div className="grid grid-cols-1 gap-3 min-[430px]:grid-cols-3">
                  {[
                    ["Ask the Doctor", "bg-gold text-ink", "Type your question…"],
                    ["Common Questions About Child Fever", "bg-paper text-ink", "Tap to see answers"],
                    ["Save This Topic for Your Next Consultation", "bg-emerald text-paper", "Saved ✓"],
                  ].map(([t, c, s]) => (
                     <div key={t} className={`aspect-[9/16] min-h-64 rounded-xl p-3 flex flex-col justify-between min-[430px]:min-h-0 ${c}`}>
                      <div className="flex gap-1">{[0, 1, 2].map((i) => <span key={i} className="h-0.5 flex-1 rounded-full bg-current opacity-40" />)}</div>
                      <p className="font-display text-[15px] leading-tight">{t}</p>
                      <span className="rounded-full border border-current/30 px-2 py-1 text-[9px] opacity-80 text-center">{s}</span>
                    </div>
                  ))}
                </div>
              </Asset>

              {/* 05 Short video */}
              <Asset n="05" t="Short-Form Video" className="col-span-12 md:col-span-6 lg:col-span-3">
                <Phone className="w-[170px] mx-auto">
                  <ReelScreen title="3 signs to call your doctor" caption="“Trust your instinct as a parent.”" time="0:09 / 0:15" progress="60%" />
                </Phone>
              </Asset>

              {/* 06 Profile */}
              <Asset n="06" t="Professional Profile Content" className="col-span-12">
                 <div className="grid grid-cols-12 gap-6 items-center rounded-xl bg-paper text-ink p-4 sm:p-6">
                   <div className="col-span-12 md:col-span-4 flex min-w-0 items-center gap-4">
                    <img src={reelDoctor} alt="" width={768} height={1344} loading="lazy" className="size-20 rounded-full object-cover object-top" />
                    <div>
                      <p className="font-medium">Pediatric Specialist</p>
                      <p className="text-[12px] text-ink-soft">Child Health · Parent Education</p>
                      <p className="text-[12px] text-emerald mt-1">Book via clinic · WhatsApp</p>
                    </div>
                  </div>
                   <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2">
                    {["Fever", "Nutrition", "Vaccines", "Sleep"].map((h) => (
                      <div key={h} className="text-center">
                        <div className="size-14 mx-auto rounded-full border-2 border-gold bg-mint flex items-center justify-center font-display text-sm">{h[0]}</div>
                        <p className="text-[11px] mt-1.5 text-ink-soft">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Asset>
            </div>

            <p className="mt-20 font-display font-light text-center leading-tight text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              You bring the <span className="italic text-gold">expertise</span>. We build the digital experience around it.
            </p>
          </div>
        </section>

        {/* Concepts */}
          <section id="concepts" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-12 gap-8 mb-16 items-end">
            <div className="col-span-12 lg:col-span-7">
              <Label>Portfolio</Label>
              <h2 className="font-display text-4xl md:text-6xl font-light mt-4 tracking-tight">Selected Concepts</h2>
              <p className="mt-5 text-[15px] text-ink-soft max-w-lg">A look at how we approach healthcare branding, content and digital communication.</p>
            </div>
            <p className="col-span-12 lg:col-span-5 lg:text-right text-[12px] text-ink-soft italic">
              Creative demonstrations developed by HealthBrand Studio.
            </p>
          </div>

          {/* Concept 01 */}
          <article className="border-t border-line pt-10 mb-24">
            <ConceptHead n="01" cat="Personal Branding • Content Strategy • Social Media" t="Building a trusted digital presence for a pediatric specialist" />
            <div className="grid grid-cols-12 gap-6 mt-10">
              <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-center rounded-3xl bg-mint py-10">
                <Phone className="w-[240px]">
                  <div className="absolute inset-0 pt-9 px-3 bg-card">
                    <p className="text-center text-[11px] font-medium">pediatric.specialist</p>
                    <div className="flex items-center gap-3 mt-3">
                      <img src={reelDoctor} alt="" width={768} height={1344} loading="lazy" className="size-12 rounded-full object-cover object-top ring-2 ring-gold" />
                      <div className="text-[9px] leading-snug text-ink-soft">
                        <p className="text-ink font-medium text-[10px]">Pediatric Specialist</p>
                        Child health education for parents. Content reviewed by the doctor.
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className="flex-1 text-center rounded-md bg-emerald text-paper text-[9px] py-1">Contact</span>
                      <span className="flex-1 text-center rounded-md bg-paper-deep text-[9px] py-1">Clinic info</span>
                    </div>
                    <div className="grid grid-cols-3 gap-0.5 mt-3">
                      {["bg-emerald", "bg-sand", "bg-gold", "bg-mint", "bg-emerald-deep", "bg-paper-deep", "bg-sand", "bg-emerald", "bg-mint"].map((c, i) => (
                        <div key={i} className={`aspect-square ${c} p-1.5 flex items-end`}>
                          <span className={`h-0.5 w-5 ${c.includes("emerald") ? "bg-gold" : "bg-emerald"}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Phone>
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-1 rounded-2xl border border-line bg-card p-4 sm:p-6">
                  <Label>Content calendar · Month 1</Label>
                  <div className="mt-4 grid grid-cols-7 gap-1 text-[9px]">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i} className="text-center text-ink-soft">{d}</span>)}
                    {Array.from({ length: 28 }).map((_, i) => {
                      const tag = { 1: "Reel", 3: "Post", 5: "Story", 8: "Carousel", 10: "Reel", 12: "Story", 15: "Post", 17: "Reel", 19: "Q&A", 22: "Carousel", 24: "Reel", 26: "Story" }[i];
                      return (
                        <div key={i} className={`aspect-square rounded-md p-1 ${tag ? "bg-mint" : "bg-paper-deep/60"}`}>
                          <span className="text-ink-soft">{i + 1}</span>
                          {tag && <p className="text-emerald font-medium leading-none mt-0.5 truncate">{tag}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="lg:col-span-1 rounded-2xl bg-emerald text-paper p-6 flex flex-col justify-between min-h-[240px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Awareness post</span>
                  <p className="font-display text-3xl font-light leading-tight">Healthy sleep routines for <span className="italic">growing</span> children.</p>
                  <p className="text-[11px] text-paper/60">Story templates · carousel system · feed design</p>
                </div>
                <div className="lg:col-span-2 rounded-2xl border border-line bg-card p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[13px]">
                  {[["Positioning", "Calm, reassuring child-health educator"], ["Content pillars", "Fever · Nutrition · Vaccines · Sleep"], ["Formats", "Reels, carousels, stories, Q&A"]].map(([a, b]) => (
                    <div key={a}><Label>{a}</Label><p className="mt-2">{b}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Concept 02 */}
          <article className="border-t border-line pt-10 mb-24">
            <ConceptHead n="02" cat="Clinic Brand Identity • Social Media Identity • Collateral" t="A modern, calm identity for a dental clinic" />
            <div className="grid grid-cols-12 gap-6 mt-10">
              <div className="col-span-12 lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[280px] sm:min-h-[380px]">
                <img src={dentalClinic} alt="Dental clinic reception concept" width={1280} height={896} loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div className="absolute bottom-5 left-5 glass rounded-xl px-4 py-3">
                  <p className="font-display text-xl">Dental Clinic <span className="italic">Concept</span></p>
                  <p className="text-[11px] text-ink-soft">Environment & signage direction</p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-6">
                <div className="col-span-2 rounded-2xl border border-line bg-card p-6">
                  <Label>Colour system</Label>
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {[["bg-emerald-deep", "Deep emerald"], ["bg-emerald", "Emerald"], ["bg-gold", "Brass"], ["bg-sand", "Cream"], ["bg-card border border-line", "Ivory"]].map(([c, n]) => (
                      <div key={n} className="min-w-0"><div className={`h-12 rounded-lg sm:h-16 ${c}`} /><p className="mt-1.5 break-words text-[9px] leading-tight text-ink-soft sm:text-[10px]">{n}</p></div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-card p-6">
                  <Label>Typography</Label>
                  <p className="font-display text-5xl font-light mt-3">Aa</p>
                  <p className="text-[11px] text-ink-soft mt-2">Fraunces / Inter</p>
                </div>
                <div className="rounded-2xl bg-emerald-deep text-paper p-6 flex flex-col justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">Post</span>
                  <p className="font-display text-xl leading-tight">Your first check-up, explained.</p>
                </div>
              </div>
            </div>
          </article>

          {/* Concepts 03-04 */}
          <div className="grid grid-cols-12 gap-6">
            <article className="col-span-12 md:col-span-6 border-t border-line pt-10">
              <ConceptHead small n="03" cat="Patient Education • Campaign Creative" t="Awareness content for a skin & hair clinic" />
              <div className="mt-8 grid grid-cols-1 gap-3 min-[430px]:grid-cols-3">
                {["Sun care, simply explained", "Myths vs facts: hair fall", "Before your first visit"].map((t, i) => (
                  <div key={t} className={`aspect-[4/5] max-h-72 rounded-xl p-4 flex flex-col justify-between min-[430px]:max-h-none ${["bg-sand", "bg-emerald text-paper", "bg-mint"][i]}`}>
                    <span className="h-px w-8 bg-gold" /><p className="font-display text-lg leading-tight">{t}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="col-span-12 md:col-span-6 border-t border-line pt-10">
              <ConceptHead small n="04" cat="Institutional Communication • Video" t="A consistent communication system for a hospital" />
              <div className="mt-8 rounded-xl border border-line bg-card p-5">
                <div className="aspect-video rounded-lg bg-emerald-deep relative overflow-hidden flex items-end p-4">
                  <p className="font-display text-paper text-xl">Meet our cardiology department</p>
                  <div className="absolute inset-x-4 bottom-2 h-[3px] rounded-full bg-paper/20"><div className="h-full w-1/3 bg-gold rounded-full" /></div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[3, 5, 2, 4, 6, 3].map((w, i) => <div key={i} className={`h-6 rounded ${i % 2 ? "bg-mint" : "bg-sand"}`} style={{ flex: w }} />)}
                </div>
                <p className="text-[11px] text-ink-soft mt-2">Edit timeline · captions & subtitles</p>
              </div>
            </article>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t border-line bg-card/50">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 lg:py-28 grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <Label>How we work</Label>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 tracking-tight leading-tight">
                Seven steps, <span className="italic">one brand</span>.
              </h2>
              <p className="mt-6 text-[15px] text-ink-soft leading-relaxed">
                A clear, disciplined sequence — with healthcare professionals reviewing relevant
                content before anything is published.
              </p>
            </div>
            <ol className="col-span-12 lg:col-span-8 divide-y divide-line border-y border-line">
              {process.map(([t, b], i) => (
                <li key={t} className="grid grid-cols-12 gap-4 py-6 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-gold">0{i + 1}</span>
                  <h3 className="col-span-10 md:col-span-3 font-display text-xl font-light">{t}</h3>
                  <p className="col-span-12 md:col-span-8 text-sm text-ink-soft leading-relaxed">{b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-emerald text-paper">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 lg:py-28 grid grid-cols-12 gap-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Contact</span>
              <h2 className="font-display text-[2.65rem] font-light leading-[1.02] tracking-tight mt-6 text-balance sm:text-6xl lg:text-[5.25rem]">
                Let's discuss your <span className="italic">brand</span>.
              </h2>
              <p className="text-[15px] text-paper/70 leading-relaxed mt-8 max-w-md">
                Tell us about your practice and where you'd like your digital presence to go. We'll
                listen, ask the right questions, and tell you honestly whether we're the right fit.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
              <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="bg-gold text-ink rounded-full px-6 py-4 text-center text-sm font-medium hover:opacity-90 transition-opacity">
                Start a Conversation on WhatsApp
              </a>
              <a href={wa("Hello HealthBrand Studio, I'd like to book a consultation.")} target="_blank" rel="noreferrer" className="border border-paper/30 rounded-full px-6 py-4 text-center text-sm hover:border-paper transition-colors">
                Book a Consultation
              </a>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Healthcare branding inquiry")}`} className="border border-paper/30 rounded-full px-4 py-4 text-center text-[13px] hover:border-paper transition-colors sm:px-6 sm:text-sm">
                Email <span className="break-all">{EMAIL}</span>
              </a>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-paper/60 mt-3 sm:tracking-[0.15em]">
                WhatsApp {WA_DISPLAY} · Faisalabad, Pakistan
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-deep text-paper/70">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-[12px]">
          <span className="flex items-center gap-2.5 font-display text-base text-paper"><BrandMark className="size-7" />HealthBrand Studio</span>
          <span>We provide branding and communication services — not medical advice.</span>
          <span className="break-words">
            <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="hover:text-paper">{WA_DISPLAY}</a> ·{" "}
            <a href={`mailto:${EMAIL}`} className="hover:text-paper">{EMAIL}</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

function Asset({ n, t, className, children }: { n: string; t: string; className?: string; children: ReactNode }) {
  return (
    <div className={`min-w-0 rounded-2xl border border-paper/15 p-4 sm:p-6 ${className}`}>
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-3 mb-6">
        <span className="font-mono text-[11px] text-gold">{n}</span>
        <h3 className="font-display text-xl font-light">{t}</h3>
      </div>
      {children}
    </div>
  );
}

function Slide({ k, title, body, dark }: { k: string; title: string; body?: string; dark?: boolean }) {
  return (
    <div className={`shrink-0 w-[190px] aspect-[4/5] rounded-xl p-5 flex flex-col justify-between ${dark ? "bg-gold text-ink" : "bg-paper text-ink"}`}>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-70">{k}</span>
      <div>
        <p className="font-display text-xl leading-tight">{title}</p>
        {body && <p className="text-[11px] leading-snug text-ink-soft mt-3">{body}</p>}
      </div>
      <span className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-60">Swipe →</span>
    </div>
  );
}

function ConceptHead({ n, cat, t, small }: { n: string; cat: string; t: string; small?: boolean }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-baseline">
      <span className="col-span-12 md:col-span-2 font-mono text-[11px] text-gold">Concept {n}</span>
      <div className="col-span-12 min-w-0 md:col-span-10">
        <Label className="leading-relaxed">{cat}</Label>
        <h3 className={`font-display font-light mt-2 leading-tight tracking-tight ${small ? "text-2xl" : "text-3xl md:text-4xl"}`}>{t}</h3>
      </div>
    </div>
  );
}

const NAV = [
  ["Services", "#services"],
  ["Workflow", "#workflow"],
  ["Concepts", "#concepts"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

/* Official HealthBrand Studio logo (H + medical cross mark). */
function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="HealthBrand Studio logo"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const on = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open ? "glass-deep border-x-0 border-t-0 shadow-[0_6px_24px_-18px_color-mix(in_oklab,var(--ink)_45%,transparent)]" : "glass-deep border-x-0 border-t-0"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 transition-[height] duration-300 ease-out sm:px-6 md:px-8 ${
          scrolled ? "h-14" : "h-16 md:h-[72px]"
        }`}
      >
        <a href="#" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <BrandMark className={`transition-all duration-300 ${scrolled ? "size-6" : "size-7"}`} />
          <span className="truncate font-display text-lg font-medium tracking-tight">HealthBrand</span>
          <Label className="hidden !tracking-[0.25em] xl:inline">Studio</Label>
        </a>
        <nav className="hidden min-w-0 items-center justify-center gap-4 text-[11px] text-ink-soft md:flex lg:gap-5 lg:text-[12px] xl:gap-8 xl:text-[13px]">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-ink transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="hidden shrink-0 rounded-full bg-emerald px-4 py-2.5 text-[12px] font-medium leading-tight text-paper transition-colors hover:bg-emerald-deep sm:inline-block">
            Start a Conversation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative size-10 shrink-0 rounded-full border border-line md:hidden"
          >
            <span className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </div>
      <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0">
          <nav className="flex flex-col px-4 pb-5 sm:px-6">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-line py-3.5 font-display text-lg">{l}</a>
            ))}
            <a href={WA_DEFAULT} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-5 rounded-full bg-emerald px-5 py-3.5 text-center text-sm font-medium text-paper">
              Start a Conversation
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

const SLIDE_W = 190;
const SLIDE_GAP = 12;

function EduCarousel({ slides }: { slides: ReactNode[] }) {
  const [i, setI] = useState(0);
  const [drag, setDrag] = useState(0);
  const start = useRef<number | null>(null);
  const n = slides.length;
  const go = (d: number) => setI((v) => Math.min(n - 1, Math.max(0, v + d)));
  const offset = i * (SLIDE_W + SLIDE_GAP) + SLIDE_W / 2;
  const btn = "size-10 shrink-0 rounded-full border border-paper/25 text-paper transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-paper/25 disabled:hover:text-paper";
  return (
    <div role="region" aria-roledescription="carousel" aria-label="Educational carousel">
      <div
        className="relative overflow-hidden select-none"
        style={{ touchAction: "pan-y" }}
        onPointerDown={(e) => { start.current = e.clientX; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); }}
        onPointerMove={(e) => { if (start.current !== null) setDrag(e.clientX - start.current); }}
        onPointerUp={() => { if (Math.abs(drag) > 40) go(drag < 0 ? 1 : -1); start.current = null; setDrag(0); }}
        onPointerCancel={() => { start.current = null; setDrag(0); }}
        onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
        tabIndex={0}
      >
        <div
          className={`flex w-full ${start.current === null ? "transition-transform duration-500 ease-[cubic-bezier(0.22,0.8,0.2,1)]" : ""}`}
          style={{ gap: SLIDE_GAP, transform: `translateX(calc(50% - ${offset}px + ${drag}px))` }}
        >
          {slides.map((s, k) => (
            <div
              key={k}
              aria-hidden={k !== i}
              onClick={() => k !== i && setI(k)}
              className={`shrink-0 transition-[opacity,transform] duration-500 ${k === i ? "opacity-100 scale-100" : "opacity-40 scale-[0.92] cursor-pointer"}`}
              style={{ width: SLIDE_W }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <button type="button" aria-label="Previous slide" className={btn} onClick={() => go(-1)} disabled={i === 0}>←</button>
        <div className="flex items-center gap-2">
          {slides.map((_, k) => (
            <button key={k} type="button" aria-label={`Go to slide ${k + 1}`} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-6 bg-gold" : "w-1.5 bg-paper/30"}`} />
          ))}
        </div>
        <button type="button" aria-label="Next slide" className={btn} onClick={() => go(1)} disabled={i === n - 1}>→</button>
      </div>
    </div>
  );
}
