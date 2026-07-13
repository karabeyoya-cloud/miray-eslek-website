import type { Metadata } from "next";
import { ContactForm } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "İletişim — Miray Eslek",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <PageHeader
        title="İletişim"
        description="Konser, atölye, işbirliği ve basın talepleri için birlikte çalışalım."
      />
      <ContactForm />
    </div>
  );
}
