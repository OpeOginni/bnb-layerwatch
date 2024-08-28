import type { opBNBDappsResponse } from "@/server/interfaces";

export const XTERIO_DAPPS: opBNBDappsResponse = {
  list: [
    {
      dapp: {
        name: "Palio",
        logo_url:
          "https://dashboard-assets.dappradar.com/document/49674/palio-project-games-49674-logo-166x166_5fb756bb0a3bd9becac3587122b7ac32.png",
        description:
          "Meet Palio, your one and only AI buddy to interact, discover and play with!丨Created by Xterio & powered by Reka.",
        category: "Game",
        website: "https://palio.ai/",
      },
      staticInfo: {
        daily: {
          users: {
            value: 1_120,
          },
          txns: {
            value: 3_530,
          },
        },
        monthly: {
          users: {
            value: 2_950,
          },
          txns: {
            value: 93_100,
          },
        },
      },
    },
    {
      dapp: {
        name: "Xterio",
        logo_url:
          "https://dashboard-assets.dappradar.com/document/40894/xterio-dapp-collectibles-40894-logo-166x166_c6ecf48a0d09f2b6f1b46ed11751895d.png",
        description: "A free-to-play-and-own game developer and publisher.",
        category: "Games",
        website: "https://xter.io/",
      },
      staticInfo: {
        daily: {
          users: {
            value: 531,
          },
          txns: {
            value: 551,
          },
        },
        monthly: {
          users: {
            value: 1_140,
          },
          txns: {
            value: 12_840,
          },
        },
      },
    },
  ],
};
