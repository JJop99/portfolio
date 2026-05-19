import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacopo Jop — Software Developer",
  description:
    "Computer Engineering graduate from the University of Bologna, based in Wellington NZ. Full-stack developer with a focus on AI.",
  openGraph: {
    title: "Jacopo Jop — Software Developer",
    description: "Portfolio of Jacopo Jop — full-stack developer based in Wellington, NZ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('kit-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
