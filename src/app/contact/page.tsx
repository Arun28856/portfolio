import type { Metadata } from "next";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { AnimatedSection } from "@/components/AnimatedSection";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lakshman Arun P.",
};

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "lakshmanarunp",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "Arun28856",
    href: profile.github,
    icon: GithubIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <AnimatedSection>
        <p className="font-mono text-sm text-accent">Get in touch</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} />
          {profile.location}
        </p>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Open to developer and QA roles, especially at early-stage startups.
          Feel free to reach out through any of the channels below.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.05} className="mt-10 grid gap-4 sm:grid-cols-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  {link.label}
                </span>
                <span className="block text-sm font-medium">{link.value}</span>
              </span>
            </a>
          );
        })}
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Download size={16} />
          Download Resume
        </a>
      </AnimatedSection>
    </div>
  );
}
