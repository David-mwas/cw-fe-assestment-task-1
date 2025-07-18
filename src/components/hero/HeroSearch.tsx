import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export interface HeroSearchProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

export function HeroSearch({ initialValue = "", onSearch }: HeroSearchProps) {
  const [query, setQuery] = useState(initialValue);

  // Debounce effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) onSearch(query);
    }, 500); // debounce time

    return () => clearTimeout(timeout); // cleanup
  }, [query, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query); // force immediate search on submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#1C2126] px-4 py-2 rounded-lg w-full max-w-xl mt-6 shadow shadow-black"
    >
      <Search className="text-gray-400 mr-3" aria-hidden="true" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        aria-label="Search input"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white ml-4"
      >
        Search
      </Button>
    </form>
  );
}
