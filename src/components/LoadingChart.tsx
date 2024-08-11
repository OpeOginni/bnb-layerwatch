"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "./ui/chart";
import LayerSelector from "./LayerSelector";
import TimePeriodSelector from "./TimePeriodSelector";
import { Loader2Icon } from "lucide-react";

export function LoadingChart() {
  // Dummy data to represent the structure during loading
  const secondsInDay = 86400 * 1000;
  const loadingData = [
    { timestamp: new Date().getTime(), opBNB: 0, combo: 0 },
    { timestamp: new Date().getTime() - secondsInDay, opBNB: 0, combo: 0 },
    {
      timestamp: new Date().getTime() - secondsInDay - secondsInDay,
      opBNB: 0,
      combo: 0,
    },
  ];

  const chartConfig: ChartConfig = {
    opBNB: { label: "opBNB", color: "hsl(var(--chart-1))" },
    combo: { label: "combo", color: "hsl(var(--chart-2))" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loading Chart</CardTitle>
        <CardDescription>
          <LayerSelector />
          <TimePeriodSelector />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={loadingData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={() => ""} // Blank labels to show the loading state
            />
            <YAxis />
            <Area
              dataKey="opBNB"
              type="natural"
              fill="var(--color-opBNB)"
              fillOpacity={0.4}
              stroke="var(--color-opBNB)"
            />
            <Area
              dataKey="combo"
              type="natural"
              fill="var(--color-combo)"
              fillOpacity={0.4}
              stroke="var(--color-combo)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
          <Loader2Icon className="animate-spin h-5 w-5 mr-1" />
          Loading...
        </div>
      </CardFooter>
    </Card>
  );
}

export function LoadingChartGrid() {
  return (
    <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-1 md:gap-6 lg:grid-cols-2 xl:gap-10">
      <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
        <LoadingChart />
      </div>
      <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
        <LoadingChart />
      </div>
      <div className="themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30">
        <LoadingChart />
      </div>
    </div>
  );
}
