import Link from "next/link";
import classes from "./SiteFooter.module.css";

const footerLinks = [
  { label: "Services", href: "/prototype-to-production/services" },
  { label: "Architecture", href: "/prototype-to-production/architecture" },
  { label: "About", href: "/prototype-to-production/about" },
  { label: "Book a Call", href: "/prototype-to-production/book" },
];

export function SiteFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.top}>
          <div>
            <div className={classes.logoMain}>Colchuck Consulting</div>
            <div className={classes.logoSub}>Prototype to Production™</div>
          </div>

          <div>
            <div className={classes.navLabel}>Offering</div>
            <nav className={classes.navLinks}>
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className={classes.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className={classes.bottom}>
          <span className={classes.bottomText}>
            © {new Date().getFullYear()} Colchuck Consulting. All rights reserved.
          </span>
          <span className={classes.bottomText}>
            Prototype to Production™ is a service offering by Colchuck Consulting.
          </span>
        </div>
      </div>
    </footer>
  );
}
