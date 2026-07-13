import type { Metadata } from "next";
import Image from "next/image";
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
        sizes="680px"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, #1a0f2e 0%, rgba(26,15,46,0.5) 9%, rgba(26,15,46,0.12) 16%, transparent 24%, transparent 76%, rgba(26,15,46,0.12) 84%, rgba(26,15,46,0.5) 91%, #1a0f2e 100%),
            linear-gradient(to right, #1a0f2e 0%, #1a0f2e 38%, rgba(26,15,46,0.94) 44%, rgba(26,15,46,0.75) 50%, rgba(26,15,46,0.48) 56%, rgba(26,15,46,0.22) 62%, rgba(26,15,46,0.06) 68%, transparent 74%)
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
      <div className="bg-bg px-6 pt-28 pb-24 md:hidden">
        <h1 className="font-display text-4xl font-semibold text-fg">Biyografi</h1>

        <div className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-md overflow-hidden">
          <BioPhotoMobile className="relative h-full w-full" />
        </div>

        <div className="mt-10 space-y-6 text-base leading-[1.85] text-fg/90">
          <p>{bio.intro}</p>
          {bio.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Masaüstü: foto sağda, metin solda */}
      <div className="relative hidden min-h-screen overflow-hidden bg-bg md:block">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-0 top-48">
            <div className="relative aspect-square w-[min(68vw,1071px,calc(100vh-5rem))]">
              <BioPhotoDesktop className="relative h-full w-full" />
            </div>
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #1a0f2e 0%, #1a0f2e 30%, rgba(26,15,46,0.9) 36%, rgba(26,15,46,0.68) 42%, rgba(26,15,46,0.42) 48%, rgba(26,15,46,0.18) 54%, rgba(26,15,46,0.04) 60%, transparent 66%)",
            }}
          />
          <div className="noise absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
          <div className="max-w-lg">
            <h1 className="font-display text-5xl font-semibold text-fg">Biyografi</h1>

            <p className="mt-10 text-base leading-[1.85] text-fg/90">{bio.intro}</p>

            <div className="mt-8 space-y-6 text-base leading-[1.85] text-fg/90">
              {bio.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
