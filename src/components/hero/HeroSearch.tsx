import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export interface HeroSearchProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

export function HeroSearch({ initialValue = "", onSearch }: HeroSearchProps) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-black/70 px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg"
      aria-label="Search for words, phrases and meanings"
    >
      <Search className="text-gray-400 mr-3" aria-hidden="true" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Type to search..."
        aria-label="Search input"
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button type="submit" className="ml-4">
        Search
      </Button>
    </form>
  );
}
