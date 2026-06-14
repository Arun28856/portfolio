import type { Metadata } from "next";
import { ExternalLink, Hammer } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { AnimatedSection } from "@/components/AnimatedSection";
import { profile, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Lakshman Arun P.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <p className="font-mono text-sm text-accent">Selected work</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A few things I&apos;ve built. More projects and ongoing work are on
          my GitHub profile.
        </p>
      </AnimatedSection>

      {projects.length === 0 ? (
        <AnimatedSection
          delay={0.05}
          className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground"
        >
          <Hammer size={24} className="text-accent" />
          <p>Project showcase coming soon - check back shortly.</p>
        </AnimatedSection>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.name}
              delay={index * 0.05}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
              {project.period && (
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {project.period}
                </p>
              )}
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-4 flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      )}

      <AnimatedSection delay={0.2} className="mt-12">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon size={16} />
          More on GitHub
        </a>
      </AnimatedSection>
    </div>
  );
}
