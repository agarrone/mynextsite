import Link from "next/link";
import { Undo2 } from "lucide-react";
import { fetchNotionEntries, groupEntriesByYear } from "@/lib/notion";

const SPEAKING_CATEGORY = "Speaking";

const teachingEntries = [
  {
    year: "2020",
    title: "Science Po Lille",
    url: "https://www.sciencespo-lille.eu/",
    coverUrl:
      "https://framerusercontent.com/images/jkNGXbowR2kEL6krPO1hCfDEo.png",
  },
  {
    year: "2020",
    title: "Sorbonne Université",
    url: "https://www.sorbonne-universite.fr/",
    coverUrl:
      "https://framerusercontent.com/images/qndSxxhiahZixkM4eABnwNQ4sI.jpg",
  },
];

export default async function SpeakingPage() {
  const entries = await fetchNotionEntries(SPEAKING_CATEGORY);
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
          <h1 className="text-[20px] font-semibold leading-[1.6]">
            Speaking
          </h1>
          <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
            Quelques prise de parole dont j’ai pu me souvenir et retrouver une
            trace.
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
                No speaking entries found yet.
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <h2 className="text-[20px] font-semibold leading-[1.6]">
              Teaching
            </h2>
            <p className="text-[16px] leading-relaxed text-[var(--text-primary)]">
              J’ai eu la chance d’intervenir dans ces universités.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-[16px] text-[var(--text-muted)]">2020</p>
            <div className="flex flex-col gap-2.5">
              {teachingEntries.map((entry) => (
                <div key={entry.title} className="flex items-center gap-3">
                  <img
                    src={entry.coverUrl}
                    alt=""
                    className="h-4 w-4 rounded-[3px] object-contain"
                  />
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[16px] text-[var(--text-primary)] hover:underline"
                  >
                    {entry.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
