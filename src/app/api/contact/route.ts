import { site } from "@/data/content";

const subjectLabels: Record<string, string> = {
  konser: "Konser / Performans",
  atolye: "Atölye",
  isbirligi: "İşbirliği",
  basin: "Basın",
  diger: "Diğer",
};

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return Response.json(
      { error: "İletişim formu henüz yapılandırılmamış." },
      { status: 503 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subjectKey = body.subject ?? "diger";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return Response.json({ error: "Lütfen tüm zorunlu alanları doldurun." }, { status: 400 });
  }

  const subjectLabel = subjectLabels[subjectKey] ?? "İletişim";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Miray Eslek — ${subjectLabel}`,
      from_name: name,
      email,
      replyto: email,
      message: `Ad Soyad: ${name}\nE-posta: ${email}\nKonu: ${subjectLabel}\n\n${message}`,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    return Response.json(
      { error: data.message ?? "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 },
    );
  }

  return Response.json({ success: true, to: site.email });
}
