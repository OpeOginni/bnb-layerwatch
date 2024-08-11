import LayerDetailsCard from "@/components/LayerDetailsCard";

const LayerIndex = {
  opbnb: 0,
  combo: 1,
  xterio: 2,
};
const LayerDetails = [
  {
    name: "opBNB",
    description:
      "opBNB is an optimistic layer-2 solution that delivers lower fees and higher throughput to unlock the full potential of the BNB Chain.",
    type: "universal",
    logo: "./logo/bnb.png",
    homeSite: "https://opbnb.bnbchain.org/en",
  },
  {
    name: "COMBO",
    description:
      "COMBO Network is the first Game-Focused Optimistic Rollup on the BNB Chain and a low-cost and lightning-fast BNB Chain Layer 2 blockchain.",
    type: "gaming",
    logo: "./logo/combo.png",
    homeSite: "https://combonetwork.io/",
  },
  {
    name: "Xterio",
    description:
      "Xterio L2 is engineered to become the leading Gaming Layer 2 and is designed to meet the growing needs of global Web3 gamers.",
    type: "gaming",
    logo: "./logo/xterio.png",
    homeSite: "https://xter.io/",
  },
];

export default async function LayerDappsPage({
  params,
}: {
  params: { layer2: "opbnb" | "combo" | "xterio" };
}) {
  return (
    <main className="flex-1">
      <div className="  px-14 max-w-[1400px] mx-auto relative">
        <section className="flex items-center justify-center mx-auto gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
          <LayerDetailsCard
            name={LayerDetails[LayerIndex[params.layer2]].name}
            description={LayerDetails[LayerIndex[params.layer2]].description}
            type={LayerDetails[LayerIndex[params.layer2]].type}
            logo={LayerDetails[LayerIndex[params.layer2]].logo}
            homeSite={LayerDetails[LayerIndex[params.layer2]].homeSite}
          />
        </section>
      </div>
    </main>
  );
}
