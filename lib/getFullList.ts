import { Item } from "wow-classic-items/types/Item";
import untypedData from "@/lib/data/data.json";

//@ts-ignore
const items: Item[] = untypedData;

// {
// "itemId": 0,
// "name": "",
// "icon": "",
// "class": "Consumable",
// "subclass": "Alchemy",
// "sellPrice": 0,
// "quality": "Common",
// "itemLevel": 0,
// "requiredLevel": 0,
// "slot": "Non-equippable",
// "tooltip": [
//   {
//     "label": ""
//   },
// ],
// "itemLink": "",
// "source": {
//   "category": "Vendor"
// },
// "uniqueName": ""
// },

export const dullItem: Item = {
  itemId: 0,
  name: "",
  icon: "",
  class: "Consumable",
  subclass: "Alchemy",
  sellPrice: 0,
  quality: "Common",
  itemLevel: 0,
  requiredLevel: 0,
  slot: "Non-equippable",
  tooltip: [
    {
      label: "",
    },
  ],
  itemLink: "",
  source: {
    category: "Vendor",
  },
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
