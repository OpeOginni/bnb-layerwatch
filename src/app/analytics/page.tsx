import AnalyticsChart from "@/components/AnalyticsChart";
import { LoadingChart, LoadingChartGrid } from "@/components/LoadingChart";
import { ChartEnums } from "@/enums/ChartEnums";
import {getLayersStats} from "@/server/general";
import { Suspense } from "react";

export default async function AnalyticsPage() {
  const stats = await getLayersStats();

  return (
    <main className="flex-1">
      <section className="mx-auto flex flex-col text-center gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
        <h1 className="text-2xl font-bold">
          Welcome to the Analytics Dashboard
        </h1>

        <h4>Compare stats of different BSC Layer2s</h4>
      </section>
      <div className="px-14 mx-auto relative">
        <Suspense fallback={<LoadingChartGrid />}>
          <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-1 md:gap-6 lg:grid-cols-2  xl:gap-10 2xl:grid-cols-3">
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart
                title="Active Accounts"
                chartType={ChartEnums.ACTIVE_ACCOUNTS}
                stats={stats}
              />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart
                title="Daily Transactions"
                chartType={ChartEnums.TRANSACTIONS}
                stats={stats}
              />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart
                title="Average Gas Price"
                chartType={ChartEnums.AVERAGE_GAS_PRICE}
                stats={stats}
              />
            </div>

            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart
                title="Daily BNB Transfers"
                chartType={ChartEnums.BNB_TRANSFERS}
                stats={stats}
              />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart
                title="Daily BEP-20 Transfers"
                chartType={ChartEnums.BEP_20_TRANSFERS}
                stats={stats}
              />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart
                title="Daily NFT Transfers"
                chartType={ChartEnums.NFT_TRANSFERS}
                stats={stats}
              />
            </div>
          </div>
        </Suspense>
      </div>
    </main>
  );
}
