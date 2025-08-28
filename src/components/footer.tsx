"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { Instagram, Zap } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row w-full">
          <p className="text-sm text-muted-foreground">
            &copy; {year || "..."} Embraza. Todos os direitos reservados.
          </p>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
