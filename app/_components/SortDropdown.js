"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleSort(sortField) {
    const params = new URLSearchParams(searchParams);
    params.set("sortField", sortField);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <select
      onChange={(e) => handleSort(e.target.value)}
      className="text-sm px-3 py-2 border border-stroke rounded-md cursor-pointer bg-white"
    >
      <option value="price">Price: Low to High</option>
      <option value="duration">Duration: Shortest</option>
      <option value="departureTime">Departure Time: Earliest First</option>
      <option value="departureDate">Departure Date: Earliest First</option>
    </select>
  );
}
