import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="" className="w-10 h-10" />
        <span className="text-white font-semibold text-lg">Wortionary</span>
      </div>

      <div className="flex items-center gap-4">
        {!isMobile && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <Input
              type="text"
              placeholder="Search"
              aria-label="Search site"
              className="pl-9 pr-4 bg-gray-800 text-white border-none focus:ring-0 rounded-full h-8 w-48"
            />
          </div>
        )}
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
