import List from "@/components/List";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import classes from "@/lib/consumesList";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const dmgList = classes.warrior.dmg;
const protList = classes.warrior.prot;
const miscList = classes.warrior.misc;

export default function WarriorDps() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 py-12 pb-24">
      <Button asChild variant="link">
        <Link href="/" className="flex items-center justify-center">
          <ChevronLeft className="inline" size={20} />{" "}
          <ChevronLeft className="inline -ml-4" size={20} /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-extrabold">Melee DPS</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
          <TabsTrigger value="prot">Protection</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">
          <List list={dmgList} localName="wardps-dps" />
        </TabsContent>
        <TabsContent value="prot">
          <List list={protList} localName="wardps-prot" />
        </TabsContent>
        <TabsContent value="misc">
          <List list={miscList} localName="wardps-misc" />
        </TabsContent>
      </Tabs>
    </main>
  );
}
