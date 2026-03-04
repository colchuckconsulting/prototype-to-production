import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container } from "@mantine/core";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Colchuck Consulting is a senior engineering practice focused on helping AI-enabled founders build production-grade infrastructure. Based in the Pacific Northwest.",
};

const values = [
  {
    title: "Senior engineering, not agency overhead",
    desc: "You work directly with a senior engineer. No account managers, no junior-dev handoffs, no bloated team structures billing you for internal meetings.",
  },
  {
    title: "Pro-AI, pro-velocity",
    desc: "We embrace AI-assisted development. Claude Code, Cursor, Copilot — these are real productivity tools. Our job is to give them a real foundation to build on.",
  },
  {
    title: "Calm, direct, strategic",
    desc: "No hype. No scare tactics. No unnecessary complexity. Just honest assessment and pragmatic architecture recommendations matched to your stage.",
  },
  {
    title: "Sustainable AI development",
    desc: "Fast shipping without discipline creates fragile systems. We help founders build the habits — CI/CD, environment separation, code ownership — that let AI velocity compound safely over time.",
  },
];

const expertise = [
  "Cloud infrastructure (AWS, GCP)",
  "Supabase, PostgreSQL, RDS/Aurora",
  "CI/CD with GitHub Actions",
  "Terraform infrastructure-as-code",
  "Next.js, React, TypeScript",
  "Docker, ECS Fargate, Kubernetes",
  "Security auditing and hardening",
  "AI-assisted development workflows",
  "Technical due diligence",
  "Engineering team mentorship",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #060f06 0%, #0d1f0d 60%, #091409 100%)",
          padding: "4rem 1.5rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(29,185,84,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <Container size="lg" style={{ position: "relative" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1db954",
              marginBottom: "0.75rem",
            }}
          >
            Colchuck Consulting
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            About
          </h1>
          <p style={{ color: "#b8d4b8", fontSize: "1.05rem", maxWidth: "580px", lineHeight: 1.7 }}>
            Senior engineering. Calm strategy. Infrastructure for the AI era.
          </p>
        </Container>
      </section>

      {/* Main about section */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#1db954",
                  marginBottom: "0.75rem",
                }}
              >
                The Practice
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.5rem",
                }}
              >
                Built on the belief that the AI era needs a real infrastructure layer.
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Colchuck Consulting is a senior engineering practice focused on
                helping AI-enabled founders transition from fast prototypes to
                production-grade systems — without losing the velocity that got
                them there.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                AI tools like Lovable, Replit, and Claude Code have fundamentally
                changed how software gets built. That&apos;s genuinely good. But the
                layer beneath — infrastructure, security, deployment discipline —
                still needs to be built by engineers who understand it deeply.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Prototype to Production™ is a structured framework for that
                transition. It&apos;s not a migration service. It&apos;s not a dev agency
                retainer. It&apos;s a defined path from where you are to where you
                need to be — with clear deliverables, honest timelines, and no
                unnecessary complexity added along the way.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.8 }}>
                The name comes from Colchuck Lake — a destination in the Cascade
                Mountains of Washington State. Getting there requires real effort
                and a real trail. But the view from the other side is worth it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  padding: "2rem",
                  background: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  Areas of Expertise
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {expertise.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#333" }}>
                      <span style={{ color: "#1db954", fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  background: "#f8fff8",
                  border: "1px solid rgba(29, 185, 84, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}
                >
                  Pacific Northwest based.
                </div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Working with founders across the US and internationally. Remote-first, async-friendly.
                </div>
                <Button
                  component={Link}
                  href="/prototype-to-production/book"
                  variant="filled"
                  color="brand"
                  size="sm"
                  radius="md"
                  fullWidth
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section style={{ padding: "5rem 1.5rem", background: "#f8f9fa" }}>
        <Container size="lg">
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1db954",
              marginBottom: "0.5rem",
            }}
          >
            How We Work
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "2.5rem",
            }}
          >
            What you can expect.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: "1.75rem 1.75rem 1.75rem 2.25rem",
                  background: "#fff",
                  border: "1px solid #e9ecef",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: "5px",
                    background: "linear-gradient(180deg, #1db954, #1ed760)",
                    borderRadius: "10px 0 0 10px",
                  }}
                />
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  {v.title}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65 }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we're not */}
      <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
        <Container size="lg">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#1db954",
                  marginBottom: "0.5rem",
                }}
              >
                What We Are
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.25rem",
                }}
              >
                Prototype to Production™ is:
              </h3>
              {[
                "A structured upgrade path",
                "A production-readiness framework",
                "An infrastructure maturity layer",
                "Pro-AI and pro-velocity",
                "Fixed-scope with defined deliverables",
                "Senior engineering at every step",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "#333", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#1db954", fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "0.5rem",
                }}
              >
                What We&apos;re Not
              </div>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "1.25rem",
                }}
              >
                It is NOT:
              </h3>
              {[
                "A cheap migration service",
                "Anti-vibe coding or anti-AI",
                "Anti-Supabase (we love Supabase)",
                "A generic dev agency offering",
                "Open-ended hourly billing",
                "Enterprise bureaucracy",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "#555", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#aaa", fontWeight: 700 }}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to work together?"
        body="Book a 30-minute strategy call. We'll assess your current situation, discuss where you want to go, and determine whether there's a fit."
        primaryLabel="Book a Strategy Call"
        primaryHref="/prototype-to-production/book"
        secondaryLabel="View Services"
        secondaryHref="/prototype-to-production/services"
      />
    </>
  );
}
