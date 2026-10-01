import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { CONSULTATION, feeLabel } from "@/lib/consultation-config";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — HealthBrand Studio" },
      {
        name: "description",
        content: "Book a paid consultation with HealthBrand Studio to discuss your healthcare brand and digital presence.",
      },
      { property: "og:title", content: "Book a Consultation — HealthBrand Studio" },
      {
        property: "og:description",
        content: "Discuss your healthcare brand, digital presence and how you communicate online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ConsultationPage,
});

const ROLES = ["Doctor / Healthcare Professional", "Clinic", "Hospital", "Healthcare Brand", "Other"];
const TOPICS = [
  "Social Media Management",
  "Doctor Personal Branding",
  "Healthcare Content Creation",
  "Video Production & Editing",
  "Brand Identity",
  "Digital Marketing & Ads",
  "Complete Digital Branding",
  "General Consultation",
];

type Form = { name: string; phone: string; email: string; org: string; role: string; topic: string; notes: string };
const EMPTY: Form = { name: "", phone: "", email: "", org: "", role: "", topic: "", notes: "" };
type Step = 0 | 1 | 2 | 3;
const STEPS = ["Details", "Review", "Payment", "Verification"];

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (f.phone.replace(/[^\d]/g, "").length < 10) e.phone = "Please enter a valid phone / WhatsApp number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.org.trim().length < 2) e.org = "Please enter your practice or organization.";
  if (!f.role) e.role = "Please select one option.";
  if (!f.topic) e.topic = "Please select a topic.";
  if (f.notes.length > 600) e.notes = "Please keep this under 600 characters.";
  return e;
}

function proofMessage(f: Form) {
  const amount = CONSULTATION.fee ?? "As confirmed with HealthBrand Studio";
  return [
    "Hi HealthBrand Studio, I've completed the Easypaisa payment for my consultation.",
    "",
    `Name: ${f.name.trim()}`,
    `Organization/Practice: ${f.org.trim()}`,
    `Consultation: ${f.topic}`,
    `Amount: ${amount}`,
    "",
    `Easypaisa payment has been sent to ${CONSULTATION.easypaisa.accountNumber}. I'll attach the payment screenshot here for verification.`,
  ].join("\n");
}

const Label = ({ children }: { children: ReactNode }) => (
  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">{children}</span>
);

const inputCls =
  "mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-base text-ink outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/15 sm:text-[15px]";

function ConsultationPage() {
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [copied, setCopied] = useState(false);
  const [proofSent, setProofSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const set = (k: keyof Form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submitDetails = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep(1);
    else document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONSULTATION.easypaisa.accountNumber);
    } catch {
      const t = document.createElement("textarea");
      t.value = CONSULTATION.easypaisa.accountNumber;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const waProof = `https://wa.me/${CONSULTATION.whatsappNumber}?text=${encodeURIComponent(proofMessage(form))}`;
  const progressIdx = step === 0 ? 0 : step === 1 ? 0 : step === 2 ? 1 : 2;

  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased overflow-x-clip">
      <header className="sticky top-0 z-50 glass-deep border-x-0 border-t-0">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between gap-3">
          <Link to="/" className="font-display text-lg tracking-tight">HealthBrand <span className="text-ink-soft">Studio</span></Link>
          <Link to="/" className="text-[13px] text-ink-soft hover:text-ink transition-colors">← Back to website</Link>
        </div>
      </header>

      <main className="max-w-[760px] mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-24 sm:pt-14">
        {/* Progress */}
        <ol className="mb-10 grid grid-cols-3 gap-2" aria-label="Booking progress">
          {["Details", "Payment", "Verification"].map((s, i) => (
            <li key={s} className="flex flex-col gap-2">
              <span className={`h-[3px] rounded-full transition-colors duration-500 ${i <= progressIdx ? "bg-emerald" : "bg-line"}`} />
              <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${i === progressIdx ? "text-emerald" : "text-ink-soft"}`}>
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div key={step} className="rise">
          {step === 0 && (
            <>
              <div className="flex items-center gap-3 mb-5"><span className="h-px w-7 bg-gold" /><Label>Consultation</Label></div>
              <h1 className="font-display text-4xl sm:text-5xl font-light leading-[1.05] tracking-tight">Book a Consultation</h1>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft max-w-xl">
                Let's discuss your healthcare brand, current digital presence and the opportunities to strengthen how you communicate online.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-[13px] text-emerald">
                <span className="size-1.5 rounded-full bg-gold" /> Consultations are confirmed after payment verification.
              </p>

              <form onSubmit={submitDetails} noValidate className="mt-10 rounded-3xl border border-line bg-card/70 p-5 sm:p-8 shadow-[0_20px_50px_-35px_color-mix(in_oklab,var(--ink)_40%,transparent)]">
                <p className="font-display text-2xl font-light mb-6">Tell us about yourself</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" err={errors.name}>
                    <input aria-invalid={!!errors.name} autoComplete="name" className={inputCls} value={form.name} onChange={(e) => set("name")(e.target.value)} maxLength={100} />
                  </Field>
                  <Field label="Phone / WhatsApp" err={errors.phone}>
                    <input aria-invalid={!!errors.phone} type="tel" inputMode="tel" autoComplete="tel" className={inputCls} value={form.phone} onChange={(e) => set("phone")(e.target.value)} maxLength={20} placeholder="+92 3xx xxx xxxx" />
                  </Field>
                  <Field label="Email" err={errors.email}>
                    <input aria-invalid={!!errors.email} type="email" autoComplete="email" className={inputCls} value={form.email} onChange={(e) => set("email")(e.target.value)} maxLength={255} />
                  </Field>
                  <Field label="Practice / Organization" err={errors.org}>
                    <input aria-invalid={!!errors.org} autoComplete="organization" className={inputCls} value={form.org} onChange={(e) => set("org")(e.target.value)} maxLength={120} />
                  </Field>
                  <Field label="I am a..." err={errors.role}>
                    <select aria-invalid={!!errors.role} className={inputCls} value={form.role} onChange={(e) => set("role")(e.target.value)}>
                      <option value="">Select one</option>
                      {ROLES.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </Field>
                  <Field label="What would you like to discuss?" err={errors.topic}>
                    <select aria-invalid={!!errors.topic} className={inputCls} value={form.topic} onChange={(e) => set("topic")(e.target.value)}>
                      <option value="">Select a topic</option>
                      {TOPICS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Tell us briefly about what you're looking for (optional)" err={errors.notes}>
                      <textarea aria-invalid={!!errors.notes} rows={3} className={`${inputCls} resize-none`} value={form.notes} onChange={(e) => set("notes")(e.target.value)} maxLength={600} />
                    </Field>
                  </div>
                </div>
                <button type="submit" className="mt-8 w-full sm:w-auto bg-emerald text-paper rounded-full px-8 py-4 text-sm font-medium hover:bg-emerald-deep">
                  Review Consultation →
                </button>
              </form>
            </>
          )}

          {step === 1 && (
            <>
              <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight">Review your consultation</h1>
              <div className="mt-8 rounded-3xl border border-line bg-card p-6 sm:p-8">
                <p className="font-display text-2xl font-light">Consultation with HealthBrand Studio</p>
                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {[
                    ["Name", form.name],
                    ["Organization", form.org],
                    ["Consultation Type", form.topic],
                    ["Consultation Fee", feeLabel()],
                    ["Payment Method", "Easypaisa"],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[180px_1fr]">
                      <dt><Label>{k}</Label></dt>
                      <dd className="text-[15px] break-words">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <button onClick={() => setStep(0)} className="rounded-full border border-ink/20 px-6 py-4 text-sm hover:border-ink">← Edit details</button>
                  <button onClick={() => setStep(2)} className="bg-emerald text-paper rounded-full px-8 py-4 text-sm font-medium hover:bg-emerald-deep">Continue to Payment →</button>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="font-display text-4xl sm:text-5xl font-light leading-[1.05] tracking-tight">Complete Your Consultation Payment</h1>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                Please complete the consultation payment using Easypaisa. Once paid, send us your payment screenshot on WhatsApp for verification.
              </p>

              <div className="mt-8 rounded-3xl bg-emerald-deep text-paper p-6 sm:p-8 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--emerald-deep)_80%,transparent)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-2xl">Easypaisa</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Manual transfer</span>
                </div>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">Account Number</dt>
                    <dd className="mt-1 font-mono text-2xl sm:text-3xl tracking-wider">{CONSULTATION.easypaisa.accountNumber}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">Account Title</dt>
                    <dd className="mt-1 text-lg">{CONSULTATION.easypaisa.accountTitle}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">Amount</dt>
                    <dd className="mt-1 text-lg">{feeLabel()}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button onClick={copy} className="rounded-full bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:bg-paper-deep">
                    Copy Account Number
                  </button>
                  <span role="status" aria-live="polite" className={`text-[13px] text-gold transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}>
                    ✓ Account number copied
                  </span>
                  {CONSULTATION.easypaisa.paymentUrl && (
                    <a href={CONSULTATION.easypaisa.paymentUrl} target="_blank" rel="noreferrer" className="rounded-full bg-gold text-ink px-6 py-3.5 text-center text-sm font-medium">
                      Pay with Easypaisa
                    </a>
                  )}
                </div>
                {CONSULTATION.easypaisa.qrImageUrl && (
                  <div className="mt-6 rounded-2xl bg-paper p-4 text-ink text-center">
                    <Label>Scan to Pay</Label>
                    <img src={CONSULTATION.easypaisa.qrImageUrl} alt="Official Easypaisa payment QR code" className="mx-auto mt-3 size-48" />
                  </div>
                )}
                <p className="mt-6 text-[12px] leading-relaxed text-paper/60">
                  Complete the transfer inside your own Easypaisa app. We will never ask for your PIN, OTP or password.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-gold/60 bg-sand/60 p-6 sm:p-8">
                <Label>Final Step</Label>
                <p className="mt-3 text-[15px] leading-relaxed">
                  After completing your Easypaisa payment, tap the button below and attach your payment screenshot in WhatsApp. We'll verify the payment before confirming your consultation.
                </p>
                <a
                  href={waProof}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => { setProofSent(true); setStep(3); }}
                  className="mt-6 block rounded-full bg-emerald text-paper px-6 py-4 text-center text-sm font-medium hover:bg-emerald-deep"
                >
                  I've Paid — Send Payment Proof on WhatsApp →
                </a>
              </div>
              <button onClick={() => setStep(1)} className="mt-6 text-[13px] text-ink-soft hover:text-ink">← Back to review</button>
            </>
          )}

          {step === 3 && (
            <>
              <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-[13px]">
                <span className="size-1.5 rounded-full bg-gold animate-pulse" /> Awaiting Payment Verification
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl font-light leading-[1.05] tracking-tight">Consultation Confirmation</h1>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                Once your payment has been verified, we'll coordinate the consultation details with you directly.
              </p>
              <ol className="mt-8 rounded-3xl border border-line bg-card p-6 sm:p-8 space-y-4 text-[15px]">
                {[
                  ["Payment Instructions Viewed", true],
                  ["Payment Proof Sent", proofSent],
                  ["Payment Verified", false],
                ].map(([t, done]) => (
                  <li key={t as string} className="flex items-center gap-3">
                    <span className={`size-5 shrink-0 rounded-full border flex items-center justify-center text-[11px] ${done ? "bg-emerald border-emerald text-paper" : "border-line text-ink-soft"}`}>{done ? "✓" : ""}</span>
                    <span className={done ? "" : "text-ink-soft"}>{t as string}{!done && " — pending, confirmed by HealthBrand Studio"}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[14px] text-ink-soft">
                WhatsApp didn't open, or forgot the screenshot?{" "}
                <a href={waProof} target="_blank" rel="noreferrer" className="text-emerald underline underline-offset-4">Open WhatsApp again</a>
                {" "}· {CONSULTATION.whatsappDisplay} ·{" "}
                <a href={`mailto:${CONSULTATION.email}`} className="text-emerald underline underline-offset-4 break-all">{CONSULTATION.email}</a>
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setStep(2)} className="rounded-full border border-ink/20 px-6 py-4 text-sm hover:border-ink">← Payment details</button>
                <Link to="/" className="rounded-full border border-ink/20 px-6 py-4 text-center text-sm hover:border-ink">Return to website</Link>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function Field({ label, err, children }: { label: string; err?: string; children: ReactNode }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      {children}
      {err && <span className="mt-1.5 block text-[13px] text-destructive">{err}</span>}
    </label>
  );
}
