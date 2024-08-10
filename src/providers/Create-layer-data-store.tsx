"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type LayersDataStore,
  createLayerDataStore,
} from "@/stores/layer-data.store";

export type LayersDataApi = ReturnType<typeof createLayerDataStore>;

export const LayersDataStoreContext = createContext<LayersDataApi | undefined>(
  undefined
);

export interface LayersDataStoreProviderProps {
  children: ReactNode;
}

export const LayersDataStoreProvider = ({
  children,
}: LayersDataStoreProviderProps) => {
  const storeRef = useRef<LayersDataApi>();
  if (!storeRef.current) {
    storeRef.current = createLayerDataStore();
  }

  return (
    <LayersDataStoreContext.Provider value={storeRef.current}>
      {children}
    </LayersDataStoreContext.Provider>
  );
};

export const useLayersDataStore = <T,>(
  selector: (store: LayersDataStore) => T
): T => {
  const layersDataStoreContext = useContext(LayersDataStoreContext);

  if (!layersDataStoreContext) {
    throw new Error(
      "useLayersDataStore must be used within LayersDataStoreProvider"
    );
  }

  return useStore(layersDataStoreContext, selector);
};
