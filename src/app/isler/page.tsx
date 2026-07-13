import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { worksSections } from "@/data/content";

export const metadata: Metadata = {
  title: "Çalışmalar — Miray Eslek",
};

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <PageHeader
        title="Çalışmalar"
        description="Tiyatro, performans ve soundpainting pratikleri."
      />

      <div className="space-y-16">
        {worksSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-b border-border pb-16 last:border-0"
          >
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border md:aspect-[4/3]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="image-tone object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div
                  className="image-tone-overlay pointer-events-none absolute inset-0"
                  aria-hidden
                />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-fg md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {section.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
