"use client";

import { House, Album, Settings } from "lucide-react";
import { FileManager } from "@/components/FileManager";
import { Home } from "@/components/Home";
import { useState } from "react";

export default function Dashboard() {
  const [fileManagerOpen, setFileManagerOpen] = useState(false);

  return (
    <div className="flex h-dvh">
      <div className="flex flex-col items-center px-6 py-8">
        <button className="font-Georgia mb-8 w-fit text-2xl leading-[100%] font-bold">
          N
        </button>
        <div className="w-full border-b border-zinc-50"></div>
        <nav className="mt-8 flex flex-col gap-4">
          <button className="p-1">
            <House size={24} />
          </button>
          <button
            className="p-1"
            onClick={() => setFileManagerOpen(!fileManagerOpen)}
          >
            <Album size={24} />
          </button>
        </nav>
        <button className="mt-auto p-1">
          <Settings size={24} />
        </button>
      </div>

      <div className="h-full border-l border-zinc-50"></div>
      {fileManagerOpen && <FileManager />}
      <main className="flex grow items-center justify-center">
        <Home />
      </main>
    </div>
  );
}
