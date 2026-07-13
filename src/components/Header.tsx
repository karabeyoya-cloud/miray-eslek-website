"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 w-full border-b border-border transition-colors ${
        open ? "z-[200] bg-bg" : "z-50 bg-bg/90 backdrop-blur-md"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:py-5 ${
          open ? "z-[202]" : "z-[70]"
        }`}
      >
        <Link
          href="/"
          className="-ml-1 shrink-0 rounded-md px-2 py-2 font-display text-lg font-semibold text-fg transition-opacity hover:opacity-80 md:text-lg"
        >
          {site.name}
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-fg transition-colors hover:bg-surface/60 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>

        <nav className="hidden items-center gap-x-5 md:flex lg:gap-x-6">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[201] md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-[#1a0f2e]/95 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
        />

        <nav
          id="mobile-nav"
          className={`absolute inset-y-0 right-0 z-[1] flex w-[min(88vw,20rem)] flex-col border-l border-border bg-[#1a0f2e] px-6 pb-10 pt-6 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Menü
            </p>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md text-fg transition-colors hover:bg-surface"
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
            >
              <MenuIcon open />
            </button>
          </div>

          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-4 font-display text-2xl font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-surface2 text-accent"
                      : "text-fg hover:bg-surface"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
