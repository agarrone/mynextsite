import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antonin Garrone",
  description:
    "Product manager based in Paris, currently leading the public data platform data.gouv.fr.",
  icons: {
    icon: "/frog/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
