import List from "@/components/List";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dps from "@/lib/specs/dps";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

enum DpsSpecs {
  warrior = "warrior",
  rogue = "rogue",
  hunter = "hunter",
  priest = "priest",
  mage = "mage",
  warlock = "warlock",
  feral = "kitty",
  balance = "boomie",
  enhance = "enhance",
  elemental = "elemental",
}

export default function Dps({
  params,
}: {
  params: { spec: DpsSpecs };
}) {
  const camelName = params.spec.charAt(0).toUpperCase() + params.spec.slice(1);

  const list = dps[params.spec];

  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 py-12 pb-24">
      <Button asChild variant="link">
        <Link href="/" className="flex items-center justify-center">
          <ChevronLeft className="inline" size={20} />{" "}
          <ChevronLeft className="inline -ml-4" size={20} /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-extrabold">{camelName} DPS</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
          <TabsTrigger value="prot">Protection</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">
          <List list={list.dmg} localName={`${params.spec}dps-dps`} />
        </TabsContent>
        <TabsContent value="prot">
          <List list={list.prot} localName={`${params.spec}dps-prot`} />
        </TabsContent>
        <TabsContent value="misc">
          <List list={list.misc} localName={`${params.spec}dps-misc`} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
