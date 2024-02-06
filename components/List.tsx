"use client";

import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Item } from "wow-classic-items/types/Item";
import getFullList, { dullItem } from "@/lib/getFullList";
import Link from "next/link";

export default function List({
  list,
  localName,
  ...props
}: {
  list: { id: string; label: string }[];
  localName: string;
}) {
  const [local, setLocal] = React.useState({});
  const [update, setUpdate] = React.useState<boolean>(false);
  const [fullList, setFullList] = React.useState<Item[]>([dullItem]);

  React.useEffect(() => {
    setFullList(getFullList(list));
  }, []);

  React.useEffect(() => {
    setLocal(JSON.parse(localStorage.getItem(localName) || "{}"));
  }, [update]);

  async function onCheck(e: React.MouseEvent<HTMLButtonElement>) {
    //@ts-ignore
    const checked = !(e.target.ariaChecked === "true");
    const strg = localStorage.getItem(localName);
    const parsedObj = JSON.parse(strg || "{}");
    //@ts-ignore
    parsedObj[e.target.id] = checked;
    localStorage.setItem(localName, JSON.stringify(parsedObj));
    setUpdate(!update);
  }

  function linkClickHandler(e: React.MouseEvent<HTMLAnchorElement>) {
    //@ts-ignore
    const label = e.target.parentElement;
    label.click();
  }

  return (
    <div className="flex items-center justify-center w-56">
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
                <Label
                  htmlFor={el.id}
                  className="text-md hover:cursor-pointer"
                  data-wowhead={`item=${fullList[i]?.itemId}&domain=classic`}
                >
                  <Link
                    href="#"
                    data-wowhead={`item=${fullList[i]?.itemId}&domain=classic`}
                    onClick={linkClickHandler}
                  >
                    {el.label}
                  </Link>
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
