import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const list = [
  {
    id: "mongoose",
    label: "Mongoose",
  },
  {
    id: "mightyrage",
    label: "Mighty Rage",
  },
  {
    id: "jujupower",
    label: "Juju Power",
  },
  {
    id: "jujumight",
    label: "Juju Might",
  },
  {
    id: "food",
    label: "Dumplings/Sunfruit",
  },
  {
    id: "sharpies",
    label: "Sharpening Stones",
  },
  {
    id: "blands",
    label: "Blasted Lands",
  },
  {
    id: "dynamite",
    label: "Dense Dynamite",
  },
  {
    id: "sapper",
    label: "Sappers",
  },
  {
    id: "bforce",
    label: "Brutal Force",
  },
  {
    id: "holywater",
    label: "Holy Water",
  },
  // {
  //   id: "",
  //   label: "",
  // },
];

export default function DamageList() {
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
