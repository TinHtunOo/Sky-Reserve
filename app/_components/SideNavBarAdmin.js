"use client";

import { Menu } from "lucide-react";
import SideLinksAdmin from "./SideLinksAdmin";
import { useState } from "react";

function SideNavBarAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="block sm:hidden fixed bg-surface mt-[80px] p-2 z-20 border-b border-stroke-faint  w-[100vw] ">
        <button
          className="cursor-pointer"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Menu />
        </button>
      </div>
      <SideLinksAdmin isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default SideNavBarAdmin;
