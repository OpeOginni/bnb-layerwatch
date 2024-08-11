import { Josefin_Sans } from "next/font/google";

import LayerDetailsCard from "@/components/LayerDetailsCard";
import getLayersStats from "@/server/general";
import { cn } from "@/lib/utils";

const sans = Josefin_Sans({ weight: "700", subsets: ["latin"] });

export default async function Home() {
  const stats = await getLayersStats();

  return (
    <main className="flex-1">
      <div className="px-14 max-w-[1400px] mx-auto relative">
        <section
          className={cn(
            "text-center text-5xl font-bold px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10",
            sans.className
          )}
        >
          <h1>Trending BNB Layer2s</h1>
        </section>
        <section className="mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 items-stretch gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
          <LayerDetailsCard
            name="opBNB"
            description="opBNB is an optimistic layer-2 solution that delivers lower fees and higher throughput to unlock the full potential of the BNB Chain."
            type="universal"
            logo="./logo/bnb.png"
            homeSite="https://opbnb.bnbchain.org/en"
            dapps="https://dappbay.bnbchain.org/ranking/chain/opbnb"
          />
          <LayerDetailsCard
            name="COMBO"
            description="COMBO Network is the first Game-Focused Optimistic Rollup on the BNB Chain and a low-cost and lightning-fast BNB Chain Layer 2 blockchain."
            type="gaming"
            logo="./logo/combo.png"
            homeSite="https://combonetwork.io/"
            dapps="https://combonetwork.io/all-apps"
          />
          <LayerDetailsCard
            name="Xterio"
            description="Xterio L2 is engineered to become the leading Gaming Layer 2 and is designed to meet the growing needs of global Web3 gamers."
            type="gaming"
            logo="./logo/xterio.png"
            homeSite="https://xter.io/"
            dapps="https://xter.io/games"
          />
        </section>
      </div>
    </main>
  );
}
