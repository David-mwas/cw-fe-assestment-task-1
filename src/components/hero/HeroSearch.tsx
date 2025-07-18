import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export interface HeroSearchProps {
  initialValue?: string;
  onSearch: (value: string) => void;
}

export function HeroSearch({ initialValue = "", onSearch }: HeroSearchProps) {
  const [innerValue, setInnerValue] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(innerValue); // Only submit when form is submitted
  };

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#1C2126] px-4 py-2 rounded-lg w-full max-w-xl mt-6 shadow shadow-black"
    >
      <Search className="text-gray-400 mr-3" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
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
