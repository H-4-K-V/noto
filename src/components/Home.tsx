"use client";

import { useState } from "react";
import { createClient } from "../../utils/supabase/client";
import { Plus } from "lucide-react";
import { Book } from "./Book";

type BookType = {
  id: string;
  title: string;
};

export function Home() {
  const [books, setBooks] = useState<BookType[]>([]);

  const addBook = async () => {
    const supabase = createClient();

    console.log("Criando supabase client", supabase);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log("Sessão", session);

    const userId = session?.user?.id;

    if (!userId) {
      console.log("❌ Sem ID de usuário");
      return;
    }

    const { data, error } = await supabase
      .from("books")
      .insert([{ user_id: userId, title: "Untitled" }])
      .select();

    console.log("📚 Insert response", data, error);

    if (error) {
      console.log("❌ Erro ao criar livro", error);
      return;
    }

    const createdBook = data?.[0];
    if (createdBook) {
      setBooks((prev) => [...prev, createdBook]);
      console.log("✅ Livro criado", createdBook);
    } else {
      console.log("⚠️ Nenhum livro retornado");
    }
  };

  const updateTitle = (id: string, newTitle: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, title: newTitle } : book
      )
    );
  };

  return (
    <div className="max-w-[400px] min-w-[400px]">
      <h2 className="mb-4 text-2xl leading-[100%]">Books</h2>
      <div className="w-full border-b border-zinc-50"></div>
      <div>
        {books.map(({ id, title }) => (
          <Book
            key={id}
            title={title}
            onTitleChange={(newTitle) => updateTitle(id, newTitle)}
          />
        ))}
      </div>
      <button
        className="mt-4 flex w-full items-center justify-center rounded-md border border-zinc-50 p-2 hover:cursor-pointer hover:bg-zinc-50"
        onClick={addBook}
      >
        <Plus size={16} />
        New book
      </button>
    </div>
  );
}
