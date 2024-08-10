"use server";

import type { ChartEnums } from "@/enums/ChartEnums";
import type { LayerStatisticsData } from "./interfaces";

async function getActiveAccounts(data: LayerStatisticsData[]) {
  return data.map((item) => {
    return {
      timestamp: item.timestamp,
      activeAccounts: item.active_accounts,
    };
  });
}
