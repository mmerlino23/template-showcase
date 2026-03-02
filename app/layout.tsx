import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Design Gallery | Merlino Digital",
  description:
    "Browse 20+ premium website templates. Pick your style — we build it with your brand, your content, your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
