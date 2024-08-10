import { ChartEnums } from "@/enums/ChartEnums";
import type { LayerStatisticsData } from "@/server/interfaces";

export default function formatStats(
  stats: { opBNB: LayerStatisticsData[]; combo: LayerStatisticsData[] },
  chartType: ChartEnums
) {
  switch (chartType) {
    case ChartEnums.ACTIVE_ACCOUNTS:
      return {
        opBNB: stats.opBNB.map((item) => ({
          timestamp: item.timestamp,
          activeAccounts: item.active_accounts,
        })),
        combo: stats.combo.map((item) => ({
          timestamp: item.timestamp,
          activeAccounts: item.active_accounts,
        })),
      };
    default:
      return stats;
  }
}
