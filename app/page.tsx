import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

const specs = [
  {
    name: "Dps",
    content: [
      {
        label: "Warrior",
        href: "dps/warrior",
      },
      {
        label: "Rogue",
        href: "dps/rogue",
      },
      {
        label: "Hunter",
        href: "dps/hunter",
      },
      {
        label: "Priest",
        href: "dps/priest",
      },
      {
        label: "Mage",
        href: "dps/mage",
      },
      {
        label: "Warlock",
        href: "dps/warlock",
      },
      {
        label: "Druid Feral",
        href: "dps/kitty",
      },
      {
        label: "Druid Balance",
        href: "dps/boomie",
      },
      {
        label: "Shaman Enhancement",
        href: "dps/enhance",
      },
      {
        label: "Shaman Elemental",
        href: "dps/elemental",
      },
    ],
  },
  {
    name: "Healer",
    content: [
      {
        label: "Priest",
        href: "healer/priest",
      },
      {
        label: "Druid",
        href: "healer/druid",
      },
      {
        label: "Shaman",
        href: "healer/shaman",
      },
    ],
  },
  {
    name: "Tank",
    content: [
      {
        label: "Warrior",
        href: "tank/warrior",
      },
      {
        label: "Druid",
        href: "tank/druid",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center gap-5 p-24">
      <h1 className="text-3xl font-extrabold">Vanilla Consumes Checklist</h1>
      <div className="flex items-center justify-center gap-3">
        {specs.map((el, i) => {
          return (
            <DropdownMenu key={i}>
              <Button asChild>
                <DropdownMenuTrigger>{el.name}</DropdownMenuTrigger>
              </Button>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select One</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {el.content.map((it, i) => {
                  return (
                    <Link href={it.href} key={i}>
                      <DropdownMenuItem className="hover:cursor-pointer">
                        {it.label}
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        })}
      </div>
    </main>
  );
}
