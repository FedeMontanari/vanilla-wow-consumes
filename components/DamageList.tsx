"use client";

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
    label: "Brute Force",
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
  const [local, setLocal] = React.useState({});
  const [update, setUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem("dmg") || "{}"));
  }, [update]);

  async function onCheck(e: React.MouseEvent<HTMLButtonElement>) {
    //@ts-ignore
    const checked = !(e.target.ariaChecked === "true");
    const strg = localStorage.getItem("dmg");
    const parsedObj = JSON.parse(strg || "{}");
    //@ts-ignore
    parsedObj[e.target.id] = checked;
    localStorage.setItem("dmg", JSON.stringify(parsedObj));
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
