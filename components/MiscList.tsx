import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const list = [
  {
    id: "faplap",
    label: "Free/Living Action",
  },
  {
    id: "lip",
    label: "Limited Invulneravility",
  },
  {
    id: "resto",
    label: "Restorative",
  },
  {
    id: "zanza",
    label: "Zanza",
  },
  {
    id: "sand",
    label: "Hourglass Sand",
  },
  {
    id: "onycloak",
    label: "Onyxia Scale Cloak",
  },
  {
    id: "onyneck",
    label: "Drakefire Amulet",
  },
  //   {
  //     id: "",
  //     label: "",
  //   },
];

export default function MiscList() {
  return (
    <div className="flex items-center justify-center">
      <ul>
        {list.map((el, i) => {
          return (
            <div key={i}>
              <li className="flex items-center space-x-2">
                <Checkbox id={el.id} />
                <Label htmlFor={el.id} className="text-md">
                  {el.label}
                </Label>
              </li>
              <Separator className="my-2" />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
