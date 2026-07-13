import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { bio, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Biyografi — Miray Eslek",
};

const BIO_IMAGE_SIZE = 1071;

function BioPhotoDesktop({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src={site.images.bioImage}
        alt="Miray Eslek sokak performansında"
        width={BIO_IMAGE_SIZE}
        height={BIO_IMAGE_SIZE}
        priority
        quality={90}
        className="bio-portrait-blend h-full w-full object-cover object-[84%_42%]"
        sizes="(max-width: 1024px) 100vw, 420px"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, #1a0f2e 0%, rgba(26,15,46,0.45) 10%, transparent 22%, transparent 78%, rgba(26,15,46,0.45) 90%, #1a0f2e 100%),
            linear-gradient(to right, #1a0f2e 0%, rgba(26,15,46,0.35) 8%, transparent 18%, transparent 82%, rgba(26,15,46,0.35) 92%, #1a0f2e 100%)
          `,
        }}
      />
    </div>
  );
}

function BioPhotoMobile({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src={site.images.bioImage}
        alt="Miray Eslek sokak performansında"
        width={BIO_IMAGE_SIZE}
        height={BIO_IMAGE_SIZE}
        priority
        quality={90}
        className="bio-portrait-blend h-full w-full object-cover object-[84%_42%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, #1a0f2e 0%, transparent 10%, transparent 88%, rgba(26,15,46,0.35) 96%, #1a0f2e 100%),
            linear-gradient(to right, #1a0f2e 0%, transparent 12%, transparent 88%, #1a0f2e 100%)
          `,
        }}
      />
    </div>
  );
}

export default function BiographyPage() {
  return (
    <>
      {/* Mobil: foto üstte, metin altta */}
      <PageShell reading className="md:hidden">
        <PageHeader title="Biyografi" />

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
          <BioPhotoMobile className="relative h-full w-full" />
        </div>

        <div className="mt-8 space-y-6 text-base leading-[1.85] text-fg/90">
          <p>{bio.intro}</p>
          {bio.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </PageShell>

      {/* Masaüstü: metin + foto dengeli grid */}
      <div className="hidden md:block">
        <PageShell>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-14">
            <div className="max-w-2xl">
              <PageHeader title="Biyografi" />

              <p className="text-base leading-[1.85] text-fg/90">{bio.intro}</p>

              <div className="mt-8 space-y-6 text-base leading-[1.85] text-fg/90">
                {bio.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32 lg:pt-16">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden">
                <BioPhotoDesktop className="relative h-full w-full" />
              </div>
            </div>
          </div>
        </PageShell>
      </div>
    </>
  );
}
