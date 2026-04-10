import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Nexterm",
  description: "Get help with Nexterm. Report issues, request features, or contribute on GitHub.",
};

export default function Support() {
  const cardStyle: React.CSSProperties = {
    background: "#18181b",
    border: "1px solid #27272a",
    borderRadius: 12,
    padding: "28px 28px",
    textDecoration: "none",
    display: "block",
    transition: "border-color 0.2s",
  };

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
        <div style={{ marginBottom: 56 }}>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 12,
            }}
          >
            Support
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.7 }}>
            Nexterm is open source. The best way to get support is through GitHub.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}>
          <a
            href="https://github.com/mitre88/nexterm/issues/new?template=bug_report.md"
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ fontSize: 28 }}>🐛</span>
              <div>
                <h2 style={{ fontWeight: 600, fontSize: 17, color: "#fafafa", marginBottom: 6 }}>
                  Report a Bug
                </h2>
                <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.6 }}>
                  Found something broken? Open a GitHub issue with reproduction steps and system
                  info (macOS version, Apple Silicon model).
                </p>
                <span style={{ color: "#22c55e", fontSize: 13, marginTop: 8, display: "block" }}>
                  github.com/mitre88/nexterm/issues →
                </span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/mitre88/nexterm/discussions"
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ fontSize: 28 }}>💬</span>
              <div>
                <h2 style={{ fontWeight: 600, fontSize: 17, color: "#fafafa", marginBottom: 6 }}>
                  Ask a Question
                </h2>
                <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.6 }}>
                  Have a question about setup, API keys, or features? Start a discussion on
                  GitHub. The community and maintainers actively respond.
                </p>
                <span style={{ color: "#22c55e", fontSize: 13, marginTop: 8, display: "block" }}>
                  github.com/mitre88/nexterm/discussions →
                </span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/mitre88/nexterm/issues/new?template=feature_request.md"
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ fontSize: 28 }}>✨</span>
              <div>
                <h2 style={{ fontWeight: 600, fontSize: 17, color: "#fafafa", marginBottom: 6 }}>
                  Request a Feature
                </h2>
                <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.6 }}>
                  Have an idea? Open a feature request. We prioritize requests from the
                  community. Better yet — submit a pull request.
                </p>
                <span style={{ color: "#22c55e", fontSize: 13, marginTop: 8, display: "block" }}>
                  github.com/mitre88/nexterm/issues →
                </span>
              </div>
            </div>
          </a>
        </div>

        <div
          style={{
            background: "#0f0f12",
            border: "1px solid #27272a",
            borderRadius: 12,
            padding: "32px 28px",
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 20, color: "#fafafa", marginBottom: 16 }}>
            Common Issues
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                q: "Why is my API key not working?",
                a: "Ensure your API key is valid and has the correct permissions. Keys are stored in macOS Keychain — you can update them in Nexterm preferences.",
              },
              {
                q: "Nexterm requires macOS 14 or later?",
                a: "Yes. Nexterm uses Swift 6, Metal, and modern SwiftUI APIs that require macOS 14 (Sonoma) or later. Apple Silicon is required for optimal performance.",
              },
              {
                q: "How do I connect a local Ollama model?",
                a: "Set your Ollama endpoint to http://localhost:11434 in Nexterm preferences. Make sure Ollama is running with `ollama serve`.",
              },
              {
                q: "Can I use Nexterm on Intel Mac?",
                a: "Nexterm is optimized for Apple Silicon (M1/M2/M3/M4). It may run on Intel Macs but NEON SIMD optimizations will fall back to generic paths.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 style={{ fontWeight: 600, fontSize: 15, color: "#fafafa", marginBottom: 6 }}>
                  {item.q}
                </h3>
                <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.6 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
