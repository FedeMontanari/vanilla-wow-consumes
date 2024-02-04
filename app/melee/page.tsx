import List from "@/components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    label: "Food",
  },
  {
    id: "sharpies",
    label: "Elemental Sharpening Stone",
  },
  {
    id: "blands",
    label: "Blasted Lands Buffs",
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
  //   {
  //     id: "",
  //     label: "",
  //   },
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
    id: "flask",
    label: "Flask of the Titans",
  },
  {
    id: "alcohol",
    label: "Alcohol",
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
    label: "Troll's Blood Elixir",
  },
  //   {
  //     id: "",
  //     label: "",
  //   },
];

export default function Melee() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
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
