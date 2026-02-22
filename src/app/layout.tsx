import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Prototype to Production™ — Colchuck Consulting",
    default: "Prototype to Production™ — Colchuck Consulting",
  },
  description:
    "A structured upgrade path for AI-built apps that need ownership, security, and a scalable foundation. Senior engineering — optimized for the AI era.",
  openGraph: {
    title: "Prototype to Production™ | Colchuck Consulting",
    description:
      "From AI Prototype to Production-Grade SaaS. Structured upgrade paths for AI-built apps.",
    siteName: "Colchuck Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <SiteHeader />
            <main style={{ flex: 1 }}>{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
