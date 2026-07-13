import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { publications, talks } from "@/data/content";

export const metadata: Metadata = {
  title: "Araştırma — Miray Eslek",
};

export default function ResearchPage() {
  return (
    <PageShell reading>
      <PageHeader
        title="Araştırma"
        description="Müzik sosyolojisi ve disiplinlerarası yazılar."
      />

      <div className="space-y-10">
        {publications.map((pub) => (
          <article key={pub.title} className="border-b border-border pb-10 last:border-0">
            <p className="text-sm text-accent">{pub.year}</p>
            <h2 className="mt-2 font-display text-xl font-medium leading-snug text-fg">
              {pub.title}
            </h2>
            <p className="mt-2 text-sm text-muted">
              {pub.type} · {pub.venue}
            </p>
            {"link" in pub && pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-accent hover:underline"
              >
                Oku →
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-16 space-y-10">
        <h2 className="font-display text-xl font-semibold text-fg">Konuşmalar</h2>
        {talks.map((talk) => (
          <article key={talk.title} className="border-b border-border pb-10 last:border-0">
            <p className="text-sm text-accent">{talk.year}</p>
            <h3 className="mt-2 text-lg font-medium leading-snug text-fg">{talk.title}</h3>
            <p className="mt-2 text-sm text-muted">
              {talk.type} · {talk.venue}
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
