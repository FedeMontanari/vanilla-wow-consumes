import List from "@/components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Healer() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <h1 className="text-3xl font-extrabold">Healer Consumes</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">Damage</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">{/* <List list={dmgList} /> */}</TabsContent>
      </Tabs>
    </main>
  );
}
