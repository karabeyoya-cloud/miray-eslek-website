import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { bio, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Biyografi — Miray Eslek",
};

function BioPhoto() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden">
      <Image
        src={site.images.bioImage}
        alt="Miray Eslek sokak performansında"
        fill
        priority
        quality={90}
        className="bio-portrait-blend object-cover object-[84%_42%]"
        sizes="(max-width: 768px) 100vw, 420px"
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            linear-gradient(to bottom, #1a0f2e 0%, rgba(26,15,46,0.35) 12%, transparent 24%, transparent 78%, rgba(26,15,46,0.4) 90%, #1a0f2e 100%),
            linear-gradient(to right, #1a0f2e 0%, rgba(26,15,46,0.25) 10%, transparent 20%, transparent 80%, rgba(26,15,46,0.25) 90%, #1a0f2e 100%)
          `,
        }}
      />
    </div>
  );
}

export default function BiographyPage() {
  return (
    <PageShell reading>
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:gap-12 lg:gap-14">
        {/* Foto: mobilde üstte, masaüstünde sağda */}
        <div className="order-1 mx-auto w-full max-w-md md:order-2 md:mx-0 md:max-w-none md:sticky md:top-32">
          <BioPhoto />
        </div>

        <div className="order-2 max-w-2xl md:order-1">
          <PageHeader title="Biyografi" />

          <div className="space-y-6 text-base leading-[1.85] text-fg/90">
            <p>{bio.intro}</p>
            {bio.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
