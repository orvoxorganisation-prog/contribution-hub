import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import orvoxLogo from "@/assets/orvox-logo.png";
import {
  ArrowUpRight,
  Mic,
  Brain,
  Compass,
  Sparkles,
  Calendar,
  Users,
  Award,
  Check,
  Menu as MenuIcon,
  X,
  Mail,
  Phone,
  Camera as Instagram,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORVOX Youth Forum — Speak. Think. Lead." },
      {
        name: "description",
        content:
          "ORVOX Youth Forum is a student-led platform helping young people speak better, think sharper, and lead with confidence through debates and public speaking events.",
      },
      { property: "og:title", content: "ORVOX Youth Forum — Speak. Think. Lead." },
      {
        property: "og:description",
        content: "By the students, for the students — built to speak, think, and lead.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-ink">
      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#home" onClick={scrollTo("#home")} className="flex items-center gap-2">
            <img src={orvoxLogo} alt="ORVOX" className="w-8 h-8 rounded-md object-cover" />
            <span className="font-semibold tracking-tight text-lg">ORVOX</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-line bg-surface/70 backdrop-blur px-2 py-1.5 text-sm">
            {[
              ["About", "#about"],
              ["Values", "#values"],
              ["Events", "#events"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={scrollTo(href)}
                className="px-4 py-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQ9GRrQmJaR9t4UAGbS6PjwFYDp97jlCQOYkJmSbNAukUHtg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-cta text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition-opacity"
            >
              Register
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="md:hidden w-10 h-10 rounded-full border border-line bg-surface flex items-center justify-center"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-line bg-background">
            <div className="px-6 py-6 flex flex-col gap-1">
              {[
                ["About", "#about"],
                ["Values", "#values"],
                ["Events", "#events"],
                ["Contact", "#contact"],
                ["Register", "#register"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={scrollTo(href)}
                  className="flex items-center justify-between py-3 text-lg font-medium border-b border-line"
                >
                  {label}
                  <ArrowUpRight className="w-5 h-5 text-ink-muted" />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">
        <Hero />
        <Marquee />
        <About />
        <Values />
        <Events />
        <Register />
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-10">
          <span className="inline-block w-8 h-px bg-ink-subtle" />
          Organisation for Vocal Oratory and eXpression
        </div>

        <h1 className="reveal font-medium tracking-[-0.04em] leading-[0.92] text-[clamp(2.75rem,9vw,8rem)]">
          Speak better.
          <br />
          Think sharper.
          <br />
          <span className="font-display font-normal text-gradient">Lead with confidence.</span>
        </h1>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <p className="reveal md:col-span-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
            ORVOX Youth Forum is a student-led platform that helps students speak better, think
            sharper, and lead with confidence through debates, public speaking, and
            communication-focused experiences.
          </p>

          <div className="reveal md:col-span-6 md:col-start-7 flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQ9GRrQmJaR9t4UAGbS6PjwFYDp97jlCQOYkJmSbNAukUHtg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-gradient-cta text-accent-foreground pl-6 pr-2 py-2 text-base font-semibold hover:opacity-95 transition-opacity shadow-glow"
            >
              Register
              <span className="w-10 h-10 rounded-full bg-ink text-background flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface/60 backdrop-blur px-6 py-3 text-base font-semibold hover:bg-surface transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="reveal mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {[
            { k: "Student-led", v: "Built by students, for students" },
            { k: "Debate", v: "Grade 5 – 9 competitions" },
            { k: "Networking", v: "Confidence & personal brand" },
            { k: "Forum", v: "Speak. Think. Lead." },
          ].map((s) => (
            <div key={s.k} className="bg-background p-5 md:p-6">
              <div className="text-xs uppercase tracking-widest text-ink-subtle">{s.k}</div>
              <div className="mt-2 text-sm md:text-base font-medium text-ink leading-snug">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "By the students",
    "For the students",
    "Speak with purpose",
    "Think with clarity",
    "Lead with confidence",
    "Vocal • Oratory • eXpression",
  ];
  const row = [...items, ...items];
  return (
    <section aria-hidden className="border-y border-line bg-surface-muted overflow-hidden">
      <div className="marquee py-6">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-16 text-xl md:text-2xl font-medium text-ink">
            <span>{t}</span>
            <Sparkles className="w-4 h-4 text-ink-subtle" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, var(--grad-1) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--grad-3) 0%, transparent 65%)" }}
      />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-4 reveal">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1]">
            A forum <span className="font-display font-normal text-gradient">by the students</span>, for the
            students.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6 reveal space-y-8">
          <p className="text-xl md:text-2xl text-ink leading-relaxed font-medium tracking-[-0.01em]">
            ORVOX exists to give students a platform to express themselves, build confidence,
            improve communication, develop critical thinking, and grow as young leaders.
          </p>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
            Whether you're stepping onto a stage for the first time or sharpening an argument
            you've rehearsed for weeks, ORVOX is the space to practice, compete, and connect with
            students who care about the same things you do.
          </p>

          <div className="pt-6 grid grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
            <Stat number="100%" label="Student-led" />
            <Stat number="Gr 5–9" label="Open audience" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-background/70 backdrop-blur p-6 md:p-8">
      <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em] text-gradient">{number}</div>
      <div className="mt-1 text-sm text-ink-muted">{label}</div>
    </div>
  );
}

/* ---------------- VALUES ---------------- */
function Values() {
  const values = [
    {
      icon: Mic,
      title: "Clear Expression",
      desc: "We help students speak with confidence, structure, and purpose.",
      tint: "var(--grad-1)",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      desc: "We encourage young minds to question, analyze, and defend ideas logically.",
      tint: "var(--grad-2)",
    },
    {
      icon: Compass,
      title: "Youth Leadership",
      desc: "We create opportunities for students to lead, organize, and grow beyond the stage.",
      tint: "var(--grad-3)",
    },
  ];

  return (
    <section id="values" className="relative px-6 md:px-10 py-24 md:py-36 bg-surface border-y border-line overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] rounded-full blur-3xl opacity-20"
        style={{ background: "conic-gradient(from 180deg, var(--grad-1), var(--grad-2), var(--grad-3), var(--grad-1))" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>What we stand for</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1] max-w-2xl">
              Three principles that shape{" "}
              <span className="font-display font-normal text-gradient">everything</span> we do.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="reveal group relative bg-background rounded-2xl border border-line p-8 md:p-10 hover:border-line-strong transition-all flex flex-col overflow-hidden"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle, ${v.tint} 0%, transparent 65%)` }}
                />
                <div className="relative flex items-center justify-between mb-12">
                  <span className="text-xs font-medium tabular-nums text-ink-subtle">
                    0{i + 1}
                  </span>
                  <div
                    className="w-12 h-12 rounded-full border border-line-strong flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, color-mix(in oklab, ${v.tint} 35%, transparent), color-mix(in oklab, ${v.tint} 10%, transparent))`,
                      color: v.tint,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="relative text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-3">
                  {v.title}
                </h3>
                <p className="relative text-ink-muted leading-relaxed">{v.desc}</p>
                <div
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-px opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${v.tint}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
function Events() {
  return (
    <section id="events" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Events</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1] max-w-2xl">
              Where students go from{" "}
              <span className="font-display font-normal text-gradient">nervous</span> to known.
            </h2>
          </div>
          <p className="text-ink-muted max-w-sm md:text-right">
            One active competition. One on the horizon. Both designed to push you forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Event 1: Active */}
          <EventCard
            status="active"
            statusLabel="Free Registration"
            title="Debate Competition"
            audience="For students between grade 5 to 9"
            icon={<Award className="w-6 h-6" />}
            details={[
              "Debate format: 1v1 or team-based rounds",
              "Certificate for all participants",
              "Debate topics shared on event day",
            ]}
            cta={
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeQ9GRrQmJaR9t4UAGbS6PjwFYDp97jlCQOYkJmSbNAukUHtg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-ink text-foreground pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:opacity-95 transition-opacity w-full sm:w-auto"
              >
                Register
                <span className="w-9 h-9 rounded-full bg-gradient-cta text-accent-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            }
          />

          {/* Event 2: Coming Soon */}
          <EventCard
            status="soon"
            statusLabel="Coming Soon"
            badge="Most Popular"
            title="Networking Event"
            audience="For building confidence and personal brand"
            icon={<Users className="w-6 h-6" />}
            details={[
              "Meet like-minded students",
              "Practice personal branding",
              "Connect with future speakers and leaders",
              "Build confidence in conversations",
            ]}
            cta={
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface-muted px-5 py-3 text-sm font-semibold text-ink-muted cursor-not-allowed w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                Coming Soon
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({
  status,
  statusLabel,
  badge,
  title,
  audience,
  details,
  cta,
  icon,
}: {
  status: "active" | "soon";
  statusLabel: string;
  badge?: string;
  title: string;
  audience: string;
  details: string[];
  cta: ReactNode;
  icon: ReactNode;
}) {
  return (
    <article
      className={`reveal relative rounded-3xl border p-8 md:p-10 flex flex-col gap-8 overflow-hidden ${
        status === "active"
          ? "text-background border-transparent shadow-glow"
          : "bg-surface text-ink border-line"
      }`}
      style={
        status === "active"
          ? {
              backgroundImage:
                "linear-gradient(135deg, var(--grad-1) 0%, var(--grad-2) 55%, var(--grad-3) 100%)",
            }
          : undefined
      }
    >
      {status === "soon" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, var(--grad-2) 0%, transparent 65%)" }}
        />
      )}
      {badge && (
        <span className="absolute -top-3 right-8 inline-flex items-center gap-1.5 rounded-full bg-ink text-background px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-card">
          <Sparkles className="w-3 h-3 text-accent" />
          {badge}
        </span>
      )}

      <header className="relative flex items-start justify-between gap-4">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
            status === "active"
              ? "bg-background/15 text-background backdrop-blur"
              : "bg-gradient-cta text-accent-foreground"
          }`}
        >
          {icon}
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
            status === "active"
              ? "bg-accent text-accent-foreground"
              : "bg-surface-muted text-ink-muted border border-line"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              status === "active" ? "bg-ink animate-pulse" : "bg-ink-subtle"
            }`}
          />
          {statusLabel}
        </span>
      </header>

      <div>
        <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-[1.05]">
          {title}
        </h3>
        <p
          className={`mt-3 text-sm md:text-base ${
            status === "active" ? "text-background/60" : "text-ink-muted"
          }`}
        >
          {audience}
        </p>
      </div>

      <ul className="space-y-3">
        {details.map((d) => (
          <li key={d} className="flex items-start gap-3 text-sm md:text-base">
            <span
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                status === "active"
                  ? "bg-background/10 text-background"
                  : "bg-surface-muted text-ink"
              }`}
            >
              <Check className="w-3 h-3" />
            </span>
            <span className={status === "active" ? "text-background/85" : "text-ink"}>{d}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-2">{cta}</div>
    </article>
  );
}

/* ---------------- REGISTER ---------------- */
function Register() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeQ9GRrQmJaR9t4UAGbS6PjwFYDp97jlCQOYkJmSbNAukUHtg/viewform";
  return (
    <section
      id="register"
      className="px-6 md:px-10 py-24 md:py-36 bg-surface/40 border-y border-line"
    >
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-12 md:mb-16">
          <SectionLabel className="justify-center">Register</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1]">
            Step up. <span className="font-display font-normal text-gradient">Take the mic.</span>
          </h2>
          <p className="mt-5 text-ink-muted max-w-xl mx-auto">
            Registrations happen through our official Google Form. It takes less than two minutes —
            we'll be in touch with event details right after.
          </p>
        </div>

        <div className="reveal relative rounded-3xl border border-line bg-surface/70 backdrop-blur p-8 md:p-12 shadow-soft overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-60 bg-gradient-cta blur-3xl scale-110" />
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Free registration open
            </span>
            <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] max-w-xl">
              Join the ORVOX <span className="font-display font-normal">Debate Competition</span>
            </h3>
            <p className="text-ink-muted max-w-md">
              For students between grade 5 to 9. Fill out the registration form to lock your spot.
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-gradient-cta text-accent-foreground pl-7 pr-2 py-2 text-base font-semibold hover:opacity-95 transition-opacity shadow-glow"
            >
              Open Google Form
              <span className="w-10 h-10 rounded-full bg-ink text-background flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <p className="text-xs text-ink-subtle">
              Having trouble? Email us at{" "}
              <a
                href="mailto:orvoxorganisation@gmail.com"
                className="link-underline text-ink-muted hover:text-ink"
              >
                orvoxorganisation@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer id="contact" className="bg-ink text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <SectionLabel className="text-background/60">Contact</SectionLabel>
            <h2 className="mt-6 font-medium tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
              Let's talk.
              <br />
              <span className="font-display font-normal text-accent">Let's build the forum.</span>
            </h2>
            <p className="mt-8 text-background/70 max-w-md leading-relaxed">
              Have a question about an event, want to volunteer, or partner with ORVOX? Reach out —
              we read everything.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="mailto:orvoxorganisation@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-background text-ink px-5 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                orvoxorganisation@gmail.com
              </a>
              <a
                href="https://instagram.com/orvox_org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-background/20 px-5 py-3 text-sm font-semibold hover:bg-background/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @orvox_org
              </a>
              <a
                href="tel:+918106997152"
                className="inline-flex items-center gap-3 rounded-full border border-background/20 px-5 py-3 text-sm font-semibold hover:bg-background/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 81069 97152
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-9 grid grid-cols-2 gap-8 md:gap-12 text-sm">
            <div>
              <div className="text-background/50 uppercase tracking-widest text-xs mb-4">
                Explore
              </div>
              <ul className="space-y-3">
                {[
                  ["About", "#about"],
                  ["Values", "#values"],
                  ["Events", "#events"],
                  ["Register", "#register"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <a
                      href={h}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="link-underline hover:text-accent transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-background/50 uppercase tracking-widest text-xs mb-4">
                Forum
              </div>
              <ul className="space-y-3 text-background/80">
                <li>Debate Competition</li>
                <li>Networking Event</li>
                <li>Public Speaking</li>
                <li>Youth Leadership</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-background/50">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-background/10 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            <span>© {new Date().getFullYear()} ORVOX Youth Forum. All rights reserved.</span>
          </div>
          <div className="uppercase tracking-widest">By the students. For the students.</div>
        </div>

        {/* Wordmark */}
        <div className="mt-16 -mb-6 md:-mb-10 overflow-hidden">
          <div className="font-display italic text-background/10 tracking-[-0.04em] leading-none text-[clamp(5rem,18vw,16rem)] text-center select-none">
            ORVOX
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-muted ${className}`}
    >
      <span className="inline-block w-6 h-px bg-ink-subtle" />
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-surface border border-line rounded-2xl px-5 py-4 text-ink placeholder:text-ink-subtle focus:border-ink focus:ring-2 focus:ring-ink/10 transition-all outline-none";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted ml-1">
        {label}
      </span>
      {children}
    </label>
  );
}
