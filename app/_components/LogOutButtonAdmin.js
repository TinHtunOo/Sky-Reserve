"use client";

import { LogOut } from "lucide-react";
import { logoutAdmin } from "../_lib/action";

function LogOutButtonAdmin() {
  return (
    <button
      onClick={logoutAdmin}
      className="hover:text-brand p-1 hover:bg-gray-200 rounded-sm"
    >
      <LogOut />
    </button>
  );
}

export default LogOutButtonAdmin;
