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

async function parseWeb3FormsResponse(response: Response): Promise<{
  success?: boolean;
  message?: string;
  raw: string;
}> {
  const raw = await response.text();
  if (!raw.trim()) {
    return { raw: "" };
  }
  try {
    const data = JSON.parse(raw) as { success?: boolean; message?: string };
    return { ...data, raw };
  } catch {
    return { raw };
  }
}

export async function POST(request: Request) {
  const accessKey = (
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    ""
  ).trim();

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
    return Response.json(
      { error: "Lütfen tüm zorunlu alanları doldurun." },
      { status: 400 },
    );
  }

  const subjectLabel = subjectLabels[subjectKey] ?? "İletişim";

  try {
    // FormData is more reliable than JSON for Web3Forms free tier / edge proxies.
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
    payload.append("botcheck", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });

    const data = await parseWeb3FormsResponse(response);

    if (!data.raw.trim() || data.success === undefined) {
      const hint =
        data.raw.trim().slice(0, 160) ||
        `HTTP ${response.status} (boş veya HTML yanıt)`;
      return Response.json(
        {
          error: `Web3Forms yanıtı okunamadı (${hint}). Lütfen NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ile istemci gönderimini kullanın veya doğrudan e-posta gönderin.`,
        },
        { status: 502 },
      );
    }

    if (!response.ok || !data.success) {
      return Response.json(
        {
          error:
            data.message ??
            "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
        },
        { status: 500 },
      );
    }

    return Response.json({ success: true, to: site.email });
  } catch {
    return Response.json(
      {
        error:
          "Bağlantı hatası. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
      },
      { status: 502 },
    );
  }
}
