import type { Metadata } from "next";
import { ContactForm } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "İletişim — Miray Eslek",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        title="İletişim"
        description="Konser, atölye, işbirliği ve basın talepleri için birlikte çalışalım."
      />
      <ContactForm />
    </PageShell>
  );
}
