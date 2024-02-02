import DamageList from "@/components/DamageList";
import MiscList from "@/components/MiscList";
import ProtList from "@/components/ProtList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <h1 className="text-3xl font-extrabold">Vanilla Warrior DPS Consumes</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
          <TabsTrigger value="prot">Protection</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">
          <DamageList />
        </TabsContent>
        <TabsContent value="prot">
          <ProtList />
        </TabsContent>
        <TabsContent value="misc">
          <MiscList />
        </TabsContent>
      </Tabs>
    </main>
  );
}
