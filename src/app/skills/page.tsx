import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { skills, whyHireMe } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills | Lakshman Arun P",
  description:
    "Technical skills, soft skills, and why Lakshman Arun P is a fit for startup teams.",
};

const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages & Libraries", items: skills.languages },
  { title: "Frameworks", items: skills.frameworks },
  { title: "IDE & Tools", items: skills.tools },
  { title: "Testing", items: skills.testing },
  { title: "Database & Cloud", items: skills.databases },
  { title: "Auth", items: skills.auth },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <p className="font-mono text-sm text-accent">What I bring</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Skills &amp; Why Hire Me
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.05} className="mt-12">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-12">
        <h2 className="text-xl font-semibold">Soft Skills</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.soft.map((item) => (
            <span
              key={item}
              className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              {item}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-16">
        <h2 className="text-xl font-semibold">
          Why Hire Me for Your Startup
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {whyHireMe.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-accent">{point.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
