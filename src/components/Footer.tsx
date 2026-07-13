import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface2/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center justify-end gap-8">
          <SocialIcons size={20} />
          <Link href="/iletisim" className="text-sm text-muted transition-colors hover:text-accent">
            İletişim
          </Link>
        </div>
      </div>
    </footer>
  );
}
