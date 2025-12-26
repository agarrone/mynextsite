import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen justify-center bg-[#ffffff] text-[#1c222e]">
      <main className="flex w-full max-w-[550px] flex-col justify-center px-5">
        <section className="fade-up flex flex-col gap-5 py-10">
          <div className="h-[75px] w-[81px]">
            <img
              src="/404.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-[16px] font-semibold leading-[1.6] text-[#1c222e]">
            Oops, this page doesn’t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[16px] leading-[1.6] text-[#7a7a7a] hover:text-[#1c222e] hover:underline"
          >
            <Undo2 className="h-4 w-4" />
            Home
          </Link>
        </section>
      </main>
    </div>
  );
}
