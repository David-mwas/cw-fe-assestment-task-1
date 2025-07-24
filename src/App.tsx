import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { HeroBanner } from "./components/hero/HeroBanner";
import { TagList } from "./components/TagList";
import { tagsData } from "./data/tags";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredTags, setFilteredTags] = useState(tagsData);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredTags(tagsData);
    } else {
      const filtered = tagsData.filter((tag) =>
        tag?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredTags(filtered);
    }
  }, [searchText]);

  return (
    <main className="bg-[#111416] min-h-screen text-white">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <HeroBanner searchText={searchText} setSearchText={setSearchText} />
      <TagList title="Search Results" tags={filteredTags} />
    </main>
  );
}
