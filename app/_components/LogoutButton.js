"use client";
import { LogOut } from "lucide-react";
import { logout } from "../_lib/action";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };
  return (
    <button
      className="w-full cursor-pointer text-default flex items-center justify-start gap-2 p-2 sm:px-10 sm:py-5 hover:bg-gray-200  "
      onClick={handleLogout}
    >
      <LogOut />
      <span className="hidden sm:block">Logout </span>
    </button>
  );
}

export default LogoutButton;
