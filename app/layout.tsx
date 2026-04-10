import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexterm — Native macOS Terminal for AI",
  description:
    "GPU-accelerated terminal emulator with multi-model AI assistant. Built with Swift + Metal for Apple Silicon. Bring your own API keys.",
  metadataBase: new URL("https://nexterm-web.vercel.app"),
  keywords: [
    "macOS terminal",
    "AI terminal",
    "Metal rendering",
    "Apple Silicon",
    "Swift terminal",
    "multi-model AI",
    "Claude",
    "GPT-4",
    "terminal emulator",
  ],
  openGraph: {
    title: "Nexterm — The Terminal, Reimagined for AI",
    description:
      "Native macOS terminal with multi-model AI. Metal-rendered, Apple Silicon optimized. Open source.",
    type: "website",
    url: "https://nexterm-web.vercel.app",
    siteName: "Nexterm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexterm — Native macOS Terminal for AI",
    description:
      "GPU-accelerated terminal emulator with multi-model AI. Built with Swift + Metal for Apple Silicon.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nexterm",
  operatingSystem: "macOS",
  applicationCategory: "DeveloperApplication",
  description:
    "GPU-accelerated terminal emulator with multi-model AI assistant. Built with Swift + Metal for Apple Silicon.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "NexTechia",
  },
  license: "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
