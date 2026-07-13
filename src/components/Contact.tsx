"use client";

import { useState } from "react";
import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/data/content";

const subjectLabels: Record<string, string> = {
  konser: "Konser / Performans",
  atolye: "Atölye",
  isbirligi: "İşbirliği",
  basin: "Basın",
  diger: "Diğer",
};

export function ContactAside() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted">E-posta</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-2 block text-lg text-fg transition-colors hover:text-accent"
        >
          {site.email}
        </a>
      </div>
      <SocialIcons size={24} />
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? "diger"),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(result.error ?? "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      {submitted ? (
        <div className="py-12 text-center sm:py-16">
          <p className="text-lg text-fg">Teşekkürler.</p>
          <p className="mt-3 text-sm text-muted">
            Mesajınız {site.email} adresine iletildi. En kısa sürede dönüş yapılacaktır.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm text-muted">
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={loading}
                className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted">
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={loading}
                className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm text-muted">
                Konu
              </label>
              <select
                id="subject"
                name="subject"
                disabled={loading}
                className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent disabled:opacity-60"
              >
                {Object.entries(subjectLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={loading}
                className="mt-2 w-full resize-none rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent disabled:opacity-60"
              />
            </div>
          </div>

          {error ? (
            <p className="mt-4 text-sm text-red-300" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-full bg-accent py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Gönderiliyor…" : "Gönder"}
          </button>
        </>
      )}
    </form>
  );
}
