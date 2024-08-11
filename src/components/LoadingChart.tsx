"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2Icon } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export function LoadingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="pb-4">Loading Charts...</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <Skeleton className="h-[400px] rounded-xl" />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              <Loader2Icon className="animate-spin h-5 w-5 mr-1" />
              Loading...
            </div>
          </div>
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
