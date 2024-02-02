import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const list = [
  {
    id: "gfpp",
    label: "Fire Prot",
  },
  {
    id: "gnpp",
    label: "Nature Prot",
  },
  {
    id: "gfrostpp",
    label: "Frost Prot",
  },
  {
    id: "gapp",
    label: "Arcane Prot",
  },
  {
    id: "gshadowpp",
    label: "Shadow Prot",
  },
  {
    id: "flask",
    label: "Flask of Titans",
  },
  {
    id: "alcohol",
    label: "Alcohol",
  },
  {
    id: "fort",
    label: "Potion of Fortitude",
  },
  {
    id: "armor",
    label: "Superior Defense",
  },
  {
    id: "hp5",
    label: "Troll's Blood",
  },
  //   {
  //     id: "",
  //     label: "",
  //   },
];

export default function ProtList() {
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
