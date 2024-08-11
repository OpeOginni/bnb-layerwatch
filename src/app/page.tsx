import AnalyticsChart from "@/components/AnalyticsChart";
import Header from "@/components/Header";
import LayerDetailsCard from "@/components/LayerDetailsCard";
import LayerSelector from "@/components/LayerSelector";
import { LoadingChartGrid, LoadingChart } from "@/components/LoadingChart";
import { ChartEnums } from "@/enums/ChartEnums";
import getLayersStats from "@/server/general";
import { Suspense } from "react";

export default async function Home() {
  const stats = await getLayersStats();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="  px-14 max-w-[1400px] mx-auto relative">
          <section className="mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 items-stretch gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
            <LayerDetailsCard
              name="opBNB"
              description="opBNB is an optimistic layer-2 solution that delivers lower fees and higher throughput to unlock the full potential of the BNB Chain."
              type="universal"
              logo="./logo/bnb.png"
              homeSite="https://opbnb.bnbchain.org/en"
            />
            <LayerDetailsCard
              name="COMBO"
              description="COMBO Network is the first Game-Focused Optimistic Rollup on the BNB Chain and a low-cost and lightning-fast BNB Chain Layer 2 blockchain."
              type="gaming"
              logo="./logo/combo.png"
              homeSite="https://combonetwork.io/"
            />
            <LayerDetailsCard
              name="Xterio"
              description="Xterio L2 is engineered to become the leading Gaming Layer 2 and is designed to meet the growing needs of global Web3 gamers."
              type="gaming"
              logo="./logo/xterio.png"
              homeSite="https://xter.io/"
            />
          </section>
          <Suspense fallback={<LoadingChartGrid />}>
            <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-1 md:gap-6 lg:grid-cols-2 xl:gap-10">
              <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
                <AnalyticsChart
                  title="Active Accounts"
                  chartType={ChartEnums.ACTIVE_ACCOUNTS}
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
                <LoadingChart />
              </div>

              {/* <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart title="Analytics" />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart title="Analytics" />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart title="Analytics" />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart title="Analytics" />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart title="Analytics" />
            </div>
            <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
              <AnalyticsChart title="Analytics" />
            </div> */}
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
