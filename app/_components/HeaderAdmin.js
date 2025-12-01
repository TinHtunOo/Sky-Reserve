import { TicketsPlane, User } from "lucide-react";
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
        <div className="relative group">
          <Link
            href={"/admin/edituser"}
            className="hover:text-brand block p-1 hover:bg-gray-200 rounded-sm"
          >
            <User />
          </Link>
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
            Edit User
          </div>
        </div>
        <LogOutButtonAdmin />
      </div>
    </div>
  );
}

export default HeaderAdmin;
