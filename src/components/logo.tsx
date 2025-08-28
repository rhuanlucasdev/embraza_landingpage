import { Flame } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2"
      aria-label="Embraza Home"
    >
      <Flame className="h-6 w-6 text-primary" />
      <span className="font-bold text-2xl font-display">Embraza</span>
    </Link>
  );
}
