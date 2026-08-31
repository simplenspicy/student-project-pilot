import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Bot,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDashed,
  Clock3,
  Compass,
  Database,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Upload,
  Users,
  X,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProjectForge | From idea to working project" },
      { name: "description", content: "ProjectForge turns student project ideas into documented, explainable and deployable software." },
      { property: "og:title", content: "ProjectForge | From idea to working project" },
      { property: "og:description", content: "Build, understand and demonstrate your next student project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectForge,
});

type WorkspaceView = "Overview" | "My projects" | "Project catalog" | "Messages";

const navItems: { label: WorkspaceView; icon: typeof LayoutDashboard }[] = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My projects", icon: FolderKanban },
  { label: "Project catalog", icon: Compass },
  { label: "Messages", icon: MessageSquare },
];

const technologies = ["Python", "React", "Java", "AI / ML", "Django", "Flutter", "Node.js", "Other"];

function ProjectForge() {
  const [activeView, setActiveView] = useState<WorkspaceView>("Overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [need, setNeed] = useState("Build a new project");
  const [year, setYear] = useState("3rd year");
  const [technology, setTechnology] = useState("AI / ML");
  const [description, setDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalysis, setHasAnalysis] = useState(false);

  const analyzeIdea = () => {
    if (description.trim().length < 12 || isAnalyzing) return;
    setIsAnalyzing(true);
    window.setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalysis(true);
    }, 950);
  };

  const openView = (view: WorkspaceView) => {
    setActiveView(view);
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-40 flex w-[244px] flex-col bg-ink text-ink-foreground transition-transform duration-300 lg:sticky lg:translate-x-0 ${mobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex h-[76px] items-center justify-between border-b border-ink-foreground/10 px-6">
            <button className="flex cursor-pointer items-center gap-3 text-left" onClick={() => openView("Overview")} aria-label="Go to ProjectForge overview">
              <span className="grid size-8 place-items-center rounded-lg bg-signal text-signal-foreground shadow-[0_0_0_5px_color-mix(in_oklch,var(--color-signal)_18%,transparent)]">
                <Boxes className="size-[18px]" strokeWidth={2.5} />
              </span>
              <span className="text-[17px] font-extrabold tracking-[-0.04em]">ProjectForge</span>
            </button>
            <Button variant="ghost" size="icon" className="text-ink-foreground/60 hover:bg-ink-foreground/10 hover:text-ink-foreground lg:hidden" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation">
              <X />
            </Button>
          </div>

          <div className="flex-1 px-3 py-7">
            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-foreground/35">Workspace</p>
            <nav className="mt-3 space-y-1">
              {navItems.map(({ label, icon: Icon }) => (
                <Button key={label} variant="ghost" onClick={() => openView(label)} className={`h-11 w-full justify-start gap-3 rounded-lg px-3 text-[13px] font-semibold ${activeView === label ? "bg-ink-foreground/10 text-ink-foreground shadow-sm" : "text-ink-foreground/55 hover:bg-ink-foreground/7 hover:text-ink-foreground"}`}>
                  <Icon className={`size-[17px] ${activeView === label ? "text-signal" : ""}`} />
                  {label}
                  {label === "Messages" && <span className="ml-auto grid size-5 place-items-center rounded-full bg-signal text-[10px] font-bold text-signal-foreground">2</span>}
                </Button>
              ))}
            </nav>

            <p className="mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-foreground/35">Resources</p>
            <nav className="mt-3 space-y-1">
              <Button variant="ghost" className="h-11 w-full justify-start gap-3 rounded-lg px-3 text-[13px] font-semibold text-ink-foreground/55 hover:bg-ink-foreground/7 hover:text-ink-foreground"><BookOpen className="size-[17px]" />Project guides</Button>
              <Button variant="ghost" className="h-11 w-full justify-start gap-3 rounded-lg px-3 text-[13px] font-semibold text-ink-foreground/55 hover:bg-ink-foreground/7 hover:text-ink-foreground"><Zap className="size-[17px]" />Viva practice</Button>
            </nav>
          </div>

          <div className="border-t border-ink-foreground/10 p-4">
            <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-ink-foreground/7">
              <div className="grid size-9 place-items-center rounded-full bg-mint font-bold text-mint-foreground">RS</div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold">Rahul Sharma</p>
                <p className="truncate text-[11px] text-ink-foreground/45">rahul@projectforge.in</p>
              </div>
              <Button variant="ghost" size="icon" className="size-8 text-ink-foreground/45 hover:bg-ink-foreground/10 hover:text-ink-foreground" aria-label="Open account settings"><Settings2 /></Button>
            </div>
          </div>
        </aside>

        {mobileNavOpen && <button className="fixed inset-0 z-30 bg-ink/50 lg:hidden" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation overlay" />}

        <main className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-line bg-surface/80 px-5 backdrop-blur sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground lg:hidden" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation"><Menu /></Button>
              <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex"><span>Workspace</span><span className="text-line">/</span><span className="font-semibold text-foreground">{activeView}</span></div>
              <span className="font-mono text-[11px] text-muted-foreground sm:hidden">PF / {activeView}</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden border-line bg-surface font-semibold text-foreground sm:inline-flex"><Search className="size-3.5" />Search</Button>
              <Button variant="ghost" size="icon" className="relative text-muted-foreground" aria-label="View notifications"><Bell /><span className="absolute right-2 top-1.5 size-1.5 rounded-full bg-signal" /></Button>
              <Button size="sm" className="bg-ink text-ink-foreground hover:bg-ink/90" onClick={() => openView("Overview")}><Plus className="size-3.5" /><span className="hidden sm:inline">New project</span></Button>
            </div>
          </header>

          <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            {activeView === "Overview" && <Overview description={description} setDescription={setDescription} need={need} setNeed={setNeed} year={year} setYear={setYear} technology={technology} setTechnology={setTechnology} isAnalyzing={isAnalyzing} hasAnalysis={hasAnalysis} analyzeIdea={analyzeIdea} />}
            {activeView === "My projects" && <ProjectsView openOverview={() => openView("Overview")} />}
            {activeView === "Project catalog" && <CatalogView openOverview={() => openView("Overview")} />}
            {activeView === "Messages" && <MessagesView />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Overview({ description, setDescription, need, setNeed, year, setYear, technology, setTechnology, isAnalyzing, hasAnalysis, analyzeIdea }: { description: string; setDescription: (value: string) => void; need: string; setNeed: (value: string) => void; year: string; setYear: (value: string) => void; technology: string; setTechnology: (value: string) => void; isAnalyzing: boolean; hasAnalysis: boolean; analyzeIdea: () => void }) {
  return (
    <>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2"><span className="size-2 rounded-full bg-mint" /><span className="font-mono text-[11px] uppercase tracking-[0.13em] text-muted-foreground">Tuesday, September 1, 2026</span></div>
          <h1 className="text-balance text-3xl font-extrabold tracking-[-0.06em] text-ink sm:text-4xl">Good morning, Rahul<span className="text-signal">.</span></h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Ready to turn an idea into something you can build, understand and proudly demonstrate?</p>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground"><ShieldCheck className="size-4 text-mint-foreground" /> Your projects, your progress, your proof.</div>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard label="Active projects" value="02" detail="1 needs your review" icon={<FolderKanban />} tone="signal" />
        <StatCard label="Overall progress" value="68%" detail="Across all projects" icon={<CircleDashed />} tone="mint" />
        <StatCard label="Pending balance" value="₹4,000" detail="Due on final delivery" icon={<Clock3 />} tone="sun" />
      </section>

      <section className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(370px,0.65fr)]">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_15px_45px_color-mix(in_oklch,var(--color-ink)_7%,transparent)]">
          <div className="border-b border-line bg-surface-alt/50 px-6 py-5 sm:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div><div className="flex items-center gap-2"><Sparkles className="size-4 text-signal" /><span className="font-mono text-[10px] font-medium uppercase tracking-[0.17em] text-muted-foreground">Project builder / 01</span></div><h2 className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-ink">Start with your idea</h2><p className="mt-1 text-sm text-muted-foreground">Tell us what you want to build. We’ll help shape the scope.</p></div>
              <Badge variant="outline" className="w-fit border-signal/30 bg-signal/10 text-signal-foreground">Free analysis</Badge>
            </div>
          </div>

          <div className="space-y-7 px-6 py-7 sm:px-8">
            <BuilderField label="What are you looking for?">
              <div className="grid gap-2 sm:grid-cols-3">
                {["Build a new project", "Fix my project", "Add features"].map((item) => <ChoiceButton key={item} active={need === item} onClick={() => setNeed(item)}>{item}</ChoiceButton>)}
              </div>
            </BuilderField>
            <div className="grid gap-7 sm:grid-cols-2">
              <BuilderField label="Academic level"><SelectLike value={year} options={["1st year", "2nd year", "3rd year", "4th year", "MCA"]} onChange={setYear} /></BuilderField>
              <BuilderField label="Primary technology"><SelectLike value={technology} options={technologies} onChange={setTechnology} /></BuilderField>
            </div>
            <BuilderField label="Describe your project" hint="Be as rough as you like — we’ll structure it.">
              <Textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="e.g. I want to build an app where farmers can upload crop images and detect diseases..." className="min-h-[126px] resize-none border-line bg-canvas/45 text-sm leading-6 shadow-none focus-visible:ring-signal" />
              <div className="mt-2 flex items-center justify-between"><span className="text-[11px] text-muted-foreground">{description.length}/500 characters</span><Button variant="ghost" size="sm" className="h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground"><Upload className="size-3.5" />Attach brief</Button></div>
            </BuilderField>
            <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 text-xs text-muted-foreground"><Bot className="size-4 text-signal" /> Get modules, tech stack and an estimate.</div><Button onClick={analyzeIdea} disabled={description.trim().length < 12 || isAnalyzing} className="h-11 bg-signal px-5 font-bold text-signal-foreground shadow-[0_7px_18px_color-mix(in_oklch,var(--color-signal)_25%,transparent)] hover:bg-signal/90">{isAnalyzing ? <><Sparkles className="size-4 animate-pulse" />Analyzing idea...</> : <>Analyze my idea <ArrowRight className="size-4" /></>}</Button></div>
          </div>
        </div>

        <AnalysisPanel isAnalyzing={isAnalyzing} hasAnalysis={hasAnalysis} technology={technology} />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(370px,0.55fr)]">
        <ProjectProgressCard />
        <CatalogTeaser />
      </section>
    </>
  );
}

function StatCard({ label, value, detail, icon, tone }: { label: string; value: string; detail: string; icon: React.ReactNode; tone: "signal" | "mint" | "sun" }) {
  const toneClass = { signal: "bg-signal/12 text-signal-foreground", mint: "bg-mint/18 text-mint-foreground", sun: "bg-sun/25 text-sun-foreground" }[tone];
  return <div className="rounded-xl border border-line bg-surface p-5"><div className="flex items-start justify-between"><p className="text-xs font-semibold text-muted-foreground">{label}</p><span className={`grid size-8 place-items-center rounded-lg ${toneClass}`}>{icon}</span></div><div className="mt-4 flex items-baseline gap-3"><p className="font-mono text-2xl font-medium tracking-[-0.06em] text-ink">{value}</p><span className="text-[11px] text-muted-foreground">{detail}</span></div></div>;
}

function BuilderField({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return <div><div className="mb-2.5 flex items-baseline justify-between gap-3"><label className="text-xs font-bold text-ink">{label}</label>{hint && <span className="text-[11px] text-muted-foreground">{hint}</span>}</div>{children}</div>;
}

function ChoiceButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <Button type="button" variant="outline" onClick={onClick} className={`h-10 justify-start border-line px-3 text-xs font-semibold shadow-none ${active ? "border-signal bg-signal/10 text-signal-foreground ring-1 ring-signal" : "bg-surface text-muted-foreground hover:border-foreground/30 hover:bg-canvas"}`}><span className={`grid size-4 place-items-center rounded-full border ${active ? "border-signal bg-signal text-signal-foreground" : "border-line"}`}>{active && <Check className="size-2.5" strokeWidth={3} />}</span>{children}</Button>;
}

function SelectLike({ value, options, onChange }: { value: string; options: string[]; onChange: (value: string) => void }) {
  return <div className="relative"><select value={value} onChange={(event) => onChange(event.target.value)} className="h-10 w-full appearance-none rounded-md border border-line bg-canvas/45 px-3 pr-9 text-xs font-semibold text-foreground outline-none transition-colors focus:border-signal focus:ring-1 focus:ring-signal">{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-3 size-4 text-muted-foreground" /></div>;
}

function AnalysisPanel({ isAnalyzing, hasAnalysis, technology }: { isAnalyzing: boolean; hasAnalysis: boolean; technology: string }) {
  return <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-ink-foreground shadow-[0_15px_45px_color-mix(in_oklch,var(--color-ink)_18%,transparent)] sm:p-7"><div className="absolute right-0 top-0 size-36 rounded-full bg-signal/10 blur-3xl" /><div className="relative"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-md bg-ink-foreground/10"><Sparkles className="size-3.5 text-signal" /></span><span className="font-mono text-[10px] uppercase tracking-[0.17em] text-ink-foreground/50">Forge intelligence</span></div><span className="font-mono text-[10px] text-ink-foreground/40">v0.1</span></div>{isAnalyzing ? <div className="flex min-h-[375px] flex-col items-center justify-center text-center"><div className="mb-6 grid size-16 place-items-center rounded-2xl border border-signal/40 bg-signal/10"><Sparkles className="size-7 animate-pulse text-signal" /></div><h3 className="text-lg font-bold">Reading your idea<span className="text-signal">...</span></h3><p className="mt-2 max-w-[250px] text-xs leading-5 text-ink-foreground/50">Finding the right scope, modules and technology for your project.</p><div className="mt-7 w-full max-w-[230px] space-y-3"><LoadingLine label="Understanding requirements" /><LoadingLine label="Mapping project modules" /><LoadingLine label="Preparing estimate" /></div></div> : hasAnalysis ? <div className="animate-in fade-in slide-in-from-bottom-2 duration-500"><p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-mint">Analysis ready</p><h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.05em]">AI-powered crop<br />disease detection</h3><p className="mt-3 text-xs leading-5 text-ink-foreground/55">A practical build for farmers to identify crop disease from an uploaded image and get a next-step recommendation.</p><div className="mt-7 grid grid-cols-2 gap-2"><MiniInsight icon={<Boxes />} label="Modules" value="08 identified" /><MiniInsight icon={<Terminal />} label="Stack" value={technology} /><MiniInsight icon={<Clock3 />} label="Effort" value="35–45 hours" /><MiniInsight icon={<Zap />} label="Complexity" value="Advanced" /></div><div className="mt-5 border-t border-ink-foreground/10 pt-5"><div className="flex items-end justify-between"><span className="text-xs text-ink-foreground/50">Estimated project range</span><span className="font-mono text-xl text-signal">₹7k–₹10k</span></div><Button className="mt-5 h-11 w-full bg-ink-foreground text-ink hover:bg-ink-foreground/90" onClick={() => window.alert("Your analysis is ready to review.")}>Review full analysis <ArrowUpRight className="size-4" /></Button></div></div> : <div className="flex min-h-[375px] flex-col justify-end"><div className="mb-auto pt-16"><div className="surface-grid grid aspect-square max-w-[250px] place-items-center rounded-full border border-ink-foreground/10 bg-ink-foreground/[0.03]"><div className="grid size-20 place-items-center rounded-2xl border border-signal/30 bg-signal/10 shadow-[0_0_45px_color-mix(in_oklch,var(--color-signal)_15%,transparent)]"><Bot className="size-9 text-signal" /></div></div></div><h3 className="text-xl font-extrabold tracking-[-0.04em]">Your project,<br />with a clearer next step.</h3><p className="mt-3 max-w-[290px] text-xs leading-5 text-ink-foreground/50">Describe an idea to reveal a suggested scope, stack, effort and transparent price range.</p><div className="mt-7 flex items-center gap-2 text-[11px] font-semibold text-ink-foreground/55"><span className="size-1.5 rounded-full bg-mint" /> No commitment · human review included</div></div>}</div></div>;
}

function LoadingLine({ label }: { label: string }) { return <div className="flex items-center gap-2 text-left text-[10px] text-ink-foreground/50"><span className="size-1.5 animate-pulse rounded-full bg-signal" />{label}</div>; }
function MiniInsight({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="rounded-lg border border-ink-foreground/10 bg-ink-foreground/[0.04] p-3"><div className="flex items-center gap-1.5 text-[10px] text-ink-foreground/45">{icon}{label}</div><p className="mt-2 truncate text-xs font-bold text-ink-foreground">{value}</p></div>; }

function ProjectProgressCard() {
  const milestones = [{ name: "Requirements", state: "done" }, { name: "UI design", state: "done" }, { name: "Backend", state: "done" }, { name: "Testing", state: "current" }, { name: "Deployment", state: "next" }];
  return <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7"><div className="flex items-start justify-between"><div><div className="flex items-center gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Active workspace</span><Badge variant="outline" className="border-mint/40 bg-mint/12 px-2 py-0 text-[10px] text-mint-foreground">On track</Badge></div><h2 className="mt-2 text-lg font-extrabold tracking-[-0.04em] text-ink">AI Attendance System</h2><p className="mt-1 text-xs text-muted-foreground">PF-10482 · React + FastAPI + OpenCV</p></div><Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="More project actions"><MoreHorizontal /></Button></div><div className="mt-7 flex items-center justify-between"><span className="text-xs font-semibold text-muted-foreground">Project progress</span><span className="font-mono text-sm text-ink">82%</span></div><Progress value={82} className="mt-3 h-2 bg-surface-alt [&>div]:bg-mint" /><div className="mt-8 grid grid-cols-5 gap-1">{milestones.map((milestone) => <div key={milestone.name} className="relative"><div className={`mb-3 grid size-7 place-items-center rounded-full border ${milestone.state === "done" ? "border-mint bg-mint text-mint-foreground" : milestone.state === "current" ? "border-signal bg-signal/15 text-signal" : "border-line bg-canvas text-muted-foreground"}`}>{milestone.state === "done" ? <Check className="size-3.5" strokeWidth={3} /> : milestone.state === "current" ? <CircleDashed className="size-3.5" /> : <span className="size-1.5 rounded-full bg-line" />}</div><p className={`text-[10px] leading-4 ${milestone.state === "current" ? "font-bold text-foreground" : "text-muted-foreground"}`}>{milestone.name}</p>{milestone.name !== "Deployment" && <span className="absolute left-7 top-3 h-px w-[calc(100%-10px)] bg-line" />}</div>)}</div><div className="mt-7 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="size-3.5" /> Next review · Tomorrow, 11:00 AM</div><Button variant="outline" size="sm" className="w-fit border-line bg-surface font-semibold text-foreground">Open workspace <ArrowRight className="size-3.5" /></Button></div></div>;
}

function CatalogTeaser() { return <div className="overflow-hidden rounded-2xl bg-sun p-6 text-sun-foreground sm:p-7"><div className="flex items-start justify-between"><div className="grid size-9 place-items-center rounded-lg bg-sun-foreground/10"><Compass className="size-4" /></div><span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">Explore</span></div><h2 className="mt-12 max-w-[250px] text-2xl font-extrabold leading-[1.05] tracking-[-0.06em]">Find a starting point for your next build.</h2><p className="mt-3 max-w-[280px] text-xs leading-5 opacity-70">Browse reference projects by technology, complexity and academic level.</p><Button className="mt-7 bg-sun-foreground text-sun hover:bg-sun-foreground/90">Browse 500+ ideas <ArrowUpRight className="size-4" /></Button></div>; }

function ProjectsView({ openOverview }: { openOverview: () => void }) { return <PageHeading eyebrow="Workspace / projects" title="My projects" description="Everything you’re building, in one place." action={<Button onClick={openOverview} className="bg-signal text-signal-foreground hover:bg-signal/90"><Plus />Start a project</Button>}><div className="grid gap-4 lg:grid-cols-2"><ProjectListCard title="AI Attendance System" code="PF-10482" stack="React + FastAPI + OpenCV" progress={82} status="Testing" /><ProjectListCard title="Campus Event Finder" code="PF-10391" stack="Flutter + Firebase" progress={54} status="Integration" /></div></PageHeading>; }
function ProjectListCard({ title, code, stack, progress, status }: { title: string; code: string; stack: string; progress: number; status: string }) { return <div className="rounded-2xl border border-line bg-surface p-6"><div className="flex items-start justify-between"><div><Badge variant="outline" className="border-line text-[10px]">{code}</Badge><h2 className="mt-4 text-lg font-extrabold tracking-[-0.04em] text-ink">{title}</h2><p className="mt-1 text-xs text-muted-foreground">{stack}</p></div><Button variant="ghost" size="icon" className="text-muted-foreground" aria-label={`More actions for ${title}`}><MoreHorizontal /></Button></div><div className="mt-8 flex items-center justify-between text-xs"><span className="font-semibold text-muted-foreground">{status}</span><span className="font-mono text-foreground">{progress}%</span></div><Progress value={progress} className="mt-2 h-2 bg-surface-alt [&>div]:bg-mint" /><Button variant="outline" className="mt-6 border-line bg-surface font-semibold text-foreground">Open workspace <ArrowRight /></Button></div>; }

function CatalogView({ openOverview }: { openOverview: () => void }) { return <PageHeading eyebrow="Reference library" title="Project catalog" description="A curated starting point for your next build." action={<Button onClick={openOverview} className="bg-signal text-signal-foreground hover:bg-signal/90"><Sparkles />Build my idea</Button>}><div className="mb-6 flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" /><Input placeholder="Search projects, e.g. AI attendance" className="h-10 border-line bg-surface pl-9 shadow-none" /></div><Button variant="outline" className="border-line bg-surface text-foreground"><Settings2 />Filters</Button></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><CatalogCard title="AI Crop Disease Detection" tags={["Python", "TensorFlow"]} complexity="Advanced" price="₹7,999+" /><CatalogCard title="Student Expense Tracker" tags={["React", "Node.js"]} complexity="Intermediate" price="₹4,999+" /><CatalogCard title="Smart Library System" tags={["Java", "MySQL"]} complexity="Basic" price="₹2,999+" /></div></PageHeading>; }
function CatalogCard({ title, tags, complexity, price }: { title: string; tags: string[]; complexity: string; price: string }) { return <div className="rounded-xl border border-line bg-surface p-5 transition-transform hover:-translate-y-0.5"><div className="flex items-start justify-between"><span className="grid size-9 place-items-center rounded-lg bg-mint/18 text-mint-foreground"><Database className="size-4" /></span><Button variant="ghost" size="icon" className="size-8 text-muted-foreground" aria-label={`Open ${title}`}><ArrowUpRight /></Button></div><h2 className="mt-5 text-base font-extrabold tracking-[-0.03em] text-ink">{title}</h2><div className="mt-3 flex flex-wrap gap-1.5">{tags.map((tag) => <Badge key={tag} variant="secondary" className="bg-canvas text-[10px] text-muted-foreground">{tag}</Badge>)}</div><div className="mt-6 flex items-end justify-between border-t border-line pt-4"><div><p className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{complexity}</p><p className="mt-1 font-mono text-sm text-ink">{price}</p></div><span className="text-[10px] font-semibold text-signal-foreground">Customize</span></div></div>; }

function MessagesView() { return <PageHeading eyebrow="Workspace / messages" title="Messages" description="Keep every project conversation attached to the work." action={<Button className="bg-ink text-ink-foreground hover:bg-ink/90"><Plus />New message</Button>}><div className="overflow-hidden rounded-2xl border border-line bg-surface"><MessageRow name="Aarav · Developer" project="AI Attendance System" message="The testing build is ready for your review." time="12m ago" unread /><MessageRow name="ProjectForge support" project="General" message="Your project brief has been received. We’ll follow up shortly." time="Yesterday" /><MessageRow name="Meera · Developer" project="Campus Event Finder" message="Could you confirm the event categories for the next milestone?" time="Aug 30" /></div></PageHeading>; }
function MessageRow({ name, project, message, time, unread = false }: { name: string; project: string; message: string; time: string; unread?: boolean }) { return <div className="flex items-start gap-4 border-b border-line p-5 last:border-b-0 sm:p-6"><div className={`grid size-10 shrink-0 place-items-center rounded-full ${name.includes("support") ? "bg-signal/18 text-signal-foreground" : "bg-mint text-mint-foreground"}`}>{name.includes("support") ? <ShieldCheck className="size-4" /> : <Users className="size-4" />}</div><div className="min-w-0 flex-1"><div className="flex flex-col justify-between gap-1 sm:flex-row"><p className="text-sm font-bold text-ink">{name} {unread && <span className="ml-1 inline-block size-1.5 rounded-full bg-signal align-middle" />}</p><span className="text-[11px] text-muted-foreground">{time}</span></div><p className="mt-1 text-xs font-semibold text-muted-foreground">{project}</p><p className="mt-2 truncate text-sm text-foreground/75">{message}</p></div></div>; }

function PageHeading({ eyebrow, title, description, action, children }: { eyebrow: string; title: string; description: string; action: React.ReactNode; children: React.ReactNode }) { return <><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[0.17em] text-muted-foreground">{eyebrow}</p><h1 className="mt-3 text-3xl font-extrabold tracking-[-0.06em] text-ink">{title}<span className="text-signal">.</span></h1><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>{action}</div><div className="mt-8">{children}</div></>; }