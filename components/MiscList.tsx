"use client";

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
  const [local, setLocal] = React.useState({});
  const [update, setUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem("misc") || "{}"));
  }, [update]);

  async function onCheck(e: React.MouseEvent<HTMLButtonElement>) {
    //@ts-ignore
    const checked = !(e.target.ariaChecked === "true");
    const strg = localStorage.getItem("misc");
    const parsedObj = JSON.parse(strg || "{}");
    //@ts-ignore
    parsedObj[e.target.id] = checked;
    localStorage.setItem("misc", JSON.stringify(parsedObj));
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
