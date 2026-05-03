import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "KYZ (T) GROUP LIMITED — East Africa&apos;s Trusted Supply Partner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "12px solid #cc1a1a",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
            transform: "rotate(-45deg)",
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "4px solid #cc1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: 36,
              fontWeight: 900,
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            KYZ
          </span>
        </div>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            fontFamily: "Arial Black, sans-serif",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          KYZ (T) GROUP LIMITED
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#cc1a1a",
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          East Africa&apos;s Trusted Supply Partner
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
