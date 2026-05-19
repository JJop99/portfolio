import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="top">
      <div className="container">
        <div className="top-row">
          <Link className="wordmark-sm" href="/">
            Jacopo <em>J</em>op
          </Link>
          <nav className="top-nav">
            <Link href="/#services">Services</Link>
            <Link href="/#about">About</Link>
            {/* Link to contact section; navigates back from detail pages via hash */}
            <Link href="/#contact" className="cta">
              Let&apos;s talk
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
