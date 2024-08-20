"use client";
import { cn } from "@/lib/utils";
import BnbLogoSVG from "./logo/bnb";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sans = Josefin_Sans({ weight: "700", subsets: ["latin"] });

const selectedClass =
  "flex h-9 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary bg-muted font-medium text-primary";
const unselectedClass =
  "flex h-9 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary text-muted-foreground";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full justify-end border-b-2",
        sans.className
      )}
    >
      <div className="flex items-center gap-2 text-3xl text-center pl-9 pr-9 py-7">
        <Link href="/" className="flex flex-row justify-center items-center gap-2">

        <span>
          <BnbLogoSVG />
        </span>
        <div className="flex items-center gap-1 text-black">
          <h1 className="pt-1">Layer</h1>
          <h1 className="pt-1">Watch</h1>
        </div>
        </Link>

        <div className="flex ml-auto gap-4 text-xl">
          {/* <Link className={"text-gray-400 hover:text-black"} href={"/analytics"}> */}
          <Link
            className={cn(pathname === "/" ? selectedClass : unselectedClass)}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={cn(
              pathname === "/analytics" ? selectedClass : unselectedClass
            )}
            href={"/analytics"}
          >
            Analytics
          </Link>
          <Link
            className={cn(
              pathname.includes("/dapps") ? selectedClass : unselectedClass
            )}
            href={"/dapps"}
          >
            dApps
          </Link>
          <Link
            className={cn(
              pathname === "/roadmap" ? selectedClass : unselectedClass
            )}
            href={"/roadmap"}
          >
            Roadmap
          </Link>
        </div>
      </div>
    </header>
  );
}
