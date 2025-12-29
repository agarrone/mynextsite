import Link from "next/link";
import { Undo2 } from "lucide-react";
import { fetchNotionEntries, groupEntriesByYear } from "@/lib/notion";
const WRITING_CATEGORY = "Writing";

export default async function WritingPage() {
  const entries = await fetchNotionEntries(WRITING_CATEGORY);
  const grouped = groupEntriesByYear(entries);

  return (
    <div className="flex min-h-screen justify-center bg-[var(--background)] text-[var(--text-primary)]">
      <main className="flex w-full max-w-[550px] flex-col justify-center px-5 sm:px-4 md:px-6">
        <section className="fade-up flex flex-col gap-5 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[16px] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:underline"
          >
            <Undo2 className="h-4 w-4" />
            Home
          </Link>
          <h1 className="text-[20px] font-semibold leading-[1.6]">Writing</h1>
          <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
            Quelques écrits dont j’ai pu me souvenir et retrouver la trace ainsi
            que certaines réflexions personnelles.
          </p>

          <div className="flex flex-col gap-5">
            {grouped.map(([year, items]) => (
              <div key={year} className="flex flex-col gap-2.5">
                <p className="text-[16px] text-[var(--text-muted)]">{year}</p>
                <div className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      {item.coverUrl ? (
                        <img
                          src={item.coverUrl}
                          alt=""
                          className="h-4 w-4 rounded-[3px] object-contain"
                        />
                      ) : (
                        <div className="h-4 w-4 rounded-[3px] bg-[var(--border)]" />
                      )}
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[16px] text-[var(--text-primary)] hover:underline"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span className="text-[16px] text-[var(--text-primary)]">
                          {item.title}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {grouped.length === 0 && (
              <p className="text-[16px] text-[var(--text-muted)]">
                Aucun article pour le moment.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
