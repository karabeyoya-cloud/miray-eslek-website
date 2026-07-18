import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { cerkesRidvanProject } from "@/data/content";

export const metadata: Metadata = {
  title: "Tiyatro & Sahne — Miray Eslek",
  description: "Tiyatro ve sahne projelerinde müzik tasarımı ve performans.",
};

export default function TheatrePage() {
  const project = cerkesRidvanProject;

  return (
    <PageShell reading>
      <p className="mb-6 text-sm text-muted">
        <Link href="/isler" className="text-accent hover:underline">
          ← Çalışmalar
        </Link>
      </p>

      <PageHeader
        title="Tiyatro & Sahne"
        description="Tiyatro ve sahne projelerinde müzik tasarımı ve performans."
      />

      <article className="border-t border-border pt-10">
        <h2 className="font-display text-2xl font-semibold text-fg md:text-3xl">
          {project.title}
        </h2>
        <p className="mt-2 text-sm text-muted">{project.basedOn}</p>
        <p className="mt-3 text-sm text-accent">
          {project.festival} · {project.year}
        </p>
        <p className="mt-2 text-sm text-muted">{project.role}</p>

        <div className="mt-8 space-y-6 text-base leading-[1.85] text-fg/90">
          {project.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-display text-lg font-semibold text-fg">
            {project.award.title}
          </p>
          <p className="mt-2 text-sm text-muted">{project.award.ceremony}</p>
        </div>

        <dl className="mt-10 space-y-4 border-t border-border pt-8">
          {project.credits.map((credit) => (
            <div key={credit.label}>
              <dt className="text-sm text-accent">{credit.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-fg/90">
                {credit.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {project.images.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden bg-surface ${
                image.wide
                  ? "aspect-[3/4] sm:col-span-2 sm:aspect-[16/10]"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes={
                  image.wide
                    ? "(max-width: 768px) 100vw, 720px"
                    : "(max-width: 640px) 100vw, 360px"
                }
                quality={90}
              />
            </div>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
