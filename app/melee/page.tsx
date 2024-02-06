import List from "@/components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const dmgList = [
  {
    id: "mongoose",
    label: "Elixir of the Mongoose",
  },
  {
    id: "mightyrage",
    label: "Mighty Rage Potion",
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
    label: "Smoked Desert Dumplings",
  },
  {
    id: "food2",
    label: "Blessed Sunfruit",
  },
  {
    id: "sharpies",
    label: "Elemental Sharpening Stone",
  },
  {
    id: "blands1",
    label: "R.O.I.D.S.",
  },
  {
    id: "blands2",
    label: "Ground Scorpok Assay",
  },
  {
    id: "dynamite",
    label: "Dense Dynamite",
  },
  {
    id: "sapper",
    label: "Goblin Sapper Charge",
  },
  {
    id: "bforce",
    label: "Elixir of Brute Force",
  },
  {
    id: "holywater",
    label: "Stratholme Holy Water",
  },
];

const miscList = [
  {
    id: "fap",
    label: "Free Action Potion",
  },
  {
    id: "lap",
    label: "Living Action Potion",
  },
  {
    id: "lip",
    label: "Limited Invulnerability Potion",
  },
  {
    id: "invis",
    label: "Lesser Invisibility Potion",
  },
  {
    id: "resto",
    label: "Restorative Potion",
  },
  {
    id: "zanza1",
    label: "Spirit of Zanza",
  },
  {
    id: "zanza2",
    label: "Swiftness of Zanza",
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

const protList = [
  {
    id: "gfpp",
    label: "Greater Fire Protection Potion",
  },
  {
    id: "gnpp",
    label: "Greater Nature Protection Potion",
  },
  {
    id: "gfrostpp",
    label: "Greater Frost Protection Potion",
  },
  {
    id: "gapp",
    label: "Greater Arcane Protection Potion",
  },
  {
    id: "gshadowpp",
    label: "Greater Shadow Protection Potion",
  },
  {
    id: "flask",
    label: "Flask of the Titans",
  },
  {
    id: "alcohol1",
    label: "Gordok Green Grog",
  },
  {
    id: "alcohol2",
    label: "Rumsey Rum Black Label",
  },
  {
    id: "fort",
    label: "Elixir of Fortitude",
  },
  {
    id: "armor",
    label: "Elixir of Defense",
  },
  {
    id: "hp5",
    label: "Strong Troll's Blood Elixir",
  },
  //   {
  //     id: "",
  //     label: "",
  //   },
];

export default function Melee() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <Link href="/">{"<< Back"}</Link>
      <h1 className="text-3xl font-extrabold">Melee DPS Consumes</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
          <TabsTrigger value="prot">Protection</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">
          <List list={dmgList} localName="melee-dmg" />
        </TabsContent>
        <TabsContent value="prot">
          <List list={protList} localName="melee-prot" />
        </TabsContent>
        <TabsContent value="misc">
          <List list={miscList} localName="melee-misc" />
        </TabsContent>
      </Tabs>
    </main>
  );
}
