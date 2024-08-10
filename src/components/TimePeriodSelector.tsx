"use cleint";
import { type Dispatch, type SetStateAction, useState } from "react";

export default function TimePeriodSelector({
  onChange,
}: {
  onChange?: Dispatch<
    SetStateAction<"1 week" | "1 month" | "6 months" | "1 year" | "All time">
  >;
}) {
  const [selectedPeriod, setSelectedPeriod] = useState("1 week");

  const handlePeriodChange = (
    period: "1 week" | "1 month" | "6 months" | "1 year" | "All time"
  ) => {
    setSelectedPeriod(period);
    if (onChange) {
      onChange(period);
    }
  };

  return (
    <div className="flex gap-2 items-center mb-6">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs rounded-2xl ${
            selectedPeriod === "1 week" ? "bg-black text-white" : ""
          }`}
          onClick={() => handlePeriodChange("1 week")}
        >
          1 week
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl ${
            selectedPeriod === "1 month" ? "bg-black text-white" : ""
          }`}
          onClick={() => handlePeriodChange("1 month")}
        >
          1 month
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl ${
            selectedPeriod === "6 months" ? "bg-black text-white" : ""
          }`}
          onClick={() => handlePeriodChange("6 months")}
        >
          6 months
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl ${
            selectedPeriod === "1 year" ? "bg-black text-white" : ""
          }`}
          onClick={() => handlePeriodChange("1 year")}
        >
          1 year
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-light-accent text-light-accent-foreground shadow-sm hover:bg-light-accent/80 h-8 px-3 text-xs rounded-2xl ${
            selectedPeriod === "All time" ? "bg-black text-white" : ""
          }`}
          onClick={() => handlePeriodChange("All time")}
        >
          All time
        </button>
      </div>
    </div>
  );
}
