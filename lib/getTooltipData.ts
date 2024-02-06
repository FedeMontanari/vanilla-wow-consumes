import { Item, ItemTooltip } from "wow-classic-items/types/Item";
import untypedData from "@/lib/data/data.json";

//@ts-ignore
const items: Item[] = untypedData;

const dummyTooltip: ItemTooltip = {
  label: "",
  format: "Common",
};

export default function getTooltipData(item: { id: string; label: string }) {
  const tooltipData = items.find((el) => el.name.includes(item.label))?.tooltip;
  if (tooltipData) return tooltipData;
  return [dummyTooltip];
}
