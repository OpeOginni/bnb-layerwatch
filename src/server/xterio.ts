"use server";

import { ChartEnums } from "@/enums/ChartEnums";
import type { LayerStatisticsData, xterioStatsResponse } from "./interfaces";

export async function getStats_xterio(statsType: ChartEnums) {
  switch (statsType) {
    case ChartEnums.ACTIVE_ACCOUNTS:
      return getActiveAccounts_xterio();
    case ChartEnums.AVERAGE_GAS_PRICE:
      return getAverageGasPrice_xterio();
    default:
      throw new Error("Invalid stats type");
  }
}

export async function getActiveAccounts_xterio() {
  const response = await fetch(
    `${process.env.XTERIO_EXPLORER_URL}/api/v1/lines/activeAccounts`
  ).then((res) => res.json());

  const formattedResponse: Partial<LayerStatisticsData>[] = (
    response as xterioStatsResponse
  ).chart.map((item) => {
    const formattedItem: Partial<LayerStatisticsData> = {
      timestamp: new Date(item.date).getTime() / 1000,
      active_accounts: item.value,
    };

    return formattedItem;
  });

  return formattedResponse;
}

export async function getAverageGasPrice_xterio() {
  const response = await fetch(
    `${process.env.XTERIO_EXPLORER_URL}/api/v1/lines/averageGasPrice`
  ).then((res) => res.json());

  const formattedResponse: Partial<LayerStatisticsData>[] = (
    response as xterioStatsResponse
  ).chart.map((item) => {
    const formattedItem: Partial<LayerStatisticsData> = {
      timestamp: new Date(item.date).getTime() / 1000,
      average_gas_price: item.value,
    };

    return formattedItem;
  });

  return formattedResponse;
}
