"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SortByAdmin({ options }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleSort(value) {
    const params = new URLSearchParams(searchParams);
    params.set("sortField", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <select
      onChange={(e) => handleSort(e.target.value)}
      className="bg-bg cursor-pointer p-2 rounded-md shadow-sm rounded-m w-fit flex overflow-hidden"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortByAdmin;
