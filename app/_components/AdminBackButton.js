"use client";
import { useRouter } from "next/navigation";

export default function AdminBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="py-2 px-4 uppercase text-default border rounded-md hover:bg-gray-200 border-stroke-faint cursor-pointer text-fg"
    >
      {" "}
      Back
    </button>
  );
}
