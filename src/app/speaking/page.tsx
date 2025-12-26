import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function SpeakingPage() {
  return (
    <div className="flex min-h-screen justify-center bg-[#ffffff] text-[#1c222e]">
      <main className="flex w-full max-w-[550px] flex-col justify-center px-2">
        <section className="fade-up flex flex-col gap-5 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[16px] text-[#7a7a7a] hover:text-[#1c222e] hover:underline"
          >
            <Undo2 className="h-4 w-4" />
            Home
          </Link>
          <h1 className="text-[20px] font-semibold leading-[1.6]">
            Speaking
          </h1>
          <p className="text-[16px] leading-relaxed text-[#1c222e]">
            Talks and appearances will be listed here soon.
          </p>
          <p className="text-[14px] leading-relaxed text-[#7a7a7a]">
            We will connect this page to the Notion API to fetch events.
          </p>
        </section>
      </main>
    </div>
  );
}
