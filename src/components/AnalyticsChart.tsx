"use client";

import { useEffect, useMemo, useState } from "react";
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
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import LayerSelector from "./LayerSelector";
import TimePeriodSelector from "./TimePeriodSelector"; // Import your new component
import { ChartEnums } from "@/enums/ChartEnums";
import type { LayerStatisticsData } from "@/server/interfaces";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { LoadingChart } from "./LoadingChart";
import { getStats_xterio } from "@/server/xterio";

type ChartDataType = {
  timestamp: number;
  opBNB: number;
  combo: number;
  xterio?: number;
};

type TimePeriods =
  | "1 week"
  | "1 month"
  | "3 months"
  | "6 months"
  | "1 year"
  | "All time";

type AnalyticsChartProps = {
  title: string;
  chartType?: ChartEnums;
  stats?: { opBNB: LayerStatisticsData[]; combo: LayerStatisticsData[] };
};

export default function AnalyticsChart(props: AnalyticsChartProps) {
  const [timePeriod, setTimePeriod] = useState<TimePeriods>("1 week");

  const [selectedLayers, setSelectedLayers] = useState<string[]>([
    "opBNB",
    "combo",
    "xterio",
  ]);

  const chartConfig = useMemo(
    () => ({
      stats: {
        label: props.title,
      },
      opBNB: {
        label: "opBNB",
        color: "hsl(var(--opBNB))",
      },
      combo: {
        label: "Combo",
        color: "hsl(var(--combo))",
      },
      xterio: {
        label: "Xterio",
        color: "hsl(var(--xterio))",
      },
    }),
    [props.title]
  );

  const { data, isLoading } = useQuery({
    queryKey: ["getStats", props.chartType],
    queryFn: async () => {
      if (props.stats && props.chartType) {
        const { opBNB, combo } = props.stats;

        const mergedDataMap: Record<number, ChartDataType> = {};

        for (const item of opBNB) {
          if (!mergedDataMap[item.timestamp]) {
            mergedDataMap[item.timestamp] = {
              timestamp: item.timestamp,
              opBNB: 0,
              combo: 0,
              xterio: 0,
            };
          }
          mergedDataMap[item.timestamp].opBNB = Number.parseFloat(
            Number.parseFloat(String(item[props.chartType]) || "0").toFixed(12)
          );
        }

        for (const item of combo) {
          if (mergedDataMap[item.timestamp]) {
            mergedDataMap[item.timestamp].combo = Number.parseFloat(
              Number.parseFloat(String(item[props.chartType]) || "0").toFixed(
                12
              )
            );
          }
        }

        const xterio = await getStats_xterio(props.chartType);

        for (const item of xterio) {
          if (item.timestamp && mergedDataMap[item.timestamp]) {
            mergedDataMap[item.timestamp].xterio = Number.parseFloat(
              Number.parseFloat(String(item[props.chartType]) || "0").toFixed(
                12
              )
            );
          }
        }

        // Filter out entries where all values are 0
        const filteredData = Object.values(mergedDataMap).filter(
          (data) => data.opBNB !== 0 || data.combo !== 0 || data.xterio !== 0
        );

        return filteredData;
      }
    },
    enabled: !!props.stats && !!props.chartType,
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });

  const filterDataByPeriod = (data: ChartDataType[], period: TimePeriods) => {
    const now = Date.now() / 1000;

    switch (period) {
      case "1 week":
        return data.filter((d) => d.timestamp >= now - 7 * 24 * 3600);
      case "1 month":
        return data.filter((d) => d.timestamp >= now - 30 * 24 * 3600);
      case "3 months":
        return data.filter((d) => d.timestamp >= now - 3 * 30 * 24 * 3600);
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

  const filteredData = useMemo(() => {
    const chartData = data ? filterDataByPeriod(data, timePeriod) : [];

    return chartData?.map((item) => {
      const filteredItem: Partial<ChartDataType> = {
        timestamp: item.timestamp,
      };

      if (selectedLayers.includes("opBNB")) filteredItem.opBNB = item.opBNB;
      if (selectedLayers.includes("combo")) filteredItem.combo = item.combo;
      if (selectedLayers.includes("xterio")) filteredItem.xterio = item.xterio;

      return filteredItem;
    });
  }, [data, timePeriod, filterDataByPeriod, selectedLayers]);

  if (isLoading) {
    return <LoadingChart />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="pb-4">{props.title}</CardTitle>
        <CardDescription>
          <LayerSelector
            onChange={setSelectedLayers}
            selectedLayers={selectedLayers} // Pass selected layers
          />
          <TimePeriodSelector
            onChange={setTimePeriod}
            selectedTimePeriod={timePeriod}
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={filteredData}
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
            {props.chartType === ChartEnums.AVERAGE_GAS_PRICE ? (
              <YAxis />
            ) : (
              <YAxis />
            )}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelKey="stats" indicator="dot" />}
            />
            {selectedLayers.includes("opBNB") && (
              <Area
                dataKey="opBNB"
                type="natural"
                fill="var(--color-opBNB)"
                fillOpacity={0.4}
                stroke="var(--color-opBNB)"
              />
            )}
            {selectedLayers.includes("combo") && (
              <Area
                dataKey="combo"
                type="natural"
                fill="var(--color-combo)"
                fillOpacity={0.4}
                stroke="var(--color-combo)"
              />
            )}
            {selectedLayers.includes("xterio") && (
              <Area
                dataKey="xterio"
                type="natural"
                fill="var(--color-xterio)"
                fillOpacity={0.4}
                stroke="var(--color-xterio)"
              />
            )}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {data?.length
                ? `${formatDate(data[0].timestamp)} - ${formatDate(
                    data[data.length - 1].timestamp
                  )}`
                : ""}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
