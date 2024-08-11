"use client";
import { useState } from "react";

export default function LayerSelector({
  selectedLayers,
  onChange,
}: {
  selectedLayers: string[];
  onChange?: (selectedLayers: string[]) => void;
}) {
  const toggleLayer = (layer: string) => {
    if (selectedLayers) {
      const updatedLayers = selectedLayers.includes(layer)
        ? selectedLayers.filter((l) => l !== layer)
        : [...selectedLayers, layer];

      if (onChange) {
        onChange(updatedLayers);
      }
    }
  };

  return (
    <div className="flex gap-2 items-center mb-6">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => toggleLayer("opBNB")}
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm h-8 px-3 text-xs rounded-2xl ${
            selectedLayers.includes("opBNB")
              ? "bg-opBNB text-light-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          opBNB
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => toggleLayer("combo")}
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm h-8 px-3 text-xs rounded-2xl ${
            selectedLayers.includes("combo")
              ? "bg-combo text-light-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          Combo
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => toggleLayer("xterio")}
          className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm h-8 px-3 text-xs rounded-2xl ${
            selectedLayers.includes("xterio")
              ? "bg-xterio text-light-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          Xterio
        </button>
      </div>
    </div>
  );
}
