"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltipContent } from "./ui/chart";
import LayerSelector from "./LayerSelector";
import TimePeriodSelector from "./TimePeriodSelector"; // Import your new component
import type { ChartEnums } from "@/enums/ChartEnums";
import type { LayerStatisticsData } from "@/server/interfaces";

const chartConfig = {
  opBNB: {
    label: "opBNB",
    color: "hsl(var(--chart-1))",
  },
  combo: {
    label: "Combo",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type AnalyticsChartProps = {
  title: string;
  chartType?: ChartEnums;
  stats?: { opBNB: LayerStatisticsData[]; combo: LayerStatisticsData[] };
};

export default function AnalyticsChart(props: AnalyticsChartProps) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [timePeriod, setTimePeriod] = useState<
    "1 week" | "1 month" | "6 months" | "1 year" | "All time"
  >("1 week");

  useEffect(() => {
    if (props.stats) {
      const { opBNB, combo } = props.stats;

      const mergedDataMap: Record<number, any> = {};

      for (const item of opBNB) {
        if (!mergedDataMap[item.timestamp]) {
          mergedDataMap[item.timestamp] = {
            timestamp: item.timestamp,
            opBNB: null,
            combo: null,
          };
        }
        mergedDataMap[item.timestamp].opBNB = Number.parseInt(
          item.active_accounts,
          10
        );
      }

      for (const item of combo) {
        if (mergedDataMap[item.timestamp]) {
          mergedDataMap[item.timestamp].combo = Number.parseInt(
            item.active_accounts,
            10
          );
        }
      }

      const mergedData = Object.values(mergedDataMap);
      setChartData(filterDataByPeriod(mergedData, timePeriod));
    }
  }, [props.stats, timePeriod]);

  const filterDataByPeriod = (
    data: { timestamp: number }[],
    period: "1 week" | "1 month" | "6 months" | "1 year" | "All time"
  ) => {
    const now = Date.now() / 1000;

    switch (period) {
      case "1 week":
        return data.filter((d) => d.timestamp >= now - 7 * 24 * 3600);
      case "1 month":
        return data.filter((d) => d.timestamp >= now - 30 * 24 * 3600);
      case "6 months":
        return data.filter((d) => d.timestamp >= now - 6 * 30 * 24 * 3600);
      case "1 year":
        return data.filter((d) => d.timestamp >= now - 12 * 30 * 24 * 3600);
      default:
        return data;
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          <LayerSelector />
          <TimePeriodSelector onChange={setTimePeriod} />{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
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
              tickFormatter={formatDate} // Format the timestamp to date
            />
            <YAxis />
            <Tooltip content={<ChartTooltipContent indicator="dot" />} />
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
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by X% this month{" "}
              {/* You can dynamically calculate this */}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {/* Dynamically display the date range */}
              {chartData.length
                ? `${formatDate(chartData[0].timestamp)} - ${formatDate(
                    chartData[chartData.length - 1].timestamp
                  )}`
                : ""}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
