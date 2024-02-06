import List from "@/components/List";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Healer() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <Link href="/">{"<< Back"}</Link>
      <h1 className="text-3xl font-extrabold">Healer Consumes</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">WIP</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">{/* <List list={dmgList} /> */}</TabsContent>
      </Tabs>
    </main>
  );
}
