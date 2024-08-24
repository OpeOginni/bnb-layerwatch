import { LayerEnums } from "@/enums/LayerEnums";
import { getStats_combo } from "./combo";
import { getDapps_opBNB, getStats_opBNB } from "./opBNB";
import { COMBO_DAPPS } from "@/constants/combo.constants";
import type { opBNBDappsResponse } from "./interfaces";

export async function getLayersStats() {
  const [data_opBNB, data_combo] = await Promise.all([
    getStats_opBNB(),
    getStats_combo(),
  ]);

  return {
    opBNB: data_opBNB.data.transferDayCount,
    combo: data_combo.data.transferDayCount,
  };
}

export async function getDapps(
  layer: "opbnb" | "combo" | "xterio"
): Promise<opBNBDappsResponse | undefined> {
  if (layer === LayerEnums.OP_BNB) {
    return await getDapps_opBNB();
  }
  if (layer === LayerEnums.COMBO) {
    return COMBO_DAPPS;
  }
  if (layer === LayerEnums.XTERIO) {
    return { list: [] };
  }
}
