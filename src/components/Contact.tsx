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

async function parseJsonSafe<T extends Record<string, unknown>>(
  response: Response,
): Promise<T | null> {
  const text = await response.text();
  if (!text.trim()) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

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

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subjectKey = String(data.get("subject") ?? "diger");
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Lütfen tüm zorunlu alanları doldurun.");
      setLoading(false);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    const subjectLabel = subjectLabels[subjectKey] ?? "İletişim";

    try {
      // Prefer browser → Web3Forms FormData (free tier; avoid server proxy / HTML challenges).
      if (accessKey) {
        const payload = new FormData();
        payload.append("access_key", accessKey);
        payload.append("name", name);
        payload.append("email", email);
        payload.append("subject", `Miray Eslek — ${subjectLabel}`);
        payload.append("from_name", name);
        payload.append("replyto", email);
        payload.append(
          "message",
          `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${subjectLabel}\n\n${message}`,
        );
        // Honeypot: must stay unchecked / empty for humans
        payload.append("botcheck", "");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload,
          headers: { Accept: "application/json" },
        });

        const result = await parseJsonSafe<{
          success?: boolean;
          message?: string;
        }>(response);

        if (!result) {
          setError(
            "Web3Forms yanıtı okunamadı. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
          );
          return;
        }

        if (!response.ok || !result.success) {
          setError(
            typeof result.message === "string" && result.message
              ? result.message
              : "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
          );
          return;
        }

        setSubmitted(true);
        form.reset();
        return;
      }

      // NEXT_PUBLIC_ missing: fall back to server proxy (WEB3FORMS_ACCESS_KEY)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject: subjectKey, message }),
      });

      const result = await parseJsonSafe<{ error?: string; success?: boolean }>(
        response,
      );

      if (!response.ok) {
        setError(
          result?.error ??
            "Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
        );
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Bağlantı hatası. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
      );
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
            Mesajınız {site.email} adresine iletildi. En kısa sürede dönüş
            yapılacaktır.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {/* Honeypot — hidden from users; bots that fill it are rejected by Web3Forms */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              style={{ display: "none" }}
            />
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
