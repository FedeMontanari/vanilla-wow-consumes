import React from "react";
import { Sword } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-primary-foreground w-full h-9 fixed bottom-0 flex items-center justify-center">
      <p>
        Made by <Sword className="inline" />
        Yaki
      </p>
    </div>
  );
}
