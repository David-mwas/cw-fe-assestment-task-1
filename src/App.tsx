import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/hero/HeroBanner";
import { TagList } from "./components/TagList";



function BoxArea97() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <BoxArea108 initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}

function BoxArea108({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg">
      <Search className="text-gray-400 mr-3" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
      />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
        Search
      </Button>
    </div>
  );
}

export default function App() {
  const [tags, setTags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-[#1C2126] min-h-screen text-white">
      <Header />
      <HeroBanner />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
