"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  name,
  action,
}: {
  name: string;
  action: (FormData: FormData) => Promise<void>;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      formAction={action}
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md bg-black px-3 py-2 text-white transition hover:cursor-pointer hover:bg-zinc-800"
      disabled={pending}
    >
      {pending ? <LoaderCircle className="animate-spin" /> : name}
    </button>
  );
}
