import type { opBNBDappsResponse } from "@/server/interfaces";

export const COMBO_DAPPS: opBNBDappsResponse = {
  list: [
    {
      dapp: {
        name: "Inscription",
        logo_url: "https://combonetwork.io/images/allapps/inscription.png",
        description: "The First & Fairest Inscription Protocol on COMBO.",
        category: "Inscription",
        website: "https://inscribe.ink/",
      },
      staticInfo: {},
    },
    {
      dapp: {
        name: "Legend Games",
        logo_url: "https://combonetwork.io/images/allapps/legend_games.svg",
        description:
          "An omnichain gaming powered by zkBridge, allowing games to utilize the benefits of different blockchain networks seamlessly.",
        category: "Games",
        website: "https://legend.game/",
      },
      staticInfo: {},
    },
    {
      dapp: {
        name: "Tap Fantasy",
        logo_url: "https://combonetwork.io/images/allapps/tap_fantasy.svg",
        description:
          "Combine classic RPG elements with blockchain innovation. Players can mint NFTs, engage in epic battles, and enjoy mini-games within a MMORPG universe.",
        category: "Games",
        website: "https://tapfantasy.io/#/",
      },
      staticInfo: {},
    },
    {
      dapp: {
        name: "HavenMarket",
        logo_url: "https://combonetwork.io/images/allapps/havenmarket.svg",
        description:
          "The first NFT marketplace on COMBO that supports the creation, collection, and trading of NFTs.",
        category: "NFT",
        website: "https://havenmarket.xyz/",
      },
      staticInfo: {},
    },
    {
      dapp: {
        name: "HunterSwap",
        logo_url: "https://combonetwork.io/images/allapps/hunterswap.svg",
        description: "The first AMM & DEX on COMBO.",
        category: "DEX",
        website: "https://hunterdex.net/",
      },
      staticInfo: {},
    },
    {
      dapp: {
        name: "SecondLive",
        logo_url: "https://combonetwork.io/images/allapps/secondlive.svg",
        description:
          "Top Metaverse on multichain and server as an all-in-one Web3 metaverse marketing hub with AIGC toolchain and XR technology.",
        category: "Metaverse",
        website: "https://secondlive.world/",
      },
      staticInfo: {},
    },
  ],
};
