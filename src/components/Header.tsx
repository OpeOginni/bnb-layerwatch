import { cn } from "@/lib/utils";
import BnbLogoSVG from "./logo/bnb";
import { Josefin_Sans } from "next/font/google";

const sans = Josefin_Sans({ weight: "700", subsets: ["latin"] });

export default function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full justify-end border-b-2",
        sans.className
      )}
    >
      <div className="flex items-center gap-2 text-3xl text-center pl-9 py-10">
        <span>
          <BnbLogoSVG />
        </span>
        <div className="flex items-center gap-1 text-black">
          <h1 className="pt-1">Layer</h1>
          <h1 className="pt-1">Watch</h1>
        </div>
      </div>
    </header>
  );
}
