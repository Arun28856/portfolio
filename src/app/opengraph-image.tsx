import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0e14",
          color: "#e6edf3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, color: "#2dd4bf" }}>Lakshman.dev</div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#94a3b8",
            maxWidth: 900,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
