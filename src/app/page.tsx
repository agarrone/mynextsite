import type { Metadata } from "next";
import InteractiveFrog from "../components/InteractiveFrog";

const navLabels = {
  writing: "Writing",
  speaking: "Speaking",
  work: "Work",
  contact: "Contact & Socials",
};

export const metadata: Metadata = {
  title: "Antonin Garrone | Product Manager",
  description:
    "Antonin Garrone is a product manager based in Paris, currently leading the public data platform data.gouv.fr.",
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonin Garrone",
  url: "https://agarrone.fr",
  image: "https://agarrone.fr/og.png",
  jobTitle: "Product Manager",
  worksFor: {
    "@type": "Organization",
    name: "data.gouv.fr",
    url: "https://www.data.gouv.fr",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/in/antonin-garrone-8272bb154/",
    "https://github.com/agarrone",
    "https://x.com/antonin_garrone",
    "https://bsky.app/profile/agarrone.bsky.social",
    "https://mastodon.social/@agarrone",
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[var(--background)] text-[var(--text-primary)]">
      <main className="flex min-h-screen w-full max-w-[550px] flex-col justify-center px-5 sm:px-4 md:px-6">
        <section className="fade-up flex flex-col gap-2.5 py-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personSchema),
            }}
          />
          <InteractiveFrog />

          <div className="flex flex-col gap-2.5">
            <h1 className="text-[20px] font-semibold tracking-tight">
              Antonin Garrone
            </h1>
            <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
              Je suis product manager basé à Paris, actuellement responsable
              produit de la plateforme de données publiques{" "}
              <a
                href="https://www.data.gouv.fr"
                className="text-[var(--text-primary)] transition-colors hover:underline"
              >
                data.gouv.fr
              </a>
              .
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-2.5 text-[16px] text-[var(--text-muted)]">
              <a
                className="transition-colors hover:text-[var(--text-primary)] hover:underline"
                href="/writing"
              >
                {navLabels.writing}
              </a>
              <a
                className="transition-colors hover:text-[var(--text-primary)] hover:underline"
                href="/speaking"
              >
                {navLabels.speaking}
              </a>
            <a
              className="transition-colors hover:text-[var(--text-primary)] hover:underline"
              href="/work"
            >
              {navLabels.work}
            </a>
            <a
              className="transition-colors hover:text-[var(--text-primary)] hover:underline"
              href="/contact"
            >
              {navLabels.contact}
            </a>
          </nav>
        </section>
      </main>
    </div>
  );
}
