"use client";

import { LogOut } from "lucide-react";
import { logoutAdmin } from "../_lib/action";

function LogOutButtonAdmin() {
  return (
    <div className="relative group">
      <button
        onClick={logoutAdmin}
        className="hover:text-brand p-1 hover:bg-gray-200 rounded-sm"
      >
        <LogOut />
      </button>
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
        Log Out
      </div>
    </div>
  );
}

export default LogOutButtonAdmin;
