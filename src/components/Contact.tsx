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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subjectKey = String(data.get("subject") ?? "diger");
    const message = String(data.get("message") ?? "");
    const subjectLabel = subjectLabels[subjectKey] ?? "İletişim";
    const mailSubject = `Miray Eslek — ${subjectLabel}`;
    const mailBody = `Ad Soyad: ${name}\nE-posta: ${email}\n\n${message}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    setSubmitted(true);
  }

  return (
    <div className="grid gap-16 lg:grid-cols-2">
      <div className="space-y-8">
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

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
      >
        {submitted ? (
          <div className="py-16 text-center">
            <p className="text-lg text-fg">Teşekkürler.</p>
            <p className="mt-3 text-sm text-muted">
              E-posta uygulamanız açılacak. Gönderdikten sonra mesajınız iletilecektir.
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
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent"
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
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-muted">
                  Konu
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent"
                >
                  <option value="konser">Konser / Performans</option>
                  <option value="atolye">Atölye</option>
                  <option value="isbirligi">İşbirliği</option>
                  <option value="basin">Basın</option>
                  <option value="diger">Diğer</option>
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
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-accent py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Gönder
            </button>
          </>
        )}
      </form>
    </div>
  );
}
