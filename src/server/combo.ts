"use server";

import type { ChartEnums } from "@/enums/ChartEnums";
import type { opBNBStatsResponse } from "./interfaces";

export async function getStats_combo() {
  const response = await fetch(
    `${process.env.COMBO_EXPLORER_URL}/api/statistics/getStatisticsData`
  ).then((res) => res.json());

  return response as opBNBStatsResponse;
}
