import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function ContactPage() {
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

          <div className="flex flex-col gap-2.5">
            <h1 className="text-[20px] font-semibold leading-[1.6]">Contact</h1>
            <p className="text-[16px] leading-relaxed text-[#1c222e]">
              Une question, une idée ? Écrivez-moi, je serai ravi d’échanger.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-[16px] text-[#1c222e]">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="mail@exemple.com"
                className="w-full rounded-[10px] border border-[#e5e5e5] px-3 py-2 text-[16px] text-[#1c222e] placeholder:text-[#7a7a7a] focus:border-[#1c222e] focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-2 text-[16px] text-[#1c222e]">
              Votre message
              <textarea
                name="message"
                required
                placeholder="Votre message"
                rows={5}
                className="w-full rounded-[10px] border border-[#e5e5e5] px-3 py-2 text-[16px] text-[#1c222e] placeholder:text-[#7a7a7a] focus:border-[#1c222e] focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="self-start text-[16px] text-[#7a7a7a] hover:text-[#1c222e] hover:underline"
            >
              Envoyer
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
