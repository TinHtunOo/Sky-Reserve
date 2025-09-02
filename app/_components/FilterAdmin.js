"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function FilterAdmin({ filterField, options }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleFilter(value) {
    const params = new URLSearchParams(searchParams.toString());

    params.set(filterField, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="bg-bg shadow-sm rounded-md w-fit flex overflow-hidden">
      {options.map((option) => (
        <button
          className="p-2 hover:bg-brand-dark hover:text-bg cursor-pointer disabled:bg-brand-dark disabled:cursor-not-allowed disabled:text-bg"
          key={option.value}
          onClick={() => handleFilter(option.value)}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterAdmin;
