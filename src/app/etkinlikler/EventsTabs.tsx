"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { EventCards, EventEmpty } from "@/components/EventList";
import { events } from "@/data/content";

const tabs = [
  { id: "upcoming" as const, label: "Yakında" },
  { id: "current" as const, label: "Güncel" },
  { id: "past" as const, label: "Geçmiş" },
];

type TabId = (typeof tabs)[number]["id"];

const emptyMessages = {
  upcoming: "Yeni konser ve etkinlikler yakında duyurulacak.",
  current: "Şu an duyurulan güncel etkinlik bulunmuyor.",
  past: "Geçmiş etkinlik kaydı bulunamadı.",
};

function isTab(value: string | null): value is TabId {
  return value === "upcoming" || value === "current" || value === "past";
}

export function EventsTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<TabId>(() =>
    isTab(tabParam) ? tabParam : "current",
  );

  useEffect(() => {
    if (isTab(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const list = events[activeTab];

  const selectTab = (id: TabId) => {
    setActiveTab(id);
    router.replace(`/etkinlikler?tab=${id}`, { scroll: false });
  };

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24">
      <PageHeader
        title="Etkinlikler"
        description="Konserler, sahne performansları ve atölyeler."
      />

      <div className="relative z-20 mb-10 flex flex-wrap gap-2" role="tablist">
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
        {list.length === 0 ? (
          <EventEmpty message={emptyMessages[activeTab]} />
        ) : (
          <EventCards items={list} />
        )}
      </div>
    </div>
  );
}
