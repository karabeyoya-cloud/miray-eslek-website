import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { istanbulProject } from "@/data/content";

export const metadata: Metadata = {
  title: "Sen Hangi İstanbul'sun? — Miray Eslek",
  description:
    "İstanbul'un gündelik anlarından doğan fotoğraf serisi. Miray Eslek.",
};

export default function IstanbulProjectPage() {
  return (
    <PageShell reading>
      <p className="mb-6 text-sm text-muted">
        <Link href="/isler" className="text-accent hover:underline">
          ← Çalışmalar
        </Link>
      </p>

      <PageHeader title={istanbulProject.title} />

      <div className="space-y-6 text-base leading-[1.85] text-fg/90">
        {istanbulProject.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        Miray Eslek ·{" "}
        <a
          href={istanbulProject.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {istanbulProject.instagramHandle}
        </a>
      </p>

      <div className="mt-14 space-y-14">
        {istanbulProject.photos.map((photo) => (
          <figure key={photo.src}>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface sm:aspect-[4/5]">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                quality={90}
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-display text-lg font-medium text-fg">
                {photo.title}
              </p>
              <p className="mt-1 text-sm text-muted">{photo.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-16 max-w-2xl text-sm leading-relaxed text-muted">
        {istanbulProject.credit}
      </p>
    </PageShell>
  );
}
