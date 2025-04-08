import { AtSign, LockKeyhole } from "lucide-react";
import { login } from "./actions";
import { SubmitButton } from "@/components/SubmitButton";
import Link from "next/link";

export default function Login() {
  return (
    <main className="mx-auto flex h-dvh w-dvw max-w-[556px] flex-col items-center justify-center max-md:px-3">
      <h1 className="font-Georgia mb-2 text-2xl leading-[100%]">NOTO</h1>
      <div className="w-full border-b border-zinc-50"></div>
      <form className="mt-10 w-full">
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="E-mail"
            className="w-full border-b pl-6 outline-none placeholder:text-black"
          />
          <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-black">
            <AtSign size={16} />
          </div>
        </div>
        <div className="relative mt-5">
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full border-b pl-6 outline-none placeholder:text-black"
          />
          <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-black">
            <LockKeyhole size={16} />
          </div>
        </div>
        <SubmitButton name="Login" action={login} />
      </form>
      <footer className="mt-2 w-full text-left">
        <Link
          href="/register"
          className="border-zinc-800 hover:border-b hover:text-zinc-800"
        >
          I don&apos;t have an account
        </Link>
      </footer>
    </main>
  );
}
