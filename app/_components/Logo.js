import { TicketsPlane } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className=" text-xl text-brand-dark tracking-[0.1rem]  flex items-center gap-1 uppercase font-heading"
    >
      <TicketsPlane size={24} className="animate-bounce" />
      Sky|Reserve
    </Link>
  );
}

export default Logo;
