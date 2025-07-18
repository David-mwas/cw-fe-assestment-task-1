import { useState } from "react";

import { Header } from "./components/Header";
import { HeroBanner } from "./components/hero/HeroBanner";
import { TagList } from "./components/TagList";
import { tagsData } from "./data/tags";

export default function App() {
  const [tags, setTags] = useState(tagsData);

  return (
    <main className="bg-[#1C2126] min-h-screen text-white">
      <Header />
      <HeroBanner />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
