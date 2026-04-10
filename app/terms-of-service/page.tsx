import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Nexterm",
  description: "Nexterm terms of service. MIT licensed open source software.",
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

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p style={{ color: "#71717a", fontSize: 14 }}>Last updated: April 6, 2026</p>
        </div>

        <div style={sectionStyle}>
          <p style={{ ...paraStyle, fontSize: 16, color: "#fafafa" }}>
            By using Nexterm, you agree to these terms. Nexterm is free, open source software
            distributed under the MIT License.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>License</h2>
          <p style={paraStyle}>
            Nexterm is released under the MIT License. You are free to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the software, subject to the
            conditions of the MIT License. The full license text is available in the{" "}
            <a
              href="https://github.com/mitre88/nexterm"
              style={{ color: "#22c55e", textDecoration: "none" }}
            >
              GitHub repository
            </a>
            .
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Description of Service</h2>
          <p style={paraStyle}>
            Nexterm is a native macOS terminal emulator with an integrated multi-model AI
            assistant. The software is provided as-is for developer use.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Third-Party AI Services</h2>
          <p style={paraStyle}>
            Nexterm integrates with third-party AI providers (Anthropic, OpenAI, Google,
            Ollama, and others). Your use of these services is governed by their respective
            terms and privacy policies. NexTechia is not responsible for the availability,
            accuracy, or content of these third-party services.
          </p>
          <p style={paraStyle}>
            You are responsible for obtaining and managing your own API keys. You agree to use
            these services in compliance with each provider&apos;s terms of service.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Acceptable Use</h2>
          <p style={paraStyle}>You agree not to use Nexterm to:</p>
          <ul
            style={{
              color: "#a1a1aa",
              fontSize: 15,
              lineHeight: 1.8,
              paddingLeft: 24,
              marginBottom: 12,
            }}
          >
            <li>Violate any applicable law or regulation</li>
            <li>Infringe on intellectual property rights of others</li>
            <li>Engage in any activity that harms NexTechia or other users</li>
            <li>Attempt to reverse engineer components beyond what MIT License permits</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Limitation of Liability</h2>
          <p style={paraStyle}>
            Nexterm is provided &quot;AS IS&quot; without warranty of any kind. NexTechia shall not be
            liable for any damages arising from the use or inability to use Nexterm, including
            but not limited to direct, indirect, incidental, special, or consequential damages.
          </p>
          <p style={paraStyle}>
            You assume full responsibility for any data loss, system changes, or other
            consequences resulting from the use of Nexterm&apos;s AI-powered tools.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Intellectual Property</h2>
          <p style={paraStyle}>
            The Nexterm name, logo, and branding are property of NexTechia. The source code is
            MIT licensed. Third-party libraries used by Nexterm retain their respective licenses.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Changes to Terms</h2>
          <p style={paraStyle}>
            NexTechia reserves the right to modify these terms at any time. Changes will be
            posted to this page with an updated date. Continued use of Nexterm after changes
            constitutes acceptance of the new terms.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Governing Law</h2>
          <p style={paraStyle}>
            These terms shall be governed by applicable law. Any disputes shall be resolved
            through binding arbitration or in courts of competent jurisdiction.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Contact</h2>
          <p style={paraStyle}>
            For questions about these terms, open an issue on{" "}
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
