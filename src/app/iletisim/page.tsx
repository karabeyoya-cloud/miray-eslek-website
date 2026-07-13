import type { Metadata } from "next";
import { ContactAside, ContactForm } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "İletişim — Miray Eslek",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <PageHeader
            title="İletişim"
            description="Konser, atölye, işbirliği ve basın talepleri için birlikte çalışalım."
          />
          <ContactAside />
        </div>

        <ContactForm />
      </div>
    </PageShell>
  );
}
