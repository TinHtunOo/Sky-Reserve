"use client";

import { ArrowRightLeft, Minus, MoveRight, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const airportOptions = [
  { label: "Bangkok", value: "Bangkok" },
  { label: "Bagan", value: "Bagan" },
  { label: "Beijing", value: "Beijing" },
  { label: "Chiang Mai", value: "Chiang Mai" },
  { label: "Dawei", value: "Dawei" },
  { label: "Delhi", value: "Delhi" },
  { label: "Doha", value: "Doha" },
  { label: "Dubai", value: "Dubai" },
  { label: "Guangzhou", value: "Guangzhou" },
  { label: "Hanoi", value: "Hanoi" },
  { label: "Heho", value: "Heho" },
  { label: "Ho Chi Minh City", value: "Ho Chi Minh City" },
  { label: "Jakarta", value: "Jakarta" },
  { label: "Kuala Lumpur", value: "Kuala Lumpur" },
  { label: "Loikaw", value: "Loikaw" },
  { label: "London", value: "London" },
  { label: "Mandalay", value: "Mandalay" },
  { label: "Manila", value: "Manila" },
  { label: "Myeik", value: "Myeik" },
  { label: "Myitkyina", value: "Myitkyina" },
  { label: "Naypyidaw", value: "Naypyidaw" },
  { label: "Phnom Penh", value: "Phnom Penh" },
  { label: "Sittwe", value: "Sittwe" },
  { label: "Singapore", value: "Singapore" },
  { label: "Taipei", value: "Taipei" },
  { label: "Thandwe", value: "Thandwe" },
  { label: "Tokyo", value: "Tokyo" },
  { label: "Yangon", value: "Yangon" },
];

function SearchFlight() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialOrigin = searchParams.get("origin") || "Bangkok";
  const initialDistination = searchParams.get("destination") || "Singapore";
  const initialTrip = searchParams.get("tripType") || "one-way";
  const [trip, setTrip] = useState(initialTrip);
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDistination);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const isOneway = trip === "one-way";

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("origin", origin);
    params.set("destination", destination);
    params.set("tripType", trip);
    if (departureDate) params.set("departureDate", departureDate);
    else params.delete("departureDate");
    if (returnDate && !isOneway) params.set("returnDate", returnDate);
    else params.delete("returnDate");
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="p-3 md:py-5 md:px-10   border-b border-stroke-faint ">
      <div className="flex gap-5 mb-3 md:mt-0">
        <button
          onClick={() => setTrip("one-way")}
          className={`px-3 py-2 text-white ${
            isOneway ? "bg-brand-dark" : " bg-brand-light"
          } hover:opacity-80 cursor-pointer rounded-3xl text-small`}
        >
          One-Way
        </button>
        <button
          onClick={() => setTrip("round-trip")}
          className={`px-3 py-2  text-white ${
            isOneway ? "bg-brand-light" : "bg-brand-dark"
          } hover:opacity-80 cursor-pointer rounded-3xl text-small`}
        >
          Round-Trip
        </button>
      </div>
      <div className=" flex justify-between items-end flex-wrap gap-5">
        <div className="flex items-end justify-between gap-2 ">
          <div>
            <p className="mb-1 text-small tracking-wide">From</p>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="text-sm border border-stroke cursor-pointer  rounded-md p-2 text-fg bg-bg"
            >
              {airportOptions.map((option) => (
                <option
                  value={option.value}
                  key={option.value}
                  disabled={option.value === destination}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <span
            onClick={() => {
              setOrigin(destination);
              setDestination(origin);
            }}
            className="p-2 hidden sm:block cursor-pointer hover:bg-gray-400 rounded-2xl"
          >
            {isOneway ? <MoveRight /> : <ArrowRightLeft />}
          </span>
          <div>
            <p className="mb-1 text-small tracking-wide">To</p>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="text-sm border border-stroke cursor-pointer rounded-md p-2  text-fg bg-bg "
            >
              {airportOptions.map((option) => (
                <option
                  value={option.value}
                  key={option.value}
                  disabled={option.value === origin}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-end justify-between gap-2  ">
          <div>
            <label className=" block mb-1 text-small tracking-wide">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              min={new Date().toISOString().split("T")[0]}
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="text-sm border  border-stroke rounded-md p-2 cursor-pointer text-fg bg-bg"
            />
          </div>
          <span className="p-2 hidden sm:block">
            <Minus />
          </span>
          <div>
            <label className=" block mb-1 text-small tracking-wide">
              Return Date
            </label>
            <input
              type="date"
              name="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className={`text-sm ${
                isOneway ? "text-fg-muted " : "text-fg cursor-pointer"
              } border border-stroke rounded-md p-2 bg-bg `}
              disabled={isOneway}
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="py-2 px-4 hover:bg-brand-dark justify-center w-full cursor-pointer md:w-fit h-fit rounded-3xl text-bg flex gap-1 bg-brand "
        >
          <Search />
          Search Flight
        </button>
      </div>
    </div>
  );
}

export default SearchFlight;
