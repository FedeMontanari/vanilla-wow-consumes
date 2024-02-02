"use client";

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
  const [local, setLocal] = React.useState({});
  const [update, setUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem("prot") || "{}"));
  }, [update]);

  async function onCheck(e: React.MouseEvent<HTMLButtonElement>) {
    //@ts-ignore
    const checked = !(e.target.ariaChecked === "true");
    const strg = localStorage.getItem("prot");
    const parsedObj = JSON.parse(strg || "{}");
    //@ts-ignore
    parsedObj[e.target.id] = checked;
    localStorage.setItem("prot", JSON.stringify(parsedObj));
    setUpdate(!update);
  }

  return (
    <div className="flex items-center justify-center">
      <ul>
        {list.map((el, i) => {
          return (
            <div key={i}>
              <li className="flex items-center space-x-2 hover:bg-muted transition duration-150 p-2 rounded-md">
                <Checkbox
                  id={el.id}
                  onClick={onCheck}
                  checked={
                    //@ts-ignore
                    local[el.id]
                  }
                />
                <Label htmlFor={el.id} className="text-md hover:cursor-pointer">
                  {el.label}
                </Label>
              </li>
              <Separator className="my-1" />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
