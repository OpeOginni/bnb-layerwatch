"use server";

import { ChartEnums } from "@/enums/ChartEnums";
import type { LayerStatisticsData, xterioStatsResponse } from "./interfaces";

export async function getStats_xterio(statsType: ChartEnums) {
  switch (statsType) {
    case ChartEnums.ACTIVE_ACCOUNTS:
      return getActiveAccounts_xterio();
    case ChartEnums.AVERAGE_GAS_PRICE:
      return getAverageGasPrice_xterio();
    case ChartEnums.TRANSACTIONS:
      return getTransactions_xterio();
    case ChartEnums.BNB_TRANSFERS:
      return getBnbTransfers_xterio();
    default:
      return [];
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

export async function getTransactions_xterio() {
  const response = await fetch(
    `${process.env.XTERIO_EXPLORER_URL}/api/v1/lines/newTxns`
  ).then((res) => res.json());

  const formattedResponse: Partial<LayerStatisticsData>[] = (
    response as xterioStatsResponse
  ).chart.map((item) => {
    const formattedItem: Partial<LayerStatisticsData> = {
      timestamp: new Date(item.date).getTime() / 1000,
      count: Number(item.value),
    };

    return formattedItem;
  });

  return formattedResponse;
}

export async function getBnbTransfers_xterio() {
  const response = await fetch(
    `${process.env.XTERIO_EXPLORER_URL}/api/v1/lines/newNativeCoinTransfers`
  ).then((res) => res.json());

  const formattedResponse: Partial<LayerStatisticsData>[] = (
    response as xterioStatsResponse
  ).chart.map((item) => {
    const formattedItem: Partial<LayerStatisticsData> = {
      timestamp: new Date(item.date).getTime() / 1000,
      count: Number(item.value),
    };

    return formattedItem;
  });

  return formattedResponse;
}
