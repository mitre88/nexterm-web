"use client";

import { motion, type Variants } from "framer-motion";

// ─── Animation helpers ──────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid #27272a",
        background: "rgba(9,9,11,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            fontWeight: 700,
            fontSize: 20,
            color: "#fafafa",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#22c55e" }}>&gt;</span>
          {"_"}nexterm
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#features" style={navLinkStyle}>Features</a>
          <a href="#architecture" style={navLinkStyle}>Architecture</a>
          <a
            href="https://github.com/mitre88/nexterm"
            target="_blank"
            rel="noopener noreferrer"
            style={navLinkStyle}
          >
            GitHub
          </a>
          <span
            style={{
              padding: "6px 16px",
              borderRadius: 8,
              border: "1px solid #27272a",
              color: "#71717a",
              fontSize: 14,
              fontWeight: 500,
              cursor: "default",
              userSelect: "none",
            }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#a1a1aa",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 500,
};

// ─── Terminal Mockup ─────────────────────────────────────────────────────────

function TerminalMockup() {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #27272a",
        background: "#0f0f12",
        overflow: "hidden",
        boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
        fontSize: 13,
        lineHeight: "1.6",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "#18181b",
          borderBottom: "1px solid #27272a",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
        <span style={{ marginLeft: 12, color: "#71717a", fontSize: 12 }}>
          nexterm — ~/projects/myapp — 120fps
        </span>
      </div>

      {/* Split view */}
      <div style={{ display: "flex" }}>
        {/* Left: Terminal */}
        <div
          style={{
            flex: 1,
            padding: "16px 20px",
            borderRight: "1px solid #27272a",
            minHeight: 320,
          }}
        >
          <div style={{ color: "#a1a1aa", marginBottom: 4 }}>
            <span style={{ color: "#22c55e" }}>~/projects/myapp</span>
            <span style={{ color: "#71717a" }}> on </span>
            <span style={{ color: "#a78bfa" }}>main</span>
          </div>
          <div>
            <span style={{ color: "#22c55e" }}>❯ </span>
            <span style={{ color: "#fafafa" }}>npm run build</span>
          </div>
          <div style={{ marginTop: 8 }}>
            <div style={{ color: "#71717a" }}>▲ Next.js 15.2.0</div>
            <div>
              <span style={{ color: "#06b6d4" }}>✓</span>
              <span style={{ color: "#71717a" }}> Compiled in 2.1s</span>
            </div>
            <div>
              <span style={{ color: "#06b6d4" }}>✓</span>
              <span style={{ color: "#71717a" }}> Collecting page data</span>
            </div>
            <div>
              <span style={{ color: "#06b6d4" }}>✓</span>
              <span style={{ color: "#71717a" }}> Generating static pages (12/12)</span>
            </div>
          </div>
          <div style={{ marginTop: 8, color: "#22c55e" }}>Route (app){"                "}Size</div>
          <div style={{ color: "#a1a1aa" }}>{"┌ ○ /                        4.2 kB"}</div>
          <div style={{ color: "#a1a1aa" }}>{"├ ○ /about                    2.1 kB"}</div>
          <div style={{ color: "#a1a1aa" }}>{"└ ○ /api/route               1.8 kB"}</div>
          <div style={{ marginTop: 12 }}>
            <span style={{ color: "#22c55e" }}>❯ </span>
            <span style={{ color: "#fafafa", opacity: 0.6 }}>█</span>
          </div>
        </div>

        {/* Right: AI Chat */}
        <div style={{ flex: 1, padding: "16px 20px", minHeight: 320, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              background: "#18181b",
              borderRadius: 8,
              padding: "8px 12px",
              marginBottom: 12,
              borderLeft: "2px solid #a78bfa",
            }}
          >
            <div style={{ color: "#a78bfa", fontSize: 11, marginBottom: 4 }}>
              NEXTERM AI — claude-opus-4
            </div>
            <div style={{ color: "#a1a1aa", fontSize: 12 }}>
              Build succeeded. 3 routes optimized. Want me to analyze the bundle size?
            </div>
          </div>

          <div
            style={{
              background: "#1c1c20",
              borderRadius: 8,
              padding: "8px 12px",
              marginBottom: 12,
              borderLeft: "2px solid #22c55e",
            }}
          >
            <div style={{ color: "#22c55e", fontSize: 11, marginBottom: 4 }}>YOU</div>
            <div style={{ color: "#fafafa", fontSize: 12 }}>
              Yes, and check for unused dependencies
            </div>
          </div>

          <div
            style={{
              background: "#18181b",
              borderRadius: 8,
              padding: "8px 12px",
              marginBottom: 12,
              borderLeft: "2px solid #a78bfa",
            }}
          >
            <div style={{ color: "#a78bfa", fontSize: 11, marginBottom: 4 }}>
              NEXTERM AI — tool: shell_exec
            </div>
            <div style={{ color: "#06b6d4", fontSize: 12 }}>
              <span style={{ color: "#71717a" }}>$ </span>
              npx depcheck --json
            </div>
            <div style={{ color: "#a1a1aa", fontSize: 12, marginTop: 4 }}>
              Found 2 unused: lodash, moment
              <br />
              Potential savings: 312 kB
            </div>
          </div>

          <div style={{ flex: 1 }} />

          <div
            style={{
              borderTop: "1px solid #27272a",
              paddingTop: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                flex: 1,
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 6,
                padding: "6px 12px",
                color: "#71717a",
                fontSize: 12,
              }}
            >
              Ask AI anything...
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "#22c55e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                color: "#09090b",
                fontWeight: 700,
              }}
            >
              ↑
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        paddingTop: 140,
        paddingBottom: 100,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}
      >
        <motion.div variants={fadeUp}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 14px",
              borderRadius: 20,
              border: "1px solid #27272a",
              background: "#18181b",
              color: "#22c55e",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 32,
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            Open Source · MIT License
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: 24,
            fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
          }}
        >
          The terminal,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22c55e, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            reimagined for AI.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 18,
            color: "#a1a1aa",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Native macOS terminal emulator with multi-model AI assistant. Metal-rendered.
          Apple Silicon optimized. Open source.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="https://github.com/mitre88/nexterm"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 10,
              background: "#fafafa",
              color: "#09090b",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            <span>⭐</span> View on GitHub
          </a>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 10,
              border: "1px solid #27272a",
              background: "#18181b",
              color: "#71717a",
              fontWeight: 600,
              fontSize: 15,
              cursor: "default",
            }}
          >
            <span>🍎</span> macOS — Coming Soon
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        style={{ marginTop: 72, maxWidth: 900, margin: "72px auto 0" }}
      >
        <TerminalMockup />
      </motion.div>
    </section>
  );
}

// ─── Features ───────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "🚀",
    title: "Metal Rendering",
    desc: "GPU-accelerated text rendering. 120fps on ProMotion. Zero Electron.",
  },
  {
    icon: "🤖",
    title: "Multi-Model AI",
    desc: "Anthropic, OpenAI, Google, Ollama. Bring your own API keys.",
  },
  {
    icon: "🛠️",
    title: "40+ Tools",
    desc: "File ops, shell exec, grep, glob, web fetch. AI sees and modifies your code.",
  },
  {
    icon: "🔌",
    title: "MCP Protocol",
    desc: "Connect to any Model Context Protocol server for extended capabilities.",
  },
  {
    icon: "⚡",
    title: "Apple Silicon",
    desc: "NEON SIMD parsing, unified memory, efficiency cores. Built FOR M-series.",
  },
  {
    icon: "🎯",
    title: "Vim Mode",
    desc: "Full vim emulation. Motions, operators, text objects in the input area.",
  },
];

function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#22c55e",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            }}
          >
            Features
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 12,
              letterSpacing: "-0.03em",
            }}
          >
            Everything a power user needs
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 16, marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
            No Electron. No compromises. Native Swift from the ground up.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ borderColor: "#3f3f46" }}
              style={{
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 12,
                padding: "28px 28px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontWeight: 600, fontSize: 17, marginBottom: 8, color: "#fafafa" }}>
                {f.title}
              </h3>
              <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Architecture ────────────────────────────────────────────────────────────

const MODULES = [
  { name: "NXCore", desc: "String handling, VT100 parser, NEON SIMD" },
  { name: "NXAI", desc: "Multi-model AI client, tool execution, streaming" },
  { name: "NXEngine", desc: "Terminal state machine, buffer management" },
  { name: "NXTools", desc: "40+ built-in tools for AI: file, shell, web" },
  { name: "NXTerminal", desc: "PTY lifecycle, process management" },
  { name: "NXUI", desc: "SwiftUI views, Metal renderer, animations" },
  { name: "NXCommands", desc: "Command palette, keybindings, vim mode" },
  { name: "NXPlugins", desc: "Plugin API, extension system" },
  { name: "NXMCP", desc: "Model Context Protocol client & server bridge" },
];

const MODULE_COLORS: Record<string, string> = {
  NXCore: "#22c55e",
  NXAI: "#a78bfa",
  NXEngine: "#06b6d4",
  NXTools: "#f59e0b",
  NXTerminal: "#22c55e",
  NXUI: "#06b6d4",
  NXCommands: "#f59e0b",
  NXPlugins: "#a78bfa",
  NXMCP: "#a78bfa",
};

function Architecture() {
  return (
    <section
      id="architecture"
      style={{
        padding: "100px 24px",
        background: "#0f0f12",
        borderTop: "1px solid #27272a",
        borderBottom: "1px solid #27272a",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#06b6d4",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            }}
          >
            Architecture
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 12,
              letterSpacing: "-0.03em",
            }}
          >
            9 focused Swift packages
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 16, marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>
            Clean SPM architecture. Each module does one thing well.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
          <div
            style={{
              background: "#09090b",
              border: "1px solid #27272a",
              borderRadius: 12,
              padding: "32px 24px",
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
              fontSize: 14,
              color: "#a1a1aa",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 2.4,
              textAlign: "center",
            }}
          >
            <div>
              <span style={{ color: "#22c55e" }}>NXCore</span>
              {" → "}
              <span style={{ color: "#a78bfa" }}>NXAI</span>
              {" → "}
              <span style={{ color: "#06b6d4" }}>NXEngine</span>
              {" ← "}
              <span style={{ color: "#f59e0b" }}>NXTools</span>
            </div>
            <div style={{ color: "#52525b" }}>{"↓"}</div>
            <div>
              <span style={{ color: "#22c55e" }}>NXTerminal</span>
              {" → "}
              <span style={{ color: "#06b6d4" }}>NXUI</span>
              {" ← "}
              <span style={{ color: "#f59e0b" }}>NXCommands</span>
            </div>
            <div style={{ color: "#52525b" }}>{"↓"}</div>
            <div>
              <span style={{ color: "#a78bfa" }}>NXPlugins</span>
              {" ← "}
              <span style={{ color: "#a78bfa" }}>NXMCP</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {MODULES.map((mod) => (
            <motion.div
              key={mod.name}
              variants={fadeUp}
              style={{
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 10,
                padding: "20px 20px",
              }}
            >
              <div
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
                  fontWeight: 600,
                  fontSize: 14,
                  color: MODULE_COLORS[mod.name] ?? "#06b6d4",
                  marginBottom: 6,
                }}
              >
                {mod.name}
              </div>
              <p style={{ color: "#a1a1aa", fontSize: 13, lineHeight: 1.5 }}>{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Models ──────────────────────────────────────────────────────────────────

const PROVIDERS = [
  {
    name: "Anthropic",
    color: "#a78bfa",
    models: ["Claude Opus 4", "Claude Sonnet 4", "Claude Haiku 3.5"],
  },
  {
    name: "OpenAI",
    color: "#22c55e",
    models: ["GPT-4o", "o3-mini", "o1-preview"],
  },
  {
    name: "Google",
    color: "#06b6d4",
    models: ["Gemini 2.5 Pro (soon)", "Gemini Flash"],
  },
  {
    name: "Ollama",
    color: "#f59e0b",
    models: ["Llama 3.3", "Mistral", "Any local model"],
  },
  {
    name: "Custom",
    color: "#71717a",
    models: ["OpenAI-compatible API", "LM Studio", "Any endpoint"],
  },
];

function Models() {
  return (
    <section
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#a78bfa",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            }}
          >
            AI Models
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 12,
              letterSpacing: "-0.03em",
            }}
          >
            Your keys. Your models.
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 16, marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
            Nexterm never stores your API keys. Bring your own and connect any provider.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {PROVIDERS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              style={{
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 12,
                padding: "24px 28px",
                minWidth: 200,
                flex: "1 1 200px",
                maxWidth: 240,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: p.color,
                  }}
                />
                <span style={{ fontWeight: 600, fontSize: 15, color: "#fafafa" }}>
                  {p.name}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {p.models.map((m) => (
                  <div
                    key={m}
                    style={{
                      fontSize: 13,
                      color: m.includes("soon") ? "#52525b" : "#a1a1aa",
                      fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Performance ─────────────────────────────────────────────────────────────

const STATS = [
  { value: "120", unit: "fps", label: "ProMotion display support" },
  { value: "< 5", unit: "ms", label: "Input-to-render latency" },
  { value: "0", unit: "", label: "Electron. Pure native Swift." },
  { value: "9", unit: "", label: "Clean SPM modules" },
];

function Performance() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0f0f12",
        borderTop: "1px solid #27272a",
        borderBottom: "1px solid #27272a",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              color: "#22c55e",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            }}
          >
            Performance
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 12,
              letterSpacing: "-0.03em",
            }}
          >
            Built for speed, not compatibility
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 2,
          }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              style={{
                textAlign: "center",
                padding: "40px 24px",
                background: "#18181b",
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
                  fontWeight: 800,
                  fontSize: "clamp(40px, 5vw, 64px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                <span style={{ color: "#22c55e" }}>{s.value}</span>
                {s.unit && (
                  <span style={{ color: "#06b6d4", fontSize: "0.5em", marginLeft: 4 }}>
                    {s.unit}
                  </span>
                )}
              </div>
              <p style={{ color: "#a1a1aa", fontSize: 14 }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Open Source ─────────────────────────────────────────────────────────────

function OpenSource() {
  return (
    <section
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>🐙</div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Open Source. Forever.
          </h2>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            Nexterm is MIT licensed. Built by NexTechia. Inspect every line, fork it,
            contribute. No surveillance. No telemetry. No subscriptions.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/mitre88/nexterm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                borderRadius: 10,
                background: "#22c55e",
                color: "#09090b",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              ⭐ Star on GitHub
            </a>
            <a
              href="https://github.com/mitre88/nexterm/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                borderRadius: 10,
                border: "1px solid #27272a",
                background: "#18181b",
                color: "#fafafa",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              🐛 Report Issue
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} style={{ marginTop: 56 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              padding: "20px 40px",
              borderRadius: 12,
              background: "#18181b",
              border: "1px solid #27272a",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["MIT License", "Swift 6", "macOS 14+", "Apple Silicon"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
                  fontSize: 13,
                  color: "#a1a1aa",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "#22c55e" }}>✓</span>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #27272a",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
            fontWeight: 700,
            fontSize: 16,
            color: "#fafafa",
          }}
        >
          <span style={{ color: "#22c55e" }}>&gt;</span>
          {"_"}nexterm
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="/privacy-policy" style={footerLinkStyle}>Privacy Policy</a>
          <a href="/terms-of-service" style={footerLinkStyle}>Terms of Service</a>
          <a href="/support" style={footerLinkStyle}>Support</a>
          <a
            href="https://github.com/mitre88/nexterm"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            GitHub
          </a>
        </div>

        <div style={{ color: "#52525b", fontSize: 13 }}>
          Built by <span style={{ color: "#a1a1aa" }}>NexTechia</span>
          {" · "}MIT License{" · "}2026
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle: React.CSSProperties = {
  color: "#71717a",
  textDecoration: "none",
  fontSize: 13,
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <Models />
        <Performance />
        <OpenSource />
      </main>
      <Footer />
    </>
  );
}
