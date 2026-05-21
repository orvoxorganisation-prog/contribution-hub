import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const Icon = ({ name, className, filled }: { name: string; className?: string; filled?: boolean }) => (
  <span
    className={`material-symbols-outlined ${className ?? ""}`}
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {name}
  </span>
);

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState("Join 15,000+ others in the ORVOX journey.");
  const [feedbackError, setFeedbackError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = (phoneRef.current?.value ?? "").replace(/\D/g, "");
    if (val.length < 10) {
      setFeedback("Please enter a valid 10-digit number.");
      setFeedbackError(true);
      return;
    }
    setSubmitted(true);
    setFeedback("Join 15,000+ others in the ORVOX journey.");
    setFeedbackError(false);
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 4000);
  };

  const events = [
    {
      tag: "Flagship Event",
      tagColor: "text-primary",
      iconBg: "bg-primary/10 border-primary/20",
      iconColor: "text-primary",
      hoverGlow: "hover:glow-blue",
      icon: "forum",
      title: "National Youth Debate",
      desc: "The ultimate clash of logic and eloquence. Join 500+ participants in our 3-round strategic debate tournament.",
      date: "Oct 2024",
    },
    {
      tag: "Leadership",
      tagColor: "text-tertiary",
      iconBg: "bg-tertiary/10 border-tertiary/20",
      iconColor: "text-tertiary",
      hoverGlow: "hover:glow-purple",
      icon: "leaderboard",
      title: "Global Leadership Summit",
      desc: "Connect with CEOs and policy makers. A 2-day immersive workshop focused on strategic decision making.",
      date: "Nov 2024",
    },
    {
      tag: "Workshop",
      tagColor: "text-error",
      iconBg: "bg-error/10 border-error/20",
      iconColor: "text-error",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(255,107,107,0.15)]",
      icon: "record_voice_over",
      title: "Public Speaking Pro",
      desc: "Master the art of persuasion. An intensive hands-on session led by world-class orators and TED speakers.",
      date: "Dec 2024",
    },
  ];

  return (
    <div className="dark min-h-screen flex flex-col relative">
      {/* Animated blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="blob bg-primary w-[500px] h-[500px] -top-20 -left-20" style={{ animationDuration: "25s" }} />
        <div className="blob bg-tertiary w-[400px] h-[400px] top-1/2 -right-20" style={{ animationDelay: "-5s", animationDuration: "30s" }} />
        <div className="blob bg-error w-[300px] h-[300px] bottom-10 left-1/3" style={{ animationDelay: "-10s", animationDuration: "22s", opacity: 0.2 }} />
      </div>

      {/* Nav */}
      <nav
        className={`fixed top-0 w-full z-[100] hidden md:block border-b border-white/5 transition-all duration-300 backdrop-blur-xl ${
          scrolled ? "bg-surface-dim/90 py-3" : "bg-surface/40 py-4"
        }`}
      >
        <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold tracking-tighter text-on-surface">ORVOX</div>
          <div className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wide">
            <a className="text-primary nav-link" href="#home" onClick={scrollTo("#home")}>Home</a>
            <a className="text-on-surface-variant hover:text-white transition-colors nav-link" href="#events" onClick={scrollTo("#events")}>Events</a>
            <a className="text-on-surface-variant hover:text-white transition-colors nav-link" href="#about" onClick={scrollTo("#about")}>About Us</a>
            <a className="text-on-surface-variant hover:text-white transition-colors nav-link" href="#contact" onClick={scrollTo("#contact")}>Contact</a>
          </div>
          <a
            href="#register"
            onClick={scrollTo("#register")}
            className="hidden md:flex bg-gradient-to-r from-primary/20 to-tertiary/20 border border-primary/30 text-white px-6 py-2 rounded-full font-bold hover:scale-105 hover:glow-blue shimmer transition-all duration-300 active:scale-95"
          >
            Get Involved
          </a>
        </div>
      </nav>

      <main className="flex-1 pb-24 md:pb-0 pt-20 relative z-10">
        {/* Hero */}
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="flex flex-col gap-8 text-center lg:text-left reveal">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel text-primary text-xs font-bold w-fit mx-auto lg:mx-0 uppercase tracking-widest border border-primary/20">
                <Icon name="rocket_launch" className="text-sm" filled />
                A Global Hub for Young Leaders
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none text-white">
                Empowering <br />
                <span className="vibrant-gradient">The Next Gen</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-on-surface-variant font-medium leading-relaxed">
                Diverse events. <span className="text-tertiary">Real impact.</span> Global community.
              </h2>
              <p className="text-lg text-on-surface-variant/80 max-w-xl mx-auto lg:mx-0">
                ORVOX is the premier ecosystem for students and young professionals to compete, learn, and lead through world-class events.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-4">
                <a
                  href="#events"
                  onClick={scrollTo("#events")}
                  className="bg-gradient-to-r from-primary to-tertiary text-on-primary-fixed px-10 py-5 rounded-2xl font-black text-xl hover:scale-110 hover:shadow-[0_0_40px_rgba(125,211,252,0.4)] transition-all active:scale-95 text-center flex items-center justify-center gap-3 shimmer"
                >
                  Explore Events
                  <Icon name="explore" className="font-bold" />
                </a>
                <a
                  href="#about"
                  onClick={scrollTo("#about")}
                  className="glass-panel text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:scale-105 transition-all active:scale-95 text-center border border-white/10"
                >
                  Our Mission
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:ml-auto reveal" style={{ transitionDelay: "0.2s", perspective: "1000px" }}>
              <div className="glass-elevated rounded-3xl p-10 float-anim transition-all duration-700 ease-out">
                <h3 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-6 flex items-center justify-between">
                  The Hub
                  <Icon name="hub" className="text-primary" />
                </h3>
                <div className="space-y-8">
                  {[
                    { icon: "calendar_month", color: "primary", glow: "glow-blue", title: "Monthly Events", desc: "From debates to tech hackathons." },
                    { icon: "public", color: "tertiary", glow: "glow-purple", title: "Global Reach", desc: "Connecting minds across 20+ countries." },
                    { icon: "school", color: "error", glow: "", title: "Skill Building", desc: "Mentorship from industry experts." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-5 hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-14 h-14 rounded-2xl bg-${item.color}/20 flex items-center justify-center text-${item.color} shrink-0 border border-${item.color}/30 ${item.glow}`}>
                        <Icon name={item.icon} className="text-3xl" filled />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 reveal">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                Upcoming <span className="vibrant-gradient">Experiences</span>
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-xl font-medium">
                Choose your arena and prove your potential.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((ev, i) => (
                <div
                  key={ev.title}
                  className={`glass-panel rounded-[2.5rem] p-8 flex flex-col ${ev.hoverGlow} transition-all duration-500 hover-tilt reveal`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-full h-48 rounded-3xl mb-8 flex items-center justify-center border ${ev.iconBg}`}>
                    <Icon name={ev.icon} className={`text-7xl ${ev.iconColor}`} filled />
                  </div>
                  <div className="px-2">
                    <span className={`${ev.tagColor} text-xs font-black uppercase tracking-[0.2em] mb-2 block`}>{ev.tag}</span>
                    <h3 className="text-3xl font-black text-white mb-4">{ev.title}</h3>
                    <p className="text-on-surface-variant mb-8 line-clamp-3">{ev.desc}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-white/60 font-bold flex items-center gap-2">
                        <Icon name="schedule" className="text-sm" /> {ev.date}
                      </span>
                      <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
                        Learn More <Icon name="open_in_new" className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto reveal">
            <div className="glass-panel rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                    Our <span className="text-primary">DNA</span>
                  </h2>
                  <p className="text-xl text-on-surface-variant leading-relaxed mb-8 font-medium">
                    ORVOX was founded on a simple belief: the world's biggest challenges will be solved by the youth, provided they have the right platform to refine their voices.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: "verified", color: "text-primary", label: "Meritocratic Competition Excellence" },
                      { icon: "diversity_3", color: "text-tertiary", label: "Inclusive Global Networking" },
                      { icon: "lightbulb", color: "text-error", label: "Practical Leadership Development" },
                    ].map((v) => (
                      <div key={v.label} className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${v.color} border border-white/10`}>
                          <Icon name={v.icon} />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">{v.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="glass-elevated rounded-3xl p-8 float-anim">
                    <div className="text-center">
                      <div className="text-5xl font-black vibrant-gradient mb-2">15k+</div>
                      <div className="text-white font-bold uppercase tracking-widest text-sm">Active Members</div>
                    </div>
                    <div className="h-px bg-white/10 my-8" />
                    <div className="text-center">
                      <div className="text-5xl font-black vibrant-gradient mb-2">50+</div>
                      <div className="text-white font-bold uppercase tracking-widest text-sm">Annual Events</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section id="register" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto reveal">
            <div
              className="rounded-[3rem] p-1 shadow-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(125,211,252,0.3), rgba(200,160,240,0.3))" }}
            >
              <div className="bg-surface-container-high rounded-[2.8rem] p-10 md:p-16">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                    Join the <span className="text-primary">Ecosystem</span>
                  </h2>
                  <p className="text-on-surface-variant text-xl max-w-xl mx-auto">
                    Register for a specific event or join our general mailing list to stay updated on new opportunities.
                  </p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <Field label="Full Name">
                      <input required type="text" placeholder="e.g., Alex Johnson" className={inputCls} />
                    </Field>
                    <Field label="Email Address">
                      <input required type="email" placeholder="alex@example.com" className={inputCls} />
                    </Field>
                    <Field label="Phone Number">
                      <input
                        ref={phoneRef}
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        onInput={() => { setFeedback("Join 15,000+ others in the ORVOX journey."); setFeedbackError(false); }}
                        className={`${inputCls} ${feedbackError ? "border-error ring-2 ring-error/20" : ""}`}
                      />
                    </Field>
                    <Field label="I am a...">
                      <select required defaultValue="" className={`${inputCls} appearance-none`}>
                        <option className="bg-surface" disabled value="">Select Status</option>
                        <option className="bg-surface" value="student">High School Student</option>
                        <option className="bg-surface" value="college">University Student</option>
                        <option className="bg-surface" value="professional">Early Professional</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Interested Event">
                    <select required defaultValue="general" className={`${inputCls} text-lg font-bold appearance-none`}>
                      <option className="bg-surface" value="general">General Interest (Stay Updated)</option>
                      <option className="bg-surface" value="debate">National Youth Debate 2024</option>
                      <option className="bg-surface" value="summit">Global Leadership Summit</option>
                      <option className="bg-surface" value="workshop">Public Speaking Workshop</option>
                    </select>
                  </Field>
                  <div className="pt-6">
                    <button
                      type="submit"
                      className={`w-full bg-gradient-to-r from-primary to-tertiary text-on-primary-fixed py-6 rounded-2xl font-black text-2xl hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(125,211,252,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 shimmer ${
                        submitted ? "brightness-125 scale-105" : ""
                      }`}
                    >
                      {submitted ? (
                        <><Icon name="check_circle" /> Application Received!</>
                      ) : (
                        <>Complete Registration <Icon name="arrow_forward" className="font-black" /></>
                      )}
                    </button>
                  </div>
                </form>
                <p className={`text-center mt-8 text-sm font-medium ${feedbackError ? "text-error" : "text-on-surface-variant/60"}`}>
                  {feedback}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full bg-black/40 border-t border-white/5 pb-24 md:pb-12 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col gap-6 reveal">
            <div className="text-3xl font-black text-white tracking-tighter">ORVOX</div>
            <p className="text-on-surface-variant text-lg font-medium leading-relaxed">
              The global multi-event platform empowering the next generation of thinkers, speakers, and leaders.
            </p>
          </div>
          <div className="flex flex-col gap-6 reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="font-black text-white text-lg uppercase tracking-widest">Explore</div>
            <div className="flex flex-col gap-4">
              <a className="text-on-surface-variant hover:text-primary transition-colors font-medium w-fit" href="#home" onClick={scrollTo("#home")}>Home</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-medium w-fit" href="#events" onClick={scrollTo("#events")}>Events</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-medium w-fit" href="#about" onClick={scrollTo("#about")}>About Us</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-medium w-fit" href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:items-end reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="font-black text-white text-lg uppercase tracking-widest">Connect</div>
            <div className="flex gap-4">
              <a className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-on-primary-fixed hover:scale-110 transition-all border border-white/10" href="#" aria-label="Email">
                <Icon name="mail" />
              </a>
              <a className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-tertiary hover:text-on-primary-fixed hover:scale-110 transition-all border border-white/10" href="#" aria-label="Instagram">
                <Icon name="camera" />
              </a>
            </div>
            <div className="mt-8 text-on-surface-variant/60 font-bold tracking-widest text-xs uppercase text-right">
              © 2024 ORVOX Platform. <br />All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 w-full md:hidden z-50 p-6 bg-gradient-to-t from-black to-transparent">
        <a
          href="#register"
          onClick={scrollTo("#register")}
          className="flex items-center justify-center bg-gradient-to-r from-primary to-tertiary text-on-primary-fixed rounded-2xl w-full py-5 shadow-2xl font-black uppercase tracking-widest text-sm active:scale-95 transition-transform gap-3"
        >
          <Icon name="hub" />
          Join ORVOX
        </a>
      </div>
    </div>
  );
}

const inputCls =
  "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all outline-none placeholder-white/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <label className="text-xs font-black text-white uppercase tracking-widest ml-1 block">{label}</label>
      {children}
    </div>
  );
}
