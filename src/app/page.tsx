import Link from "next/link";
import { ArrowRight, CalendarDays, Download, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { highlights, profile } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <AnimatedSection>
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
          {profile.tagline}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.bio}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
            <Mail size={16} />
          </Link>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Book a Call
            <CalendarDays size={16} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Resume
            <Download size={16} />
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-20">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="bg-card px-6 py-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
