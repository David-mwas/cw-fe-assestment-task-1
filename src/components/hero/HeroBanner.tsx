import { HeroSearch } from "./HeroSearch";

export function HeroBanner({
  searchText,setSearchText,
}: {
  setSearchText: (text: string) => void;
  searchText: string;
}) {
  // const onSearch = (search: string) => {
  //   console.log(search);
  //   // implementing the search logic is not required for this task
  // };

  return (
    <section className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8 shadow shadow-black">
      <img
        src="/task1/hero-bg.png"
        className="w-full h-96 object-cover"
        alt="hero background image"
      />
      <div className="absolute inset-0 bg-[#000]/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and <br /> meanings
        </h1>
        <HeroSearch
          initialValue={searchText}
          onSearch={(text) => setSearchText(text)}
        />
      </div>
    </section>
  );
}
