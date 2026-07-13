import type { Metadata } from "next";
import { Suspense } from "react";
import { EventsTabs } from "./EventsTabs";

export const metadata: Metadata = {
  title: "Etkinlikler — Miray Eslek",
};

export default function EventsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 text-muted">Yükleniyor…</div>
      }
    >
      <EventsTabs />
    </Suspense>
  );
}
