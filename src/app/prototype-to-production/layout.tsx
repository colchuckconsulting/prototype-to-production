import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    template: "%s | Prototype to Production™ — Colchuck Consulting",
    default: "Prototype to Production™ — Colchuck Consulting",
  },
  description:
    "A structured upgrade path for AI-built apps that need ownership, security, and a scalable foundation.",
};

export default function P2PLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SiteHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <SiteFooter />
    </div>
  );
}
