"use server";

import type { ChartEnums } from "@/enums/ChartEnums";
import type { opBNBDappsResponse, opBNBStatsResponse } from "./interfaces";

export async function getStats_opBNB() {
  const response = await fetch(
    `${process.env.OP_BNB_EXPLORER_URL}/api/statistics/getStatisticsData`
  ).then((res) => res.json());

  return response as opBNBStatsResponse;
}

export async function getDapps_opBNB() {
  const response = await fetch(
    `${process.env.BNB_CHAIN_DAPP_SERVER_URL}/api/v1/ranking/dapp-list-v2?page=1&pageSize=10&sortRankingKey=users&sortGranularity=daily&sortType=desc&category=&chainInfoId=3`
  ).then((res) => res.json());

  return response as opBNBDappsResponse;
}
