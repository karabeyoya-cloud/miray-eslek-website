import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { mediaSections } from "@/data/content";

export const metadata: Metadata = {
  title: "Medya — Miray Eslek",
};

const sectionLabels: Record<keyof typeof mediaSections, string> = {
  video: "Video",
  photo: "Fotoğraf",
  audio: "Ses",
  press: "Basın",
};

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-32 pb-24">
      <PageHeader
        title="Medya"
        description="Video, fotoğraf, ses kayıtları ve basın. İçerikler yakında eklenecek."
      />

      <div className="space-y-20">
        {(Object.keys(mediaSections) as Array<keyof typeof mediaSections>).map(
          (key) => {
            const items = mediaSections[key];

            return (
              <section key={key}>
                <h2 className="font-display text-xl font-semibold text-fg">
                  {sectionLabels[key]}
                </h2>

                {items.length === 0 ? (
                  <p className="mt-4 text-sm text-muted">Yakında eklenecek.</p>
                ) : (
                  <div className="mt-8 space-y-10">
                    {items.map((item) => (
                      <article
                        key={item.title}
                        className="border-b border-border pb-10 last:border-0"
                      >
                        <p className="text-sm text-accent">
                          {item.category} · {item.year}
                        </p>
                        <h3 className="mt-2 font-display text-lg font-medium leading-snug text-fg">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {item.description}
                          </p>
                        )}
                        {item.external && (
                          <a
                            href={item.external}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-sm text-accent hover:underline"
                          >
                            İzle →
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </section>
            );
          },
        )}
      </div>
    </div>
  );
}
