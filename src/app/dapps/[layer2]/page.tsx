import LayerDetailsCard from "@/components/LayerDetailsCard";
import { cn } from "@/lib/utils";
import { getDapps } from "@/server/general";
import { getDapps_opBNB } from "@/server/opBNB";
import { Ghost, MoveUpRight } from "lucide-react";
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
    dapps:
      "https://dappbay.bnbchain.org/ranking/chain/opbnb?utm_source=bnb_layerwatch&utm_medium=direct&utm_campaign=regular&utm_content=traffic_redirect",
  },
  {
    name: "COMBO",
    description:
      "COMBO Network is the first Game-Focused Optimistic Rollup on the BNB Chain and a low-cost and lightning-fast BNB Chain Layer 2 blockchain.",
    type: "gaming",
    logo: "/logo/combo.png",
    homeSite: "https://combonetwork.io/",
    dapps: "https://combonetwork.io/all-apps",
  },
  {
    name: "Xterio",
    description:
      "Xterio L2 is engineered to become the leading Gaming Layer 2 and is designed to meet the growing needs of global Web3 gamers.",
    type: "gaming",
    logo: "/logo/xterio.png",
    homeSite: "https://xter.io/",
    dapps: "https://xter.io/games",
  },
];

function formatNumber(value: number) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(2)}K`;
  }
  return value.toString();
}

export default async function LayerDappsPage({
  params,
}: {
  params: { layer2: "opbnb" | "combo" | "xterio" };
}) {
  const dapps = await getDapps(params.layer2);

  const imageClass =
    params.layer2 === "combo" ? "object-contain bg-black" : "object-cover";

  return (
    <main className="flex-1">
      <div className="px-4 sm:px-6 md:px-8 lg:px-14 max-w-[1400px] mx-auto relative">
        <section className="flex items-center justify-center mx-auto gap-2 py-8">
          <LayerDetailsCard
            name={LayerDetails[LayerIndex[params.layer2]].name}
            description={LayerDetails[LayerIndex[params.layer2]].description}
            type={LayerDetails[LayerIndex[params.layer2]].type}
            logo={LayerDetails[LayerIndex[params.layer2]].logo}
            homeSite={LayerDetails[LayerIndex[params.layer2]].homeSite}
            dapps={LayerDetails[LayerIndex[params.layer2]].dapps}
            specific={true}
          />
        </section>

        <div className="grid grid-cols-1 gap-6">
          {dapps?.list.length === 0 ? (
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-center text-gray-600">No dApps available</p>
              <Ghost className="w-14 h-14 text-gray-600" />
            </div>
          ) : (
            dapps?.list.map((item) =>
              item.dapp ? (
                <div
                  key={item.dapp.name}
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white"
                >
                  <img
                    src={item.dapp.logo_url || "/logo/xterio.png"}
                    alt={item.dapp.name}
                    className={cn("w-20 h-20 rounded-full", imageClass)}
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-900 text-center sm:text-left mb-2 sm:mb-0">
                        {item.dapp.name}
                      </p>
                      {item.staticInfo?.daily ? (
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-right">
                          <p className="text-sm font-medium text-blue-600">
                            Daily Active Users:{" "}
                            <span className="font-semibold text-blue-800">
                              {formatNumber(item.staticInfo.daily.users.value)}
                            </span>
                          </p>
                          <p className="text-sm font-medium text-green-600">
                            Daily Transactions:{" "}
                            <span className="font-semibold text-green-800">
                              {formatNumber(item.staticInfo.daily.txns.value)}
                            </span>
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">
                          No data available
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">
                      {item.dapp.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-2 sm:gap-0">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {item.dapp.category}
                      </span>
                      <Link
                        target="_blank"
                        href={item.dapp.website}
                        className="text-blue-500 hover:underline text-sm flex flex-row items-center gap-1"
                      >
                        Visit Website
                        <MoveUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </main>
  );
}
