import { Home, Plane, TicketsPlane, UserPlus } from "lucide-react";
import Link from "next/link";

function SideLinksAdmin({ isOpen, setIsOpen }) {
  let translate;
  isOpen
    ? (translate = "translate-x-[0px]")
    : (translate = "translate-x-[-900px]");

  return (
    <nav
      className={`sm:w-[250px] w-[100vw] bg-bg h-screen sm:translate-x-[0] shadow-md absolute sm:relative z-0 ${translate} transition-all duration-700 `}
    >
      <ul className="min-w-[250px]  block justify-around sm:mt-[100px] mt-[120px] ">
        <li className="border-b border-stroke-faint">
          {" "}
          <Link
            onClick={() => setIsOpen(!open)}
            href={"/admin"}
            className=" text-default flex items-center justify-start gap-2  px-10 py-5 hover:bg-gray-200  hover:text-brand-dark transition-all duration-300 "
          >
            <Home />
            <span>Home</span>
          </Link>
        </li>
        <li className="border-b border-stroke-faint">
          {" "}
          <Link
            onClick={() => setIsOpen(!open)}
            href={"/admin/bookings"}
            className=" text-default flex items-center justify-start gap-2  px-10 py-5 hover:bg-gray-200 hover:text-brand-dark transition-all duration-300  "
          >
            <TicketsPlane />
            <span>Bookings </span>
          </Link>
        </li>
        <li className="border-b border-stroke-faint">
          {" "}
          <Link
            onClick={() => setIsOpen(!open)}
            href={"/admin/flightsadmin"}
            className=" text-default flex items-center justify-start gap-2  px-10 py-5 hover:bg-gray-200  hover:text-brand-dark transition-all duration-300 "
          >
            <Plane /> <span>Flights</span>
          </Link>
        </li>
        <li className="border-b border-stroke-faint">
          {" "}
          <Link
            onClick={() => setIsOpen(!open)}
            href={"/admin/adduser"}
            className=" text-default flex items-center justify-start gap-2  px-10 py-5 hover:bg-gray-200  hover:text-brand-dark transition-all duration-300 "
          >
            <UserPlus />
            <span>Add User</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideLinksAdmin;
