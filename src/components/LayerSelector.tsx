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
      {["opBNB", "combo", "xterio"].map((layer) => (
        <div key={layer} className="flex items-center space-x-2">
          <button
            type="button"
            className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-xs rounded-2xl ${
              selectedLayers?.includes(layer)
                ? `bg-${layer} text-white`
                : "bg-background border border-input"
            }`}
            onClick={() => toggleLayer(layer)}
          >
            {layer}
          </button>
        </div>
      ))}
    </div>
  );
}
