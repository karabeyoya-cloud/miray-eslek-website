import type { Metadata } from "next";
import { Suspense } from "react";
import { MediaTabs } from "./MediaTabs";

export const metadata: Metadata = {
  title: "Medya — Miray Eslek",
};

export default function MediaPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 text-muted">
          Yükleniyor…
        </div>
      }
    >
      <MediaTabs />
    </Suspense>
  );
}
