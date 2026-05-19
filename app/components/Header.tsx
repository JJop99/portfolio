import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="top">
      <div className="container">
        <div className="top-row">
          <a className="wordmark-sm" href="#">
            Jacopo <em>J</em>op
          </a>
          <nav className="top-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="cta">
              Let&apos;s talk
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
