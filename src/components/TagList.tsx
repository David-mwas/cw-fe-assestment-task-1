// src/components/TagList.tsx
import { Badge } from "@/components/ui/badge";

export interface TagListProps {
  title: string;
  tags: string[];
  onClick?: (tag: string) => void;
}

export function TagList({ title, tags, onClick }: TagListProps) {
  return (
    <section className="mt-6 max-w-5xl mx-auto">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <Badge
              onClick={() => onClick?.(tag)}
              className="bg-[#293038] text-white hover:bg-[#293038]/80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1"
              role="button"
              tabIndex={0}
              aria-label={`Tag: ${tag}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") onClick?.(tag);
              }}
            >
              {tag}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
