"use client";
import { cn } from "@/lib/utils";
import BnbLogoSVG from "./logo/bnb";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sans = Josefin_Sans({ weight: "700", subsets: ["latin"] });

const selectedClass =
  "flex h-9 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary bg-muted font-medium text-primary";
const unselectedClass =
  "flex h-9 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary text-muted-foreground";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full justify-end border-b-2",
        sans.className
      )}
    >
      <div className="flex items-center justify-between text-3xl text-center px-4 py-4 md:px-9 md:py-7">
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-2"
        >
          <span>
            <BnbLogoSVG />
          </span>
          <div className="flex items-center gap-1 text-black">
            <h1 className="pt-1 text-xl md:text-3xl">Layer</h1>
            <h1 className="pt-1 text-xl md:text-3xl">Watch</h1>
          </div>
        </Link>

        <button type="button" onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full bg-background md:static md:bg-transparent",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 md:max-h-screen md:opacity-100",
            "overflow-hidden md:overflow-visible"
          )}
        >
          <div className="flex flex-col md:flex-row md:ml-auto gap-4 text-xl p-4 md:p-0">
            <Link
              className={cn(pathname === "/" ? selectedClass : unselectedClass)}
              href={"/"}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={cn(
                pathname === "/analytics" ? selectedClass : unselectedClass
              )}
              href={"/analytics"}
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
            <Link
              className={cn(
                pathname.includes("/dapps") ? selectedClass : unselectedClass
              )}
              href={"/dapps"}
              onClick={() => setIsMenuOpen(false)}
            >
              dApps
            </Link>
            <Link
              className={cn(
                pathname === "/roadmap" ? selectedClass : unselectedClass
              )}
              href={"/roadmap"}
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              className={cn(
                pathname === "/questionnaire" ? selectedClass : unselectedClass
              )}
              href={"/questionnaire"}
              onClick={() => setIsMenuOpen(false)}
            >
              Questionnaire
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
