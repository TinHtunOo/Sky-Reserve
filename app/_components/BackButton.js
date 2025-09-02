"use client";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="p-1 md:p-1.5 border-2 rounded-md border-stroke cursor-pointer hover:bg-gray-300"
    >
      <MoveLeft />
    </button>
  );
}
