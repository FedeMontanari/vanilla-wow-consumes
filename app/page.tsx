import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center gap-5 p-24">
      <h1 className="text-3xl font-extrabold">Vanilla Consumes Checklist</h1>
      <div className="flex items-center justify-center gap-3">
        <Button asChild>
          <Link href="/melee">Melee DPS</Link>
        </Button>
        <Button asChild>
          <Link href="/caster">Caster DPS</Link>
        </Button>
        <Button asChild>
          <Link href="/healer">Healer</Link>
        </Button>
      </div>
    </main>
  );
}
