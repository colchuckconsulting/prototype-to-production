"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import classes from "./SiteHeader.module.css";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Architecture", href: "/architecture" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={classes.header} style={{ position: "relative" }}>
      <div className={classes.inner}>
        <Link href="/" className={classes.logo}>
          <span className={classes.logoMain}>Colchuck Consulting</span>
          <span className={classes.logoSub}>Prototype to Production™</span>
        </Link>

        <nav className={classes.links}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
          <span className={classes.ctaLink}>
            <Button
              component={Link}
              href="/book"
              variant="filled"
              color="brand"
              size="sm"
              radius="md"
            >
              Book a Call
            </Button>
          </span>
        </nav>

        <button
          className={classes.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line
                  x1="3"
                  y1="3"
                  x2="19"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="19"
                  y1="3"
                  x2="3"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <line
                  x1="3"
                  y1="6"
                  x2="19"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="3"
                  y1="11"
                  x2="19"
                  y2="11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="3"
                  y1="16"
                  x2="19"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className={classes.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={classes.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className={classes.mobileLink}
            onClick={() => setMenuOpen(false)}
            style={{ color: "#1db954", fontWeight: 600 }}
          >
            Book a Strategy Call →
          </Link>
        </div>
      )}
    </header>
  );
}
