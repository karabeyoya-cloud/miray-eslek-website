"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";
import { mediaSections, type MediaItem } from "@/data/content";

const tabs = [
  { id: "photo" as const, label: "Fotoğraf" },
  { id: "video" as const, label: "Video" },
  { id: "audio" as const, label: "Ses" },
  { id: "press" as const, label: "Basın" },
];

type TabId = (typeof tabs)[number]["id"];

function isTab(value: string | null): value is TabId {
  return (
    value === "photo" ||
    value === "video" ||
    value === "audio" ||
    value === "press"
  );
}

function itemLinks(item: MediaItem) {
  if (item.links?.length) return item.links;
  if (item.external) return [{ label: "İzle", href: item.external }];
  return [];
}

function PhotoGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={`${item.title}-${item.image}`}
          className="relative aspect-[4/5] w-full overflow-hidden bg-surface"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              style={
                item.imagePosition
                  ? { objectPosition: item.imagePosition }
                  : undefined
              }
              sizes="(max-width: 640px) 100vw, 420px"
            />
          )}
        </div>
      ))}
    </div>
  );
}

function MediaList({ items }: { items: MediaItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item) => {
        const links = itemLinks(item);

        return (
          <article
            key={`${item.title}-${item.year}`}
            className="border-b border-border pb-8 last:border-0"
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
            {links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export function MediaTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<TabId>(() =>
    isTab(tabParam) ? tabParam : "photo",
  );

  useEffect(() => {
    if (isTab(tabParam)) {
      setActiveTab(tabParam);
    } else if (tabParam === "collaborations") {
      setActiveTab("video");
    }
  }, [tabParam]);

  const items = mediaSections[activeTab];

  const selectTab = (id: TabId) => {
    setActiveTab(id);
    router.replace(`/medya?tab=${id}`, { scroll: false });
  };

  return (
    <PageShell reading>
      <PageHeader title="Medya" />

      <div className="relative z-20 mb-8 flex flex-wrap gap-2" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => selectTab(tab.id)}
            className={`cursor-pointer rounded-full px-5 py-2.5 text-sm transition-colors ${
              activeTab === tab.id
                ? "bg-accent text-bg"
                : "border border-border text-muted hover:border-accent/40 hover:text-fg"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div key={activeTab} role="tabpanel">
        {items.length === 0 ? (
          <p className="text-sm text-muted">Yakında eklenecek.</p>
        ) : activeTab === "photo" ? (
          <PhotoGrid items={items} />
        ) : (
          <MediaList items={items} />
        )}
      </div>
    </PageShell>
  );
}
