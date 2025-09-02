"use client";

import { ChevronDown, ChevronUp, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterPanel() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const cabinClass = searchParams.get("cabinClass") || "";
  const transit = searchParams.get("transit") || "";
  const departureTime = searchParams.get("departureTime") || "";

  function handleFilterChange(field, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(field, value);
    } else {
      params.delete(field);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="bg-white border-stroke-faint border-0 md:border-r p-0 md:p-4 h-full">
      <div className="flex gap-5 items-center mb-5">
        <h2 className=" h3 ">Filters</h2>{" "}
        <button
          className="p-1 bg-brand rounded-xl text-bg shadow-2xl block md:hidden "
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <div className={`space-y-6 ${mobileOpen ? "" : "hidden"} md:block`}>
        <div>
          <label className="text-small block mb-1 tracking-wide">
            Cabin Class
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="cabinClass"
                value="Economy"
                checked={cabinClass === "Economy"}
                onChange={() => handleFilterChange("cabinClass", "Economy")}
                className="accent-brand cursor-pointer"
              />
              Economy
            </label>

            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="cabinClass"
                value="Business"
                checked={cabinClass === "Business"}
                onChange={() => handleFilterChange("cabinClass", "Business")}
                className="accent-brand cursor-pointer"
              />
              Business
            </label>
          </div>
        </div>

        <div>
          <label className="text-small block mb-1 tracking-wide">Transit</label>
          <div className="space-y-2 font-body">
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="transit"
                value="0"
                checked={transit === "0"}
                onChange={() => handleFilterChange("transit", "0")}
                className="accent-brand cursor-pointer"
              />
              Non-stop
            </label>
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="transit"
                value="1"
                checked={transit === "1"}
                onChange={() => handleFilterChange("transit", "1")}
                className="accent-brand cursor-pointer"
              />
              1 Stop
            </label>
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="transit"
                value="2"
                checked={transit === "2"}
                onChange={() => handleFilterChange("transit", "2")}
                className="accent-brand cursor-pointer"
              />
              2 Stops
            </label>
          </div>
        </div>

        <div>
          <label className="text-small block mb-1 tracking-wide">
            Departure Time
          </label>
          <div className="space-y-2 font-body">
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="departureTime"
                value="early"
                checked={departureTime === "early"}
                onChange={() => handleFilterChange("departureTime", "early")}
                className="accent-brand cursor-pointer"
              />
              Early Morning (00:00-06:00)
            </label>
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="departureTime"
                value="morning"
                checked={departureTime === "morning"}
                onChange={() => handleFilterChange("departureTime", "morning")}
                className="accent-brand cursor-pointer"
              />
              Morning (06:00-12:00)
            </label>
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="departureTime"
                value="afternoon"
                checked={departureTime === "afternoon"}
                onChange={() =>
                  handleFilterChange("departureTime", "afternoon")
                }
                className="accent-brand cursor-pointer"
              />
              Afternoon (12:00-18:00)
            </label>
            <label className="flex items-center gap-2  text-sm">
              <input
                type="radio"
                name="departureTime"
                value="evening"
                checked={departureTime === "evening"}
                onChange={() => handleFilterChange("departureTime", "evening")}
                className="accent-brand cursor-pointer"
              />
              Evening (18:00-00:00)
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-stroke mt-6">
          <button
            type="button"
            className="flex cursor-pointer items-center text-sm text-gray-500 hover:text-fg "
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.delete("cabinClass");
              params.delete("transit");
              params.delete("departureTime");
              router.replace(`${pathname}?${params.toString()}`, {
                scroll: false,
              });
            }}
          >
            <X />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
