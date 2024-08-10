import type { LayerEnums } from "@/enums/LayerEnums";
import type { LayerStatisticsData } from "@/server/interfaces";
import { createStore } from "zustand/vanilla";

export type LayersDataState = {
  layerData: { opBNB: LayerStatisticsData[]; combo: LayerStatisticsData[] };
};

export type LayersDataActions = {
  setLayerData: (data: LayerStatisticsData[], layer: LayerEnums) => void;
};

export type LayersDataStore = LayersDataState & LayersDataActions;

export const defaultInitState: LayersDataState = {
  layerData: { opBNB: [], combo: [] },
};

export const createLayerDataStore = (
  initState: LayersDataState = defaultInitState
) => {
  return createStore<LayersDataStore>()((set) => ({
    ...initState,
    setLayerData: (data: LayerStatisticsData[], layer: LayerEnums) =>
      set((state) => ({ layerData: { ...state.layerData, [layer]: data } })),
  }));
};
