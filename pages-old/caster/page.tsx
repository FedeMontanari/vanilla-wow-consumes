import List from "@/components/List";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronLeft } from "lucide-react";
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
    label: "Elixir of Firepower",
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
    id: "blands1",
    label: "Cerebral Cortex Compound",
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
    label: "Juju Guile",
  },
  {
    id: "food1",
    label: "Runn Tum Tuber Surprise",
  },
  {
    id: "food2",
    label: "Nightfin Soup",
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
    id: "fort",
    label: "Elixir of Fortitude",
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
    id: "hp5",
    label: "Strong Troll's Blood Elixir",
  },
];

const miscList = [
  {
    id: "mana",
    label: "Major Mana Potion",
  },
  {
    id: "darkrune",
    label: "Dark Rune",
  },
  {
    id: "demrunes",
    label: "Demonic Rune",
  },
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
  {
    id: "reagents",
    label: "Reagents",
  },
];

export default function Caster() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 py-12 pb-24">
      <Button asChild variant="link">
        <Link href="/" className="flex items-center justify-center">
          <ChevronLeft className="inline" size={20} />{" "}
          <ChevronLeft className="inline -ml-4" size={20} /> Back
        </Link>
      </Button>
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
