import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://agarrone.fr"),
  title: "Antonin Garrone",
  description:
    "Product manager based in Paris, currently leading the public data platform data.gouv.fr.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/frog/Favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/frog/Favicon.png",
    apple: "/frog/Favicon.png",
  },
  openGraph: {
    title: "Antonin Garrone",
    description:
      "Product manager based in Paris, currently leading the public data platform data.gouv.fr.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonin Garrone",
    description:
      "Product manager based in Paris, currently leading the public data platform data.gouv.fr.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src="https://cdn.seline.com/seline.js"
          data-token="29a7745505096dc"
        />
      </head>
      <body className="antialiased">
        <div className="fixed right-5 top-5 z-50 flex items-center gap-3">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
