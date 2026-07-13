import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-6 pt-32 pb-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-fg md:text-5xl">
        Sayfa bulunamadı
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-border px-6 py-3 text-sm text-fg transition-colors hover:border-accent/40 hover:text-accent"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
