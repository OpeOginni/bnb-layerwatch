import { getStats_combo } from "./combo";
import { getStats_opBNB } from "./opBNB";

export default async function getLayersStats() {
  const [data_opBNB, data_combo] = await Promise.all([
    getStats_opBNB(),
    getStats_combo(),
  ]);

  return {
    opBNB: data_opBNB.data.transferDayCount,
    combo: data_combo.data.transferDayCount,
  };
}
