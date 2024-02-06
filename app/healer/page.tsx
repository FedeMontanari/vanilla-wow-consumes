import List from "@/components/List";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Healer() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 py-12 pb-24">
      <Button asChild variant="link">
        <Link href="/" className="flex items-center justify-center">
          <ChevronLeft className="inline" size={20} />{" "}
          <ChevronLeft className="inline -ml-4" size={20} /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-extrabold">Healer</h1>
      <Tabs defaultValue="dmg">
        <TabsList>
          <TabsTrigger value="dmg">WIP</TabsTrigger>
        </TabsList>
        <TabsContent value="dmg">{/* <List list={dmgList} /> */}</TabsContent>
      </Tabs>
    </main>
  );
}
