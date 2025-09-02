import { TicketsPlane, User, UserPen } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

function SideNavBar() {
  return (
    <ul className=" sm:min-w-[200px] md:min-w-[300px] h-full py-5 flex sm:block justify-around">
      <li className="border-b border-stroke-faint">
        {" "}
        <Link
          href={"/account"}
          className=" text-default flex items-center justify-start gap-2 p-2 sm:px-10 sm:py-5 hover:bg-gray-200   "
        >
          <User />
          <span className="hidden sm:block">Profile</span>
        </Link>
      </li>
      <li className="border-b border-stroke-faint">
        {" "}
        <Link
          href={"/account/edit"}
          className=" text-default flex items-center justify-start gap-2 p-2 sm:px-10 sm:py-5 hover:bg-gray-200  "
        >
          <UserPen /> <span className="hidden sm:block">Edit Profile </span>
        </Link>
      </li>
      <li className="border-b border-stroke-faint">
        {" "}
        <Link
          href={"/account/mybooking"}
          className=" text-default flex items-center justify-start gap-2 p-2 sm:px-10 sm:py-5 hover:bg-gray-200  "
        >
          <TicketsPlane />
          <span className="hidden sm:block"> My Booking </span>
        </Link>
      </li>
      <li className="border-b border-stroke-faint ">
        <LogoutButton />{" "}
      </li>
    </ul>
  );
}

export default SideNavBar;
