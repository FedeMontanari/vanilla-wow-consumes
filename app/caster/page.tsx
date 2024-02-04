import List from "@/components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const dmgList = [
  {
    id: "flask",
    label: "Flask of Supreme Power",
  },
  {
    id: "spower",
    label: "Elixir of Shadow Power",
  },
  {
    id: "frpower",
    label: "Elixir of Frost Power",
  },
  {
    id: "fipower",
    label: "Elixir of Fire Power",
  },
  {
    id: "grarcane",
    label: "Greater Arcane Elixir",
  },
  {
    id: "arcane",
    label: "Arcane Elixir",
  },
  {
    id: "oil",
    label: "Lesser Wizard Oil",
  },
  {
    id: "int",
    label: "Elixir of Greater Intellect",
  },
  {
    id: "sages",
    label: "Elixir of the Sages",
  },
  {
    id: "juju",
    label: "Juju Guille",
  },
  {
    id: "food",
    label: "Runn Rum Ruber Surprise",
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
    id: "holywater",
    label: "Stratholme Holy Water",
  },
];

const protList = [
  {
    id: "gfpp",
    label: "Fire Protection",
  },
  {
    id: "gnpp",
    label: "Nature Protection",
  },
  {
    id: "gfrostpp",
    label: "Frost Protection",
  },
  {
    id: "gapp",
    label: "Arcane Protection",
  },
  {
    id: "gshadowpp",
    label: "Shadow Protection",
  },
  {
    id: "fort",
    label: "Elixir of Fortitude",
  },
  {
    id: "alcohol",
    label: "Alcohol",
  },
  {
    id: "hp5",
    label: "Troll's Blood Elixir",
  },
];

const miscList = [
  {
    id: "mana",
    label: "Major Mana Potion",
  },
  {
    id: "runes",
    label: "Dark/Demonic Runes",
  },
  {
    id: "faplap",
    label: "Free/Living Action Potion",
  },
  {
    id: "lip",
    label: "Limited Invulneravility Potion",
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
    id: "zanza",
    label: "Spirit/Swiftness of Zanza",
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
  {
    id: "reagents",
    label: "Reagents",
  },
];

export default function Caster() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <Link href="/">{"<< Back"}</Link>
      <h1 className="text-3xl font-extrabold">Caster DPS</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
          <TabsTrigger value="prot">Protection</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">
          <List list={dmgList} localName="caster-dmg" />
        </TabsContent>
        <TabsContent value="prot">
          <List list={protList} localName="caster-prot" />
        </TabsContent>
        <TabsContent value="misc">
          <List list={miscList} localName="caster-misc" />
        </TabsContent>
      </Tabs>
    </main>
  );
}
