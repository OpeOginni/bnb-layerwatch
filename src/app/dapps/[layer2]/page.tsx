import LayerDetailsCard from "@/components/LayerDetailsCard";
import { getDapps_opBNB } from "@/server/opBNB";
import Link from "next/link";

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
    logo: "/logo/bnb.png",
    homeSite: "https://opbnb.bnbchain.org/en",
  },
  {
    name: "COMBO",
    description:
      "COMBO Network is the first Game-Focused Optimistic Rollup on the BNB Chain and a low-cost and lightning-fast BNB Chain Layer 2 blockchain.",
    type: "gaming",
    logo: "/logo/combo.png",
    homeSite: "https://combonetwork.io/",
  },
  {
    name: "Xterio",
    description:
      "Xterio L2 is engineered to become the leading Gaming Layer 2 and is designed to meet the growing needs of global Web3 gamers.",
    type: "gaming",
    logo: "/logo/xterio.png",
    homeSite: "https://xter.io/",
  },
];

export default async function LayerDappsPage({
  params,
}: {
  params: { layer2: "opbnb" | "combo" | "xterio" };
}) {
  
  const dapps = await getDapps_opBNB()

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
            dapps="/"
          />
        </section>

        <div className="grid grid-cols-1 gap-6">
  {dapps.list.map((item) => (
    <div
      key={item.dapp.name}
      className="flex flex-row items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
    >
      <img
        src={item.dapp?.logo_url || "/logo/xterio.png"}
        alt={item.dapp.name}
        className="w-24 h-24 object-cover rounded-full"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <p className="text-2xl font-semibold text-gray-800">
            {item.dapp.name}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {item.dapp.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {item.dapp.category}
          </span>
          <Link
            target="_blank"
            href={item.dapp.website}
            className="text-blue-500 hover:underline text-sm"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

</main>
  );
}
