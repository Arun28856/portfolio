import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { education, experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience | Lakshman Arun P",
  description: "Work experience and education for Lakshman Arun P.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <p className="font-mono text-sm text-accent">Career so far</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h1>
      </AnimatedSection>

      <div className="mt-12 space-y-10">
        {experience.map((item, index) => (
          <AnimatedSection
            key={`${item.company}-${item.period}`}
            delay={index * 0.05}
            className="relative border-l border-border pl-6"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="font-mono text-sm text-muted-foreground">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-accent">
              {item.company} &middot; {item.location}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted-foreground" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.2} className="mt-14">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card px-6 py-6">
          <GraduationCap className="mt-1 flex-none text-accent" size={24} />
          <div>
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">
              {education.school}
            </p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              {education.period}
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
