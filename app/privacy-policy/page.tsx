import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Nexterm",
  description: "Nexterm privacy policy. We collect no personal data. Your API keys never leave your device.",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: 40,
};

const headingStyle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: "#fafafa",
  marginBottom: 12,
  letterSpacing: "-0.02em",
};

const paraStyle: React.CSSProperties = {
  color: "#a1a1aa",
  fontSize: 15,
  lineHeight: 1.8,
  marginBottom: 12,
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#09090b", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #27272a", padding: "16px 24px" }}>
        <a
          href="/"
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            fontWeight: 700,
            fontSize: 18,
            color: "#fafafa",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#22c55e" }}>&gt;</span>
          {"_"}nexterm
        </a>
      </nav>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ marginBottom: 48 }}>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 12,
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "#71717a", fontSize: 14 }}>Last updated: April 6, 2026</p>
        </div>

        <div style={sectionStyle}>
          <p style={{ ...paraStyle, fontSize: 16, color: "#fafafa" }}>
            Nexterm is designed with privacy as a core principle. We do not collect, store,
            or transmit any personal information.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Data We Collect</h2>
          <p style={paraStyle}>
            Nexterm collects <strong style={{ color: "#fafafa" }}>no personal data</strong>. The
            application runs entirely on your local machine. We do not have servers that receive
            your usage data, commands, or any other information.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>API Keys</h2>
          <p style={paraStyle}>
            Your API keys (Anthropic, OpenAI, Google, Ollama, or custom endpoints) are stored
            locally in macOS Keychain on your device. They are never transmitted to NexTechia
            servers. API requests are made directly from your machine to the respective AI
            provider.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Terminal Data</h2>
          <p style={paraStyle}>
            Terminal sessions, commands, and output exist only in memory on your local machine.
            This data is never sent to any external server operated by NexTechia.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>AI Conversations</h2>
          <p style={paraStyle}>
            Conversations with AI models are sent directly to the respective AI provider (e.g.,
            Anthropic, OpenAI). These requests are subject to the respective provider&apos;s privacy
            policy. NexTechia does not intercept or store these conversations.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Analytics and Telemetry</h2>
          <p style={paraStyle}>
            Nexterm contains <strong style={{ color: "#fafafa" }}>zero telemetry</strong>. No
            crash reports, usage analytics, or feature tracking is sent anywhere. The application
            is fully functional without any internet connection (except for AI API calls you
            explicitly make).
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Website</h2>
          <p style={paraStyle}>
            This website (nexterm-web.vercel.app) is hosted on Vercel. Vercel may collect
            standard web server logs including IP addresses and request metadata. Please review
            Vercel&apos;s privacy policy at vercel.com/legal/privacy-policy.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Open Source Verification</h2>
          <p style={paraStyle}>
            Because Nexterm is open source under the MIT License, you can verify all privacy
            claims by reviewing the source code at{" "}
            <a
              href="https://github.com/mitre88/nexterm"
              style={{ color: "#22c55e", textDecoration: "none" }}
            >
              github.com/mitre88/nexterm
            </a>
            .
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Contact</h2>
          <p style={paraStyle}>
            For privacy questions or concerns, please open an issue on{" "}
            <a
              href="https://github.com/mitre88/nexterm/issues"
              style={{ color: "#22c55e", textDecoration: "none" }}
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
