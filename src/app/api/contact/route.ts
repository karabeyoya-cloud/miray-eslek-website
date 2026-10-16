/**
 * Deprecated: contact form submits directly to Web3Forms from the browser
 * (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY). Free-tier Web3Forms rejects server-side
 * submits from Vercel. Kept only so old clients get a clear response.
 */
export async function POST() {
  return Response.json(
    {
      error:
        "Bu uç nokta kaldırıldı. Form tarayıcıdan Web3Forms’a gönderilir.",
      deprecated: true,
    },
    { status: 410 },
  );
}
