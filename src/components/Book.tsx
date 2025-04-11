import { useState } from "react";
import { BookOpen, Pencil } from "lucide-react";

export function Book({
  title,
  onTitleChange,
}: {
  title: string;
  onTitleChange: (title: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const MAX_LENGTH = 40;

  const handleSave = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || trimmed.length > MAX_LENGTH) {
      setInputValue(title);
      setEditing(false);
      return;
    }
    setEditing(false);
    onTitleChange(inputValue);
  };
  return (
    <div
      title={title.length > MAX_LENGTH ? title : undefined}
      className="mt-2 flex items-center justify-between rounded-md border border-zinc-50 px-4 py-2"
    >
      <div className="flex items-center gap-2">
        <BookOpen size={16} />
        {editing ? (
          <input
            autoFocus
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="w-full border-b border-black bg-transparent outline-none"
          />
        ) : (
          <span
            title={title}
            className="max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {title}
          </span>
        )}
      </div>
      {!editing && (
        <button onClick={() => setEditing(true)}>
          <Pencil size={16} />
        </button>
      )}
    </div>
  );
}
