import InteractiveFrog from "../components/InteractiveFrog";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#ffffff] text-[#1c222e]">
      <main className="flex min-h-screen w-full max-w-[550px] flex-col justify-center px-5">
        <section className="fade-up flex flex-col gap-2.5 py-10">
          <InteractiveFrog />

          <div className="flex flex-col gap-2.5">
            <h1 className="text-[20px] font-semibold tracking-tight">
              Antonin Garrone
            </h1>
            <p className="text-[16px] leading-relaxed text-[#1c222e]">
              I am a product manager based in Paris, currently the product lead
              for the public data platform{" "}
              <a
                href="https://www.data.gouv.fr"
                className="text-[#1c222e] transition-colors hover:underline"
              >
                data.gouv.fr
              </a>
              .
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-2.5 text-[16px] text-[#7a7a7a]">
              <a
                className="transition-colors hover:text-[#1c222e] hover:underline"
                href="/writing"
              >
                Writing
              </a>
              <a
                className="transition-colors hover:text-[#1c222e] hover:underline"
                href="/speaking"
              >
                Speaking
              </a>
            <a
              className="transition-colors hover:text-[#1c222e] hover:underline"
              href="/work"
            >
              Work
            </a>
            <a
              className="transition-colors hover:text-[#1c222e] hover:underline"
              href="/contact"
            >
              Contact
            </a>
            <button
              type="button"
              className="text-[#7a7a7a] transition-colors hover:text-[#1c222e] hover:underline"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Socials
            </button>
          </nav>
        </section>
      </main>
    </div>
  );
}
