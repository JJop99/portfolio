import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacopo Jop — Software Developer",
  description:
    "Computer Engineering graduate from the University of Bologna, based in Wellington NZ. Passionate about software development, AI, and innovative technologies.",
  openGraph: {
    title: "Jacopo Jop — Software Developer",
    description:
      "Portfolio of Jacopo Jop — full-stack developer based in Wellington, NZ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
