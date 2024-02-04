import List from "@/components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dmgList = [
  {
    id: "flask",
    label: "Flask of Supreme Power",
  },
  {
    id: "arcane",
    label: "Greater Arcane Elixir",
  },
  {
    id: "sages",
    label: "Elixir of the Sages",
  },
  {
    id: "int",
    label: "Elixir of Greater Intellect",
  },
  {
    id: "oil",
    label: "Lesser Wizard Oil",
  },
  {
    id: "blands",
    label: "Blasted Lands Buffs",
  },
  {
    id: "frostp",
    label: "Elixir of Frost Power",
  },
  {
    id: "firep",
    label: "Elixir of Fire Power",
  },
  {
    id: "shadowp",
    label: "Elixir of Shadow Power",
  },
  // {
  //   id: "",
  //   label: "",
  // },
];

export default function Caster() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <h1 className="text-3xl font-extrabold">Caster DPS</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">
          <List list={dmgList} localName="caster-dmg" />
        </TabsContent>
      </Tabs>
    </main>
  );
}
