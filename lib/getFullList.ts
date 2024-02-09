import { Item } from "wow-classic-items/types/Item";
import untypedData from "@/lib/data/data.json";

//@ts-ignore
const items: Item[] = untypedData;

export const dullItem: Item = {
  class: "Consumable",
  icon: "",
  itemId: 0,
  itemLevel: 0,
  itemLink: "",
  name: "",
  quality: "Common",
  requiredLevel: 0,
  sellPrice: 0,
  slot: "Non-equippable",
  source: {
    category: "Vendor",
  },
  subclass: "Alchemy",
  tooltip: [
    {
      label: "",
    },
  ],
  uniqueName: "",
  vendorPrice: 0,
};

export default function getFullList(list: { slug: string; name: string }[]) {
  const arr = list.map((it) => {
    //@ts-ignore
    const item = items.find((el) => el.name == it.name);
    if (item) {
      return item;
    } else {
      return dullItem;
    }
  });
  return arr;
}
