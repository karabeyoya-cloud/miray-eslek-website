import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1a0f2e",
          color: "#ede4f7",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#c4a7f5",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "#a99bc4",
            maxWidth: 720,
            lineHeight: 1.5,
          }}
        >
          {site.intro}
        </div>
      </div>
    ),
    { ...size },
  );
}
