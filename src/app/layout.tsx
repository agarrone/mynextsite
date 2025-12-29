import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

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
      <body className="antialiased">
        <div className="fixed right-5 top-5 z-50 flex items-center gap-3">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
