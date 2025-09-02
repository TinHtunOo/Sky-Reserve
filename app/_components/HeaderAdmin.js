import { LogOut, TicketsPlane, User } from "lucide-react";
import Link from "next/link";
import LogOutButtonAdmin from "./LogOutButtonAdmin";

function HeaderAdmin({ name }) {
  return (
    <div className="h-20 py-5 sm:px-10  px-5 border border-b border-stroke-faint fixed w-[100vw] z-10 bg-bg flex justify-between items-center">
      <h3 className="  text-xl text-brand-dark tracking-[0.1rem] justify-center flex items-center gap-1 uppercase font-heading">
        <TicketsPlane size={24} className="animate-bounce" />
        Sky|Reserve
      </h3>

      <div className="flex   justify-center items-center gap-5">
        <span className="hidden sm:block text-default">{name}</span>
        <Link
          href={"/admin/edituser"}
          className="hover:text-brand p-1 hover:bg-gray-200 rounded-sm"
        >
          <User />
        </Link>
        <LogOutButtonAdmin />
      </div>
    </div>
  );
}

export default HeaderAdmin;
